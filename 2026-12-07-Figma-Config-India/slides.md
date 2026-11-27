---
theme: seriph
title: Figma 也在做 spec-driven
info: Figma Config India 2026：設計端如何把 context 交給 AI
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
---

# Figma 也在做 spec-driven

## 設計端如何把 context 交給 AI

Figma Config India 2026 分享

<div class="abs-bl m-6 text-sm text-gray-400">
  Amo Wu · 2026-12-07
</div>

<!--
TODO（6.1）：開場備忘稿。
-->

---

# 今天的路線

<div class="text-lg mt-6">

| | | |
|---|---|---|
| **1** | Hook：AI 對設計還是用猜的 | 2 min |
| **2** | Map：Config India 的 7 項發表 | 3 min |
| **3** | Core：Specs、Guidelines、Code source、MCP | 10 min |
| **4** | Extension：設計稿就是程式碼之後 | 5 min |
| **5** | Reality：能用什麼、要花多少 | 3 min |
| **6** | Takeaways：明天就能做的事 | 2 min |

</div>

<div class="mt-6 text-gray-400">
  全場約 25 分鐘。第 3 段是重點，用一個真實的案例貫穿。
</div>

<!--
TODO（6.1）：路線圖備忘稿。
-->

---
layout: section
---

# 1 · Hook

AI 對設計還是用猜的 · 2 min

<!--
TODO（6.1）
-->

---

# 上一場：讓 AI 知道什麼叫「完成」

<div class="todo">TODO（6.1）：引用 OpenSpec 分享的結論，讓沒聽過的人也能理解</div>

<!--
TODO（6.1）
-->

---

# 但設計呢？

<div class="todo">TODO（6.1）：AI 對設計端的 context 仍然是用猜的；引出今天的問題</div>

<!--
TODO（6.1）
-->

---
layout: section
---

# 2 · Map

Config India 的 7 項發表 · 3 min

<!--
TODO（6.2）
-->

---

# 7 項發表，三組

<div class="todo">TODO（6.2）：Build on the canvas / Context for AI / Governance 三組，每項標釋出狀態；Centralized design systems 只在這裡出現</div>

<!--
TODO（6.2）
-->

---
layout: section
---

# 3 · Core

Specs、Guidelines、Code source、MCP · 10 min

<!--
TODO（6.3）
-->

---

# 程式碼端 ↔ Figma 端

<div class="todo">TODO（6.3）：Mermaid 對照圖：openspec/specs ↔ Specs、DESIGN.md ↔ Guidelines、src/components ↔ Code source、MCP 是橋</div>

<!--
TODO（6.3）
-->

---

# 案例：Campus 新版「價格方案」

<div class="todo">TODO（6.3）：案例介紹；需求散在五個地方（Figma frames、畫布註記、Notion PRD、Google Sheet、Drive）</div>

<!--
TODO（6.3）
-->

---

# 設計稿和 PRD 不一致

<div class="todo">TODO（6.3、6.6）：PRD vs 整頁 mockup vs 示意區；標出 30、90 人兩列；註明擷取日期 2026-11-27；點出交接缺口</div>

<!--
TODO（6.3、6.6）
-->

---

# Specs <span class="evidence evidence-tested">實測</span>

<div class="todo">TODO（6.3）：Specs 是什麼、對前端工程師的意義；從 PRD 建 Spec（Claude Code 透過 MCP 寫入）</div>

<!--
TODO（6.3）
-->

---

# 有 Spec vs 沒有 Spec <span class="evidence evidence-tested">實測</span>

<div class="todo">TODO（6.3）：spike 1 vs spike 2 對照：90 人價格、CTA 連結；同提示詞、同模型；揭露 Spec 裡「以本表為準」那句</div>

<!--
TODO（6.3）
-->

---

# Guidelines <span class="evidence evidence-concept">概念</span>

<div class="todo">TODO（6.3）：Guidelines 是什麼；Claude 起草的草稿節錄（每條規則有來源）；尚未套用到 Figma；團隊已有的「[AI 實驗用] code-based library」</div>

<!--
TODO（6.3）：包含「這對設計師的意義」
-->

---

# Code source <span class="evidence evidence-locked">未開放</span>

<div class="todo">TODO（6.3）：官方說明一張帶過；目前是 closed beta</div>

<!--
TODO（6.3）
-->

---

# MCP：兩端的橋 <span class="evidence evidence-tested">實測</span>

<div class="todo">TODO（6.3）：MCP 讀（設計稿、Spec）與寫（Spec、Code layer、擷取回 Figma）；這場所有證據都是透過 MCP 產生的</div>

<!--
TODO（6.3）
-->

---
layout: section
---

# 4 · Extension

設計稿就是程式碼之後 · 5 min

<!--
TODO（6.4）
-->

---

# Code layers <span class="evidence evidence-tested">實測</span>

<div class="todo">TODO（6.4）：AI 寫的元件放進 Figma 跑；只測了 MCP 上傳程式碼這條路，Figma agent 從 frame 轉換的流程標「概念」</div>

<!--
TODO（6.4）：包含「這對設計師的意義」
-->

---

# 本機正常 ≠ 預覽正常

<div class="todo">TODO（6.4）：修正前／修正後並列；原因：預覽跑 production build，SVG 內嵌讓 CSS 失效</div>

<!--
TODO（6.4）
-->

---

# 程式碼 → 回到 Figma <span class="evidence evidence-tested">實測</span>

<div class="todo">TODO（6.4）：generate_figma_design 把畫面擷取回可編輯圖層；設計 → 程式碼 → 設計</div>

<!--
TODO（6.4）
-->

---

# Payload 與交接點的移動 <span class="evidence evidence-concept">概念</span>

<div class="todo">TODO（6.4）：Payload 是什麼；設計稿本身就是程式碼之後，交接點會移到哪裡</div>

<!--
TODO（6.4）
-->

---
layout: section
---

# 5 · Reality

能用什麼、要花多少 · 3 min

<!--
TODO（6.5）
-->

---

# 釋出狀態與成本

<div class="todo">TODO（6.5）：哪些現在能用、哪些會花 credits、哪些拿不到；Code layers 免費期已於 11/4 結束；Path A（Figma agent，扣 Figma credits）vs Path B（自己的 agent 透過 MCP，受 rate limit 限制）</div>

<!--
TODO（6.5）
-->

---

# 我們實測到的 credits

<div class="todo">TODO（6.5）：建 Spec、兩次上傳 Code layer、擷取回 Figma，全部 0 credits；只代表一個帳號、一天的結果</div>

<!--
TODO（6.5）
-->

---
layout: section
---

# 6 · Takeaways

明天就能做的事 · 2 min

<!--
TODO（6.5）
-->

---

# 前端工程師可以先試的事

<div class="todo">TODO（6.5）：每一項都只用目前已開放的功能</div>

<!--
TODO（6.5）
-->

---
layout: center
class: text-center
---

# Q&A

<!--
TODO（6.7）
-->
