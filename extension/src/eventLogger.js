/**
 * eventLogger.js — Local-Only Pilot Event Logger for Sakha
 *
 * Privacy Guarantees:
 * - Strictly zero personal data (NO Aadhaar, PAN, Card, Names, or raw DOM content).
 * - Stores events strictly in chrome.storage.local (or localStorage in mock/testing).
 * - Exports formatted JSON and CSV files for human pilot conductors.
 *
 * Logged Events:
 * - WARNING_SHOWN: { timestamp, level, rulesTriggered, domain }
 * - USER_DECISION: { timestamp, decision: 'LEFT_PAGE'|'PROCEEDED', domain }
 * - MASKING_APPLIED: { timestamp, maskedInputsCount, maskedTextNodesCount, domain }
 * - EXPLAIN_REQUESTED: { timestamp, durationMs, success, domain }
 */

const STORAGE_KEY = "sakha_pilot_logs";

export async function logPilotEvent(eventType, payload = {}) {
  const event = {
    id: "evt_" + Math.random().toString(36).slice(2, 9),
    timestamp: new Date().toISOString(),
    eventType,
    domain: payload.domain || window.location?.hostname || "unknown",
    ...payload
  };

  try {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      const data = await chrome.storage.local.get([STORAGE_KEY]);
      const logs = data[STORAGE_KEY] || [];
      logs.push(event);
      await chrome.storage.local.set({ [STORAGE_KEY]: logs });
    } else if (typeof localStorage !== "undefined") {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.push(event);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
  } catch (err) {
    console.warn("[Sakha Logger] Could not record local event:", err);
  }

  return event;
}

export async function getPilotLogs() {
  try {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      const data = await chrome.storage.local.get([STORAGE_KEY]);
      return data[STORAGE_KEY] || [];
    } else if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    }
  } catch (err) {
    return [];
  }
  return [];
}

export async function clearPilotLogs() {
  if (typeof chrome !== "undefined" && chrome.storage?.local) {
    await chrome.storage.local.remove([STORAGE_KEY]);
  } else if (typeof localStorage !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}

/**
 * Convert logs array into standard CSV string
 */
export function logsToCSV(logs) {
  if (!logs || logs.length === 0) {
    return "id,timestamp,eventType,domain,details\n";
  }
  const headers = ["id", "timestamp", "eventType", "domain", "details"];
  const rows = logs.map(l => {
    const details = JSON.stringify(l).replace(/"/g, '""');
    return `"${l.id}","${l.timestamp}","${l.eventType}","${l.domain}","${details}"`;
  });
  return [headers.join(","), ...rows].join("\n");
}
