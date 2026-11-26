# Spec Delta

## Purpose

定義 Figma Config India 2026 分享簡報必須傳達的內容、證據呈現方式與交付條件，讓前端工程師在現場看懂這些功能與自身開發流程的關係，也讓事後閱讀的設計師和 PM 不需要講者就能理解。

## ADDED Requirements

### Requirement: 簡報以單一觀點串聯
簡報 SHALL 以「Figma 也在做 spec-driven：設計端如何把 context 交給 AI」作為唯一主軸，依序呈現 Hook、Map、Core、Extension、Reality、Takeaways 六段。簡報 MUST NOT 採用逐項功能導覽的結構，也 MUST NOT 依聽眾角色分成多個版本。

#### Scenario: 段落順序
- **WHEN** 讀者從第一張翻到最後一張
- **THEN** 六段依 Hook、Map、Core、Extension、Reality、Takeaways 的順序出現，每段開頭都能辨識出所屬段落

#### Scenario: 單一版本
- **WHEN** 檢查簡報資料夾
- **THEN** 只有一份 `slides.md` 作為入口，沒有為不同聽眾準備的替代開場或結尾

### Requirement: 開場連結 OpenSpec 分享
Hook 段 SHALL 引用上一場 OpenSpec 分享的結論（AI 需要知道什麼叫「完成」），並指出 AI 對設計端 context 仍然是用猜的。

#### Scenario: 未參加上一場的讀者
- **WHEN** 沒聽過 OpenSpec 分享的人讀 Hook 段
- **THEN** 不需要外部資料，就能理解 OpenSpec 想解決的問題，以及這場要延伸的方向

### Requirement: 七項發表的完整總覽
Map 段 SHALL 在一張投影片上列出 Config India 2026 的全部 7 項發表，分成 Build on the canvas、Context for AI、Governance 三組，並標示各自的釋出狀態（available now、open beta、closed beta、preview）。

#### Scenario: 總覽完整
- **WHEN** 對照 Figma 官方的「What's new from Config India 2026」頁面
- **THEN** 官方列出的 7 項全部出現，分組與釋出狀態都與官方一致

#### Scenario: Centralized design systems 只出現在總覽
- **WHEN** 檢查總覽之後的投影片
- **THEN** Centralized design systems 沒有獨立的投影片，只在總覽與講者備忘稿中出現

### Requirement: 程式碼端與 Figma 端的 context 對照
Core 段 SHALL 包含一張對照圖，呈現四組對應：`openspec/specs` 對 Figma Specs、`DESIGN.md` 對 Guidelines、`src/components` 對 Code source，以及作為兩端橋樑的 MCP。

#### Scenario: 前端工程師看懂對照
- **WHEN** 前端工程師看到對照圖
- **THEN** 每一組都能對應到 hahow-for-business-frontend 裡實際存在的東西

### Requirement: 每項核心功能都有獨立的投影片
Core 段 SHALL 為 Specs、Guidelines、Code source、MCP 各提供至少一張投影片，說明這項功能是什麼，以及對前端工程師的意義。

#### Scenario: 四項皆有
- **WHEN** 清點 Core 段的投影片
- **THEN** Specs、Guidelines、Code source、MCP 都至少有一張以它為主題的投影片

### Requirement: 標示證據等級
每張介紹 Config India 功能的投影片 SHALL 明確標示證據等級：「實測」（講者親自操作過，附產出）、「概念」（依官方文件說明，未實際操作）或「未開放」（closed beta 或 preview，無法取得）。沒有實測過的功能，MUST NOT 寫成看起來像用過的樣子。

#### Scenario: 未開放的功能
- **WHEN** 讀者看到 Code source 的投影片
- **THEN** 投影片標示「未開放」，並說明它目前是 closed beta

#### Scenario: 實測的功能
- **WHEN** 投影片標示「實測」
- **THEN** 同一張或緊接的投影片附上該次操作的實際產出（截圖、程式碼片段或錄影）

### Requirement: 以 Campus 價格方案作為案例
簡報 SHALL 使用 Hahow Campus landing page 新版的「價格方案」區塊作為貫穿全場的案例，並呈現它的需求 context 分散在 Figma frames、畫布上的手寫註記、Notion PRD、Google Sheet、Google Drive 五個地方。

#### Scenario: 呈現分散的 context
- **WHEN** 讀者看到案例介紹
- **THEN** 能看出五個 context 來源各自提供什麼，以及哪些是只讀設計稿時看不到的

### Requirement: 呈現設計稿與 PRD 的價格不一致
簡報 SHALL 並列設計稿三個 tab 的價格與 PRD 價格表，指出兩者哪裡不一致，並說明只讀設計稿的 AI 會因此產生錯誤的結果。如果分享前設計師確認設計稿才是正確版本，簡報 MUST 改成反映確認後的事實。

#### Scenario: 不一致未修正
- **WHEN** 分享時設計稿與 PRD 仍不一致
- **THEN** 投影片並列兩份價格，標出 30 人與 90 人兩列的差異，並註明擷取日期

#### Scenario: 設計師確認後
- **WHEN** 設計師在分享前確認了正確價格
- **THEN** 投影片如實說明確認結果，不把已釐清的問題當成仍然存在

### Requirement: 有 Spec 與沒有 Spec 的對照
簡報 SHALL 並列兩次 AI 產生的實作結果：一次只用 Figma 設計稿，另一次加上 Figma Spec。兩次使用相同的提示詞與模型，差別只在有沒有 Spec。投影片 MUST 如實呈現實際結果，即使結果跟預期不同。

#### Scenario: 結果符合預期
- **WHEN** 只讀設計稿的版本價格錯誤，加上 Spec 的版本價格正確
- **THEN** 投影片並列兩者的價格顯示與關鍵程式碼

#### Scenario: 結果不符預期
- **WHEN** 兩個版本的價格都正確，或都錯誤
- **THEN** 投影片如實呈現，並說明可能的原因，不重跑到出現想要的結果才放上去

### Requirement: 誠實呈現成本與成熟度
Reality 段 SHALL 說明各項功能的釋出狀態、哪些功能會消耗 AI credits，以及 Code layers 的免費期已在 2026-11-04 結束。Reality 段 SHALL 區分兩種付費路徑：使用 Figma 內建 agent 會消耗 Figma AI credits；透過 MCP 自帶 agent 時，推理成本由該 agent 的訂閱支付，Figma 端主要受 rate limit 限制。

#### Scenario: 聽眾想自己試
- **WHEN** 聽眾想知道哪些功能現在就能用、要不要付費
- **THEN** Reality 段能回答哪些可以立刻試、哪些會花 credits、哪些還拿不到

#### Scenario: 已在使用 Claude Code 的工程師
- **WHEN** 聽眾想知道用自己的 AI agent 透過 Figma MCP 工作要付什麼費用
- **THEN** Reality 段說明推理成本由 agent 的訂閱支付，Figma 端主要是 rate limit，並列出官方文件中仍會消耗 Figma credits 的 MCP 工具

#### Scenario: 官方文件未說明的成本
- **WHEN** 某個操作的 credits 消耗在官方文件中沒有寫明（例如外部 agent 透過 MCP 建立 Code layer 或 Spec）
- **THEN** 投影片呈現 spike 實測到的結果；沒有實測的話，就標示「官方未說明」，不做推論

### Requirement: 前端工程師的行動建議
Takeaways 段 SHALL 列出前端工程師在分享後可以實際採取的行動，每一項都限於目前已開放的功能。

#### Scenario: 行動可執行
- **WHEN** 聽眾照著 Takeaways 的任一項去做
- **THEN** 這項行動不需要 closed beta 或 preview 的權限就能開始

### Requirement: 講者備忘稿能獨立閱讀
每張投影片 SHALL 附有講者備忘稿，內容完整到設計師和 PM 不需要聽現場也能理解這一張的重點。Code layers、Guidelines 等與設計師相關的投影片，備忘稿 MUST 包含一句「這對設計師的意義是什麼」。

#### Scenario: 事後閱讀
- **WHEN** 沒參加現場的設計師只看投影片和備忘稿
- **THEN** 能理解每一段的主張與證據

#### Scenario: 設計師相關投影片
- **WHEN** 檢查 Code layers 與 Guidelines 投影片的備忘稿
- **THEN** 各自包含對設計師意義的說明

### Requirement: 不洩漏敏感資訊
簡報 MUST NOT 包含 PRD 中的經銷商聯絡人資訊（電話、Email、地址），也 MUST NOT 包含任何存取權杖或會過期的資產連結。

#### Scenario: 檢查敏感資訊
- **WHEN** 在 `slides.md` 與 `assets/` 中搜尋經銷商的電話、Email 與 Figma MCP 資產網址
- **THEN** 沒有任何結果

### Requirement: 簡報可建置且長度合適
簡報 SHALL 能用專案既有的 `npm run build` 建置成功，正常講述時長 SHALL 約 25 分鐘（不超過 30 分鐘）。

#### Scenario: 建置
- **WHEN** 執行 `npm run build -- 2026-12-07-Figma-Config-India/slides.md`
- **THEN** 建置成功，沒有錯誤

#### Scenario: 排練計時
- **WHEN** 講者完整排練一次
- **THEN** 總時長在 30 分鐘以內
