/**
 * popup.js — Popup script for Sakha (Senior-Friendly UI)
 */

import { t } from "./i18n.js";
import { getPilotLogs, logsToCSV } from "./eventLogger.js";

document.addEventListener("DOMContentLoaded", async () => {
  const langSelector = document.getElementById("lang-selector");
  const appTitle = document.getElementById("app-title");
  const appSubtitle = document.getElementById("app-subtitle");
  const statusCard = document.getElementById("status-card");
  const statusIcon = document.getElementById("status-icon");
  const statusTitle = document.getElementById("status-title");
  const statusDetail = document.getElementById("status-detail");
  const btnExplain = document.getElementById("btn-explain");
  const explainBtnText = document.getElementById("explain-btn-text");
  const explainOutput = document.getElementById("explain-output");
  const btnExportLogs = document.getElementById("btn-export-logs");

  let currentLang = "en";

  // Load saved language
  if (chrome.storage?.local) {
    const data = await chrome.storage.local.get(["sakha_lang"]);
    if (data?.sakha_lang) {
      currentLang = data.sakha_lang;
      langSelector.value = currentLang;
    }
  }

  function updateUiLanguage(lang) {
    currentLang = lang;
    appTitle.textContent = t("app_name", lang);
    appSubtitle.textContent = t("app_subtitle", lang);
    explainBtnText.textContent = t("btn_explain", lang);
    if (chrome.storage?.local) {
      chrome.storage.local.set({ sakha_lang: lang });
    }
    // Notify active tab to re-render in new language
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "SET_LANGUAGE", lang }).catch(() => {});
      }
    });
  }

  langSelector.addEventListener("change", (e) => {
    updateUiLanguage(e.target.value);
    queryPageStatus();
  });

  updateUiLanguage(currentLang);

  // Query active tab page safety status with graceful edge state handling
  function queryPageStatus() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (!activeTab?.id) return;

      const url = activeTab.url || "";
      const isInternalPage = url.startsWith("chrome://") || 
                            url.startsWith("chrome-extension://") || 
                            url.startsWith("edge://") || 
                            url.startsWith("about:");

      if (isInternalPage) {
        statusCard.className = "status-card";
        statusIcon.textContent = "🛡️";
        statusTitle.textContent = t("app_name", currentLang);
        statusDetail.textContent = t("state_unsupported_page", currentLang);
        return;
      }

      chrome.tabs.sendMessage(activeTab.id, { type: "GET_PAGE_SAFETY" }, (res) => {
        if (chrome.runtime.lastError || !res?.evaluation) {
          statusCard.className = "status-card";
          statusIcon.textContent = "🛡️";
          statusTitle.textContent = t("app_name", currentLang);
          statusDetail.textContent = t("state_active_protecting", currentLang);
          return;
        }

        const evalData = res.evaluation;
        let localizedReason = evalData.reasonEn;
        if (currentLang === "te" && evalData.reasonTe) {
          localizedReason = evalData.reasonTe;
        } else if (currentLang === "hi") {
          localizedReason = evalData.reasonHi || evalData.reasonEn;
        }

        if (evalData.level === "danger") {
          statusCard.className = "status-card danger";
          statusIcon.textContent = "🚨";
          statusTitle.textContent = t("warning_danger_title", currentLang);
          statusDetail.textContent = localizedReason;
        } else if (evalData.level === "caution") {
          statusCard.className = "status-card caution";
          statusIcon.textContent = "⚠️";
          statusTitle.textContent = t("warning_caution_title", currentLang);
          statusDetail.textContent = localizedReason;
        } else {
          statusCard.className = "status-card";
          statusIcon.textContent = "✓";
          statusTitle.textContent = t("warning_safe_title", currentLang);
          statusDetail.textContent = t("rule_safe_detail", currentLang) || "No scam or deceptive patterns detected on this site.";
        }

        // Dynamically update Masking Feature Bullet
        const featureMaskingText = document.getElementById("feature-masking-text");
        if (featureMaskingText) {
          const count = res?.maskStats?.totalMasked || 0;
          if (count > 0) {
            featureMaskingText.textContent = `${count} sensitive item${count === 1 ? "" : "s"} blurred on-screen`;
          } else {
            featureMaskingText.textContent = "No sensitive fields detected on this page";
          }
        }
      });
    });
  }

  // Fetch server provider mode for honest disclosure
  async function checkServerProviderMode() {
    const featurePrivacyText = document.getElementById("feature-privacy-text");
    if (!featurePrivacyText) return;
    try {
      const res = await fetch("http://localhost:3000/api/provider");
      if (res.ok) {
        const data = await res.json();
        const modeLabel = data.mode === "offline" ? "Local model (Ollama)" : "Cloud model (Groq)";
        featurePrivacyText.textContent = `Warnings & masking run on this device. Explain sends only masked text to ${modeLabel}.`;
      }
    } catch {
      // Keep default honest text if backend unreachable
      featurePrivacyText.textContent = "Warnings & masking run on this device. Explain sends only masked text to cloud when active.";
    }
  }

  queryPageStatus();
  checkServerProviderMode();

  // Explain Button Handler (Masked text only)
  btnExplain.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (!activeTab?.id) return;

      explainOutput.style.display = "block";
      explainOutput.textContent = t("loading_explanation", currentLang);

      chrome.tabs.sendMessage(activeTab.id, { type: "GET_MASKED_PAGE_TEXT" }, async (res) => {
        if (chrome.runtime.lastError || !res?.maskedText) {
          explainOutput.textContent = t("explain_error", currentLang);
          return;
        }

        const maskedSnippet = res.maskedText.slice(0, 1500); // Truncate safely

        try {
          const resp = await fetch("http://localhost:3000/api/explain", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              text: maskedSnippet,
              lang: currentLang
            })
          });

          const json = await resp.json().catch(() => ({}));

          if (resp.ok && json.is_ai_output && json.explanation) {
            // Real verified AI output
            explainOutput.textContent = json.explanation;
          } else if (json.safety_reminder) {
            // Distinguish safety reminder clearly from AI output
            explainOutput.innerHTML = "";
            const errDiv = document.createElement("div");
            errDiv.style.color = "#dc2626";
            errDiv.style.marginBottom = "6px";
            errDiv.textContent = json.error || t("explain_offline", currentLang);

            const reminderDiv = document.createElement("div");
            reminderDiv.style.fontSize = "13px";
            reminderDiv.style.color = "#475569";
            reminderDiv.textContent = `General safety reminder: ${json.safety_reminder}`;

            explainOutput.appendChild(errDiv);
            explainOutput.appendChild(reminderDiv);
          } else {
            explainOutput.textContent = t("explain_error", currentLang);
          }
        } catch (err) {
          // Honest offline message — never return canned text disguised as AI output.
          explainOutput.innerHTML = "";
          const offlineDiv = document.createElement("div");
          offlineDiv.style.color = "#dc2626";
          offlineDiv.style.marginBottom = "4px";
          offlineDiv.textContent = t("explain_offline", currentLang);

          const tipDiv = document.createElement("div");
          tipDiv.style.fontSize = "13px";
          tipDiv.style.color = "#475569";
          tipDiv.textContent = "General safety reminder: Confirm this is an official website before sharing any personal details.";

          explainOutput.appendChild(offlineDiv);
          explainOutput.appendChild(tipDiv);
        }
      });
    });
  });

  // Export Pilot Logs CSV
  btnExportLogs.addEventListener("click", async () => {
    const logs = await getPilotLogs();
    const csvContent = logsToCSV(logs);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `sakha_pilot_telemetry_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
