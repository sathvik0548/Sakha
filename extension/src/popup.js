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

  // Query active tab page safety status
  function queryPageStatus() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (!activeTab?.id) return;

      chrome.tabs.sendMessage(activeTab.id, { type: "GET_PAGE_SAFETY" }, (res) => {
        if (chrome.runtime.lastError || !res?.evaluation) {
          statusCard.className = "status-card";
          statusIcon.textContent = "🛡️";
          statusTitle.textContent = "Sakha Active";
          statusDetail.textContent = "Masking sensitive details on-screen.";
          return;
        }

        const evalData = res.evaluation;
        if (evalData.level === "danger") {
          statusCard.className = "status-card danger";
          statusIcon.textContent = "🚨";
          statusTitle.textContent = t("warning_danger_title", currentLang);
          statusDetail.textContent = evalData.reasonTe && currentLang === "te" ? evalData.reasonTe : evalData.reasonEn;
        } else if (evalData.level === "caution") {
          statusCard.className = "status-card caution";
          statusIcon.textContent = "⚠️";
          statusTitle.textContent = t("warning_caution_title", currentLang);
          statusDetail.textContent = evalData.reasonTe && currentLang === "te" ? evalData.reasonTe : evalData.reasonEn;
        } else {
          statusCard.className = "status-card";
          statusIcon.textContent = "✓";
          statusTitle.textContent = t("warning_safe_title", currentLang);
          statusDetail.textContent = "No scam or deceptive patterns detected on this site.";
        }
      });
    });
  }

  queryPageStatus();

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

          if (!resp.ok) throw new Error("Server error");
          const json = await resp.json();
          explainOutput.textContent = json.explanation || t("explain_error", currentLang);
        } catch (err) {
          // Honest offline message — never return canned text disguised as AI output.
          // The explain feature requires the local backend; if it's unreachable, say so plainly.
          explainOutput.textContent = t("explain_offline", currentLang);
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
