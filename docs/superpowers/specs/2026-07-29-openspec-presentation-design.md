# OpenSpec 內部分享簡報 — 設計文件

- 日期：2026-07-29
- 簡報日期：2026-08-03
- 產出位置：`2026-08-03-OpenSpec/slides.md`

## 目標與受眾

對象是 Hahow 內部工程團隊，目的是推廣導入 OpenSpec 作為規格驅動開發（SDD）的工作流程。

場合為內部分享會，講述 25 分鐘，另留 5 分鐘 Q&A。

## 素材來源

簡報內容取自高見龍的四篇文章：

| 文章 | 在簡報中的角色 |
|---|---|
| [SDD 規格驅動開發](https://kaochenlong.com/sdd-spec-driven-development) | 概念底盤：三階段、EARS、三個層級、工具比較 |
| [OpenSpec 讓 SDD 變簡單的三個指令](https://kaochenlong.com/openspec) | 主體：proposal → apply → archive、Delta 格式 |
| [Spec-as-source 的理想與現實](https://kaochenlong.com/sdd-spec-as-source) | 限制與反思：非確定性、虛假控制感、spec 作為活文件 |
| [給 AI 超能力？Superpowers 的設計與取捨](https://kaochenlong.com/ai-superpowers-skills) | 第 6 章結尾延伸，1 張（僅介紹，不談取捨） |

實例一律取自 `/Users/amowu/Documents/Hahow/hahow-for-business-frontend` 的真實 change 紀錄，不使用虛構範例。該 repo 自 2026-05-27 起使用 OpenSpec，至 2026-07-29 已累積 16 個 change（`openspec/changes/archive/` 內 11 個，其餘散於 feature branch）與 14 份正式 spec，並使用 `/opsx:propose`、`/opsx:explore`、`/opsx:apply`、`/opsx:archive` 指令。

## 敘事結構

採線性教學結構：痛點 → SDD 概念 → OpenSpec → 限制 → 導入建議。

理由：受眾多數尚未接觸 OpenSpec，需要先建立完整概念地圖再談導入。對照式敘事（同一功能兩種做法）與價值先行敘事（spec 是團隊記憶）都曾評估，最終選擇線性結構以確保資訊完整。

| # | 章節 | 時間 | 核心訊息 |
|---|---|---|---|
| 1 | 開場：AI 說「我做完了」 | 3 min | Vibe coding 的三個問題 |
| 2 | SDD 是什麼 | 6 min | 在開始寫之前，先定義什麼叫「完成」 |
| 3 | 工具地景：為什麼是 OpenSpec | 3 min | Brownfield-first、純 Markdown、無 API key |
| 4 | OpenSpec 實戰：三個指令 | 8 min | proposal → apply → archive |
| 5 | 現實：spec 不是銀彈 | 3 min | 真正的價值是留下決策脈絡 |
| 6 | 怎麼開始 | 2 min | 從下一個新功能開始，別回頭補 spec |
| 7 | 總結 | 1 min | 五句話收束，回到開場的「完成了什麼？」 |

## 案例配置

三個真實 change 各負擔一個教學目的，不互相重疊：

規模一律以 **task 數**為主要指標，字數為輔（proposal＋design 的中文字元數，不含空白）。

**主例 — `2026-06-26-quiz-multiple-choice`**（第 4 章）

31 個 task、3 份 spec、提案＋設計約 1.3 萬字。一個 change 同時 `ADDED quiz-question-editor`、`MODIFIED quiz-taking-page`、`MODIFIED quiz-result-page`，可一次示範 Delta 格式、多 capability 拆分與 `specs/` 子目錄結構；其 design.md 的 D1 也是決策紀錄（理由／替代方案／影響）最標準的形狀。

**對照 — `2026-06-11-align-auto-detection-filter-labels`**（第 4 章結尾）

7 個 task、1 份 spec、約 4 千字，只調整三個下拉選單文案。放在主例旁邊，回答「這種小事也要寫提案嗎」，並帶出「什麼情況不需要提案」。

**脈絡案例 — `2026-07-23-fix-stale-session-signout`**（第 5 章）

證明 spec 是活文件而非一次性文件：

- proposal 記錄「範圍決定（PR #1544 review 後）」——code review 後砍掉一半範圍，連已完成的 task 都還原，理由寫入文件
- design.md 記下只有踩過才知道的事實：Rails 是 cookie-based session store，`sign_out` 是重設 session 而非刪除 cookie，因此驗收不可用「cookie 是否消失」判斷
- git log 可見 spec 被持續修訂：「依本地重現結果修正失效機制與驗收標準」→「範圍縮小為只修復登出並重新 archive」

## 投影片大綱

內容 45 張，另加七章各一張章節過場，總計 52 張。

### 開場前（2 張）

1. 封面：標題、講者、日期
2. 今天的路線：六章標題與各章時間預算，並預告第 5 章談限制

### 第 1 章 — 開場（4 張）

3. 場景大字：「我做完了」
4. Vibe Coding 的甜蜜：POC 驗證、小工具、技術探索
5. Vibe Coding 的危險：風格不一致／漏掉沒說的需求／自信地宣稱完成
6. 轉折：問題不在 AI 不夠強，在於沒人定義過什麼叫「完成」

### 第 2 章 — SDD 是什麼（12 張）

7. SDD 不是新發明——瀑布、TDD、BDD 的延續
8. 核心定位：成為 AI 與人的共同語言
9. 三階段總覽圖：Requirements → Design → Tasks
10. Requirements：使用者故事＋驗收標準（登入範例）
11. Design：架構、資料流、錯誤處理、測試策略——在寫程式前發現問題
12. Tasks：可追蹤、可驗收、能追溯回需求編號
13. EARS 的來歷：2009 年 Alistair Mavin 與 Rolls-Royce 團隊，Airbus／NASA／Siemens 採用
14. EARS 格式：`WHEN … THEN … SHALL`
15. EARS 的三個好處：強迫明確、易轉測試、壓縮 AI 猜測空間
16. 三個層級總覽
17. Spec-first／Spec-anchored／Spec-as-source 各自的樣貌
18. 定位：本場談的是第二層 Spec-anchored——spec 進版控、隨專案演進

### 第 3 章 — 為什麼是 OpenSpec（3 張）

19. 四個工具比較表：Kiro／Spec Kit／Tessl／OpenSpec
20. Greenfield vs Brownfield——我們是後者
21. OpenSpec 的取捨：純 Markdown、無 API key、支援多種 AI 工具、`specs` 與 `changes` 分離

### 第 4 章 — 實戰：三個指令（14 張）

22. 安裝與初始化＋目錄結構（`specs`／`changes`／`archive`）
23. 三階段流程圖：proposal → apply → archive
24. Stage 1 proposal：指令與產物清單
25. `quiz-multiple-choice` 的 Why（真實節錄）
26. 同一份的 What Changes（真實節錄）
27. Capabilities 段：ADDED 一項＋MODIFIED 兩項
28. 對應的 `specs/` 子目錄結構
29. Delta 格式：`## ADDED`／`## MODIFIED`／`## REMOVED`（REMOVED 須寫 Reason）
30. Scenario 寫法：`WHEN / THEN / AND` 搭配 `SHALL`／`MUST`，每個 Requirement 至少一個 Scenario
31. design.md 的 Decisions：以 `quiz-multiple-choice` 的 D1 示範決策紀錄的三個欄位（理由／替代方案／影響）。置於規格之後、apply 之前——規格說「系統要變成什麼樣」，design.md 說「打算怎麼做到、為什麼不用另一種做法」，是動手前的最後一關
32. Stage 2 apply：tasks.md 逐項打勾（真實節錄）
33. Stage 3 archive：變更合併回 `openspec/specs/`
34. 另一個極端：`align-auto-detection-filter-labels`，7 個 task／1 份 spec／純文案調整
35. 什麼情況不需要提案＋常用指令（`list`／`validate --strict`／`show`／`view`）

### 第 5 章 — 現實：spec 不是銀彈（5 張）

36. 同一份 spec 跑三次，功能相同但結構不同——LLM 的非確定性
37. 自然語言的曖昧：「點擊按鈕顯示對話框」背後七個沒回答的問題
38. 虛假的控制感：MDD 的前車之鑑、`Verschlimmbesserung`
39. 轉折：真正的價值不是控制 AI，是留下決策脈絡
40. `fix-stale-session-signout` 的兩段真實紀錄（見上節）

### 第 6 章 — 怎麼開始（3 張）

41. 導入建議：從下一個新功能開始，不要回頭補 spec
42. 三個月的數字：16 個 change、14 份 spec、單一 change 規模從 7 個 task 到 52 個 task
43. 延伸：Superpowers——規格解決 what，紀律解決 how。只介紹四個代表性 Skills，不談取捨（原「Superpowers 的取捨」那張已移除）

### 第 7 章 — 總結（2 張）

44. 五句話：問題不在 AI 不夠強／SDD 就是先定義完成／OpenSpec 適合我們／但它不是銀彈／真正的收穫是脈絡。結語回到開場：「下次 AI 說完成了，反問——完成了什麼？」
45. References：四篇文章的標題與連結（見文末 References 一節），以 `layout: center` 呈現，文字 `text-sm`

## 視覺與技術規格

### 檔案配置

- 主檔：`2026-08-03-OpenSpec/slides.md`
- 資產：`2026-08-03-OpenSpec/assets/`，以相對路徑引用
- 全繁體中文；OpenSpec 指令、Delta 關鍵字、檔名保留原文

### Frontmatter

```yaml
theme: seriph
title: OpenSpec：讓 AI 知道什麼叫「完成」
info: 從 Vibe Coding 到規格驅動開發 —— OpenSpec 在 hahow-for-business-frontend 的實踐
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
```

封面不使用背景圖片。專案根目錄的 `public/` 是空的；DRM 那場的 `background: /cover.png` 實際來自 `2026-05-11-DRM/public/cover.png`（Slidev 的 `public/` 以 slides.md 所在資料夾為基準）。本場暫無封面素材，先用純文字封面；日後若要加圖，放到 `2026-08-03-OpenSpec/public/cover.png` 並在 frontmatter 補 `background: /cover.png` 即可。

### 版面規則

- 章節分隔用 `layout: section`，七章各一張過場
- 概念金句用 `layout: center` 搭配大字
- 比較表用原生 Markdown table 搭配 `text-sm`
- 流程圖（內容第 9、23 張）用 Mermaid，Slidev 原生支援
- 目錄結構（內容第 22、28 張）用 ` ```plain ` 區塊

### 真實節錄的呈現

原則為使用程式碼區塊而非截圖。

- proposal／spec 節錄以 ` ```md ` 區塊呈現，搭配 Shiki 行號高亮逐段聚焦（如 `{2-4|6-9|all}`）配合 click 分段講解
- 每張最多約 12 行，超過則拆張
- 節錄一律標明來源路徑

### code block 的字級

**不可用工具類調整 code block 字級。** Slidev 的基礎規則是
`.slidev-code { font-size: var(--slidev-code-font-size) !important }`，因此在外面包
`<div class="text-xs">`、或在 code fence 上寫 `{class:'!text-xl'}` 都**無效**——前者只影響
外層 `.slidev-code-wrapper`，後者的 class 也是加在 wrapper 上，真正的 `<pre>` 仍讀自己的變數。
`:deep()` 同樣無效，因為它編譯成 `[data-v-xxx] .slidev-code`，需要祖先帶 scope 屬性，
但該屬性實際掛在 `<pre>` 本身。

正確做法是簡報資料夾內的 `style.css`（Slidev 會自動載入），以同樣的 `!important` 覆寫：

```css
.code-lg .slidev-code { font-size: 1.15rem !important; line-height: 1.7 !important; }
.code-md .slidev-code { font-size: 1rem !important;    line-height: 1.65 !important; }
```

投影片在 frontmatter 加 `class: code-lg` 或 `class: code-md`。分兩級：

| 類型 | 字級 | 上限由什麼決定 |
|---|---|---|
| **教學用短範例**（指令、目錄樹、格式示意） | `code-lg`（1.15rem） | 垂直空間，目前遠未觸及 |
| **真實 proposal／spec 節錄** | `code-md`（1rem） | 橫向溢出——中文行寬三、四十字，1rem 是實測全部不溢出的上限 |

Slidev 預設的 12px 對投影片而言太小，全部 code block 都應歸入上述兩級之一。

驗證方式：以 DevTools 掃全部投影片，比較每個 `.slidev-code` 的 `scrollWidth - clientWidth`
與所在 `.slidev-layout` 的 `scrollHeight - clientHeight`，兩者皆須為 0。**注意**：改完
frontmatter 後 HMR 可能不同步，量測前務必硬重載，否則讀到的是舊 DOM。

僅兩處使用截圖：`openspec view` 的互動儀表板、`openspec validate --strict` 的輸出。這兩張需另行截圖，實作時先放 HTML 註解標記位置。

### 動畫

僅在四處使用 `v-click`，其餘靜態：

| 位置 | 內容 | 點擊數 |
|---|---|---|
| 內容第 5 張 | Vibe Coding 三個問題逐條出現 | 3 |
| 內容第 9 張 | 三階段流程圖 | 1 |
| 內容第 30 張 | Delta 三種標記逐個出現 | 3 |
| 內容第 44 張 | 總結五句話逐條出現，最後結語 | 6 |

總結那張的結語**必須**一併納入 click（第 6 次）。否則五句話還沒出現時，
畫面中央就已經先亮出結語，底牌先翻，逐條展開就失去意義。

### 不做的事

- 不寫自訂 Vue 元件，只用內建 layout 與 Windi 工具類
- 不做 PDF 匯出的專屬版面調整

## 待補素材

實作完成後需由講者補上：

1. `openspec view` 互動儀表板截圖
2. `openspec validate --strict` 輸出截圖

## References

簡報最後一張（第 45 張）需列出以下來源：

- 高見龍，[SDD 規格驅動開發](https://kaochenlong.com/sdd-spec-driven-development)
- 高見龍，[OpenSpec 讓 SDD 變簡單的三個指令](https://kaochenlong.com/openspec)
- 高見龍，[Spec-as-source 的理想與現實](https://kaochenlong.com/sdd-spec-as-source)
- 高見龍，[給 AI 超能力？Superpowers 的設計與取捨](https://kaochenlong.com/ai-superpowers-skills)

另附工具官方連結：

- [OpenSpec](https://github.com/Fission-AI/OpenSpec)（`@fission-ai/openspec`）
- [Superpowers](https://github.com/obra/superpowers)
