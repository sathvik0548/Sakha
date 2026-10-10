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
          statusDetail.textContent = localizedReason;
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

        // Populate Live Analysis Panel from real result object
        renderLiveAnalysisPanel(evalData, currentLang);
      });
    });
  }

  function renderLiveAnalysisPanel(evalData, lang) {
    if (!evalData) return;

    // 1. Scanned Counts
    const domStats = evalData.domStats || {};
    document.getElementById("count-fields").textContent = domStats.fieldsCount ?? 0;
    document.getElementById("count-forms").textContent = domStats.formsCount ?? 0;
    document.getElementById("count-links").textContent = domStats.linksCount ?? 0;
    document.getElementById("count-frames").textContent = domStats.framesCount ?? 0;

    // Badge
    const summaryBadge = document.getElementById("analysis-summary-badge");
    if (summaryBadge) {
      summaryBadge.textContent = `${evalData.totalChecksCount || 5} checks run`;
    }

    // 2. Verdict & Measured Time
    const verdictTitle = document.getElementById("panel-verdict-title");
    const verdictReasonEn = document.getElementById("panel-verdict-reason-en");
    const verdictReasonTe = document.getElementById("panel-verdict-reason-te");
    const analysisTime = document.getElementById("panel-analysis-time");

    if (verdictTitle) {
      const levelLabel = evalData.level === "danger" ? "🚨 Unsafe / Scam Risk" : (evalData.level === "caution" ? "⚠️ Caution Advised" : "✅ Safe");
      verdictTitle.textContent = `Verdict: ${levelLabel}`;
      verdictTitle.style.color = evalData.level === "danger" ? "#dc2626" : (evalData.level === "caution" ? "#d97706" : "#16a34a");
    }

    if (verdictReasonEn) verdictReasonEn.textContent = evalData.reasonEn || "";
    if (verdictReasonTe) verdictReasonTe.textContent = evalData.reasonTe || "";
    if (analysisTime) analysisTime.textContent = `${evalData.analysisTimeMs ?? 0.1} ms`;

    // 3. Checks Run & Rules Fired
    const checksList = document.getElementById("panel-checks-list");
    if (checksList) {
      checksList.innerHTML = "";
      const checks = evalData.checks || [];
      checks.forEach(chk => {
        const item = document.createElement("div");
        item.className = "check-item";

        const left = document.createElement("span");
        left.textContent = chk.name;

        const right = document.createElement("span");
        right.className = chk.passed ? "check-pass" : "check-fail";
        right.textContent = chk.passed ? "✓ Passed" : "⚠ Risk Detected";

        item.appendChild(left);
        item.appendChild(right);
        checksList.appendChild(item);
      });

      // Rules fired with weights
      const rulesDetailed = evalData.rulesDetailed || [];
      if (rulesDetailed.length > 0) {
        const rulesBlock = document.createElement("div");
        rulesBlock.style.cssText = "margin-top:6px; padding-top:6px; border-top:1px solid #f1f5f9; font-size:11px;";
        rulesDetailed.forEach(r => {
          const rEl = document.createElement("div");
          rEl.style.color = "#dc2626";
          rEl.textContent = `Rule fired: ${r.name} (weight ${r.weight}/100) — ${r.reason}`;
          rulesBlock.appendChild(rEl);
        });
        checksList.appendChild(rulesBlock);
      } else {
        const noRuleEl = document.createElement("div");
        noRuleEl.style.cssText = "margin-top:4px; font-size:11px; color:#16a34a;";
        noRuleEl.textContent = `No rules fired out of ${evalData.totalChecksCount || 5} checks.`;
        checksList.appendChild(noRuleEl);
      }
    }

    // 4. Fields Table (Masked values only)
    const tableBody = document.getElementById("fields-table-body");
    if (tableBody) {
      tableBody.innerHTML = "";
      const fields = evalData.fieldsTable || [];
      if (fields.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#94a3b8; padding:8px 0;">No input fields detected on page</td></tr>`;
      } else {
        fields.forEach(f => {
          const tr = document.createElement("tr");

          const tdName = document.createElement("td");
          tdName.textContent = f.label || f.name || f.id;
          tdName.title = `ID: ${f.id}, Name: ${f.name}`;

          const tdType = document.createElement("td");
          const typeSpan = document.createElement("span");
          typeSpan.className = "type-pill";
          typeSpan.textContent = f.detectedType;
          tdType.appendChild(typeSpan);

          const tdConf = document.createElement("td");
          tdConf.textContent = `${Math.round(f.confidence * 100)}%`;

          const tdEvidence = document.createElement("td");
          tdEvidence.textContent = f.evidence || "-";
          tdEvidence.title = f.evidence;

          tr.appendChild(tdName);
          tr.appendChild(tdType);
          tr.appendChild(tdConf);
          tr.appendChild(tdEvidence);
          tableBody.appendChild(tr);
        });
      }
    }
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
