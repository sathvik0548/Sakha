# CHECKLIST.md — Pre-Recording & Recording Studio Checklist

Follow this checklist strictly prior to pressing Record to ensure flawless presentation quality and zero accidental data leakage.

---

## 1. Environment & Screen Setup
- [ ] **Display Resolution:** Set display to strictly **1920x1080 (1080p, 16:9 ratio)**. Avoid 4K downscaling or non-standard laptop aspect ratios.
- [ ] **Browser Profile:** Launch an isolated, completely fresh temporary Chrome/Chromium user profile.
- [ ] **Bookmarks & Extensions:** Hide bookmarks bar (`Cmd+Shift+B` / `Ctrl+Shift+B`). Disable all third-party extensions except Sakha.
- [ ] **OS Notifications:** Enable **Do Not Disturb / Focus Mode**. Silence Slack, WhatsApp, Telegram, calendar alarms, and email alerts.
- [ ] **Wallpaper & Desktop:** Clean desktop; close background terminals and IDE windows not part of the recording.
- [ ] **Font Zoom:** Set default browser page zoom to **110% or 125%** so senior typography and input fields are exceptionally legible on mobile video players.

---

## 2. Audio & Narration Setup
- [ ] **Microphone Level:** Peak levels between **-6dB and -12dB**; no clipping.
- [ ] **Pop Filter & Distance:** 15–20 cm from microphone to minimize plosives.
- [ ] **Room Acoustics:** Quiet room, air conditioning and fan noise eliminated.
- [ ] **Pacing Check:** Follow pause markers in `narration.md` (`[pause 1s]`). Aim for an unhurried, reassuring cadence suitable for senior-focused material.

---

## 3. Privacy & Synthetic Data Guardrails
- [ ] **Zero Real Brands:** All mock demonstration pages use clearly fictional institutions and `.test` / `.top` top-level domains.
- [ ] **Zero Real PII:** All Aadhaar numbers must be synthetic test numbers (`2345 6789 0123`), all names fictional (`Rajesh Kumar`), all card numbers standard test sequences.
- [ ] **Network Inspector:** Ensure DevTools is open and clean; zero external host requests visible.

---

## 4. Fallback Execution Plan
- [ ] **Pre-Flight Server Check:** If demonstrating the optional "Explain" feature, start the local server beforehand (`cd server && npm start`) and verify `http://localhost:3000/api/explain` responds.
- [ ] **Offline Honesty Check:** If the server is offline or fails to respond, Sakha displays: *"Helper is resting. The optional explanation helper needs the local assistant server running."* This is an intentional, honest edge state that can be narrated as such.
- [ ] **Scripted Recording Fallback:** If live manual recording encounters timing hitches, run `node submission/video/record_demo.js` to produce a deterministic, frame-perfect recording via Playwright.
