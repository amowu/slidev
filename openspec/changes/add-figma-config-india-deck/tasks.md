# Tasks

> 時程目標：第 1–4 組在 11/30 前完成，第 5–6 組在 12/4 前完成，第 7 組在 12/6 前完成，12/7 分享。

## 1. 擷取案例素材（11/26–11/27）

- [ ] 1.1 用 Figma MCP 唯讀擷取設計稿「價格方案」區塊的 XL 與 XS 截圖，以及畫布上的「價格方案 spec」手寫註記，在檔名註明擷取日期，存進 scratch 素材資料夾。驗證：截圖能清楚看出三個 tab 的價格。
- [ ] 1.2 擷取 Notion PRD 第 2 節的價格表，整理成「設計稿 vs PRD」對照表，標出不一致的 30 人與 90 人兩列。驗證：對照表的每個數字都能回溯到截圖或 PRD 原文。
- [ ] 1.3 整理案例 context 的五個來源（Figma frames、畫布註記、Notion PRD、Google Sheet、Drive），寫出各自提供什麼。驗證：每個來源至少對應到一項 AI 只讀設計稿時看不到的資訊。
- [ ] 1.4 在 1.1 的截圖完成後，通知設計師設計稿的價格要依 PRD 修正（價格以 PRD 為準），記下通知日期。驗證：通知已送出，而且修正前的截圖已存檔並標註日期。

## 2. Spike 1：只用設計稿（11/27）

- [ ] 2.1 在 hahow-for-business-frontend 從 `main` 開 worktree `spike/figma-config-design-only`，記錄起點 commit。驗證：`git worktree list` 列出這個 worktree，主線工作目錄沒有變化。
- [ ] 2.2 寫好固定的提示詞（實作 Campus 價格方案新版區塊的 XL 與 XS），記錄提示詞原文與使用的模型名稱和版本。驗證：提示詞存成檔案，spike 2 會原封不動使用。
- [ ] 2.3 只提供設計稿的 context（Figma MCP `get_design_context`），讓 AI 實作。驗證：產出的程式碼留在 worktree 中，擷取 diff。
- [ ] 2.4 記錄結果：三個 tab 的價格、預設 tab、CTA 文字與連結、有沒有沿用 `DESIGN.md` 的 token 與既有元件，並擷取畫面（Storybook 或 dev server 皆可）。驗證：結果寫成一張檢核表，每一項都標明正確或錯誤，並附上證據。

## 3. Spike 2：設計稿加上 Figma Spec（11/28）

- [ ] 3.1 動手前向講者確認，再於講者自己的 drafts 建立一個新的 Figma Spec 檔，用 Notion MCP 讀取 PRD 第 2 節，由 Claude Code 透過 Figma MCP 寫入價格表、預設 tab、說明文字、CTA 文字與連結（不使用 Figma agent）；操作前後各記錄一次 Figma AI credits 餘額，確認外部 agent 寫 Spec 是否扣 credits、扣在哪個 plan。驗證：Spec 檔可以開啟，內容與 PRD 一致；如果 MCP 寫入失敗，改成手寫，並在素材紀錄中註明。
- [ ] 3.2 從 2.1 的同一個起點 commit 開 worktree `spike/figma-config-with-spec`，使用 2.2 的同一段提示詞與同一個模型，額外提供 Spec 作為 context，讓 AI 實作。驗證：提示詞與 spike 1 逐字相同。
- [ ] 3.3 用 2.4 的檢核表記錄結果，與 spike 1 並列比較；結果不符預期時如實記錄，並寫下可能的原因，不重跑。驗證：產出「spike 1 vs spike 2」對照表與截圖。

## 4. Spike 3 與功能試用（11/29–11/30，加分項）

- [ ] 4.1 動手前向講者確認，再把價格方案的 frame 複製到講者自己的檔案，轉成 Code layer（從選取的 frame 下提示詞），只做一次；操作前後各記錄一次 Figma AI credits 餘額，並記下這次走的是 Figma agent 還是外部 agent 透過 MCP。驗證：擷取可互動 tab 的截圖或短片；失敗或 credits 不足時，記錄原因，並把 Code layers 的證據等級標成「概念」。
- [ ] 4.2 讓 Claude 綜合 `DESIGN.md`、設計稿引用的 team library（Figma MCP 唯讀，包含疑似已寫有規則的 library）與 codebase 的既有元件，起草一份價格方案相關元件的 guideline，不寫入 Figma。驗證：草稿存檔，裡面每一條規則都能對應到某個來源；素材紀錄中 Guidelines 的證據等級是「概念」並附上草稿。
- [ ] 4.3 （有空再做）詢問 library 擁有者能不能把 4.2 的草稿加到已發布的 library 上；如果成功，就在設計稿上試一次並截圖，再把證據等級升級成「實測」。驗證：記錄詢問結果；有套用的話附上截圖。
- [ ] 4.4 試用 MCP 新工具 `html_to_figma` 或 `generate_image` 其中一項（寫入講者自己的檔案）。驗證：有截圖，或記錄這項不放進簡報的理由。
- [ ] 4.5 刪除所有 spike worktree 與本機分支，確認沒有推到遠端。驗證：`git worktree list` 與 `git branch --list 'spike/figma-config-*'` 都沒有結果，`git ls-remote` 也查不到這些分支。

## 5. 建立簡報骨架（12/1）

- [ ] 5.1 把 `_template/` 複製成 `2026-12-07-Figma-Config-India/`，frontmatter 設定 `theme: seriph`、標題與日期。驗證：`npm run dev -- 2026-12-07-Figma-Config-India/slides.md` 可以啟動。
- [ ] 5.2 建立六段的分段投影片，加上各段的時間預算（Hook 2、Map 3、Core 10、Extension 5、Reality 3、Takeaways 2 分鐘）。驗證：段落順序符合 spec「簡報以單一觀點串聯」。
- [ ] 5.3 把第 1–4 組的素材整理進 `assets/`，移除經銷商聯絡資訊與 MCP 資產網址。驗證：在簡報資料夾中，用 PRD 上的經銷商電話、Email、地址逐一搜尋，並執行 `grep -r 'figma.com/api/mcp' 2026-12-07-Figma-Config-India/`，都沒有結果。

## 6. 撰寫投影片與講者備忘稿（12/1–12/4）

- [ ] 6.1 撰寫 Hook 段（接上 OpenSpec 分享的結論），並附上講者備忘稿。驗證：符合 spec「開場連結 OpenSpec 分享」的 scenario。
- [ ] 6.2 撰寫 Map 段的七項總覽（三組、釋出狀態）。驗證：逐項對照官方頁面，7 項全部出現，Centralized DS 沒有獨立投影片。
- [ ] 6.3 撰寫 Core 段：程式碼端與 Figma 端的對照圖（Mermaid）、Specs、Guidelines、Code source、MCP 各自的投影片，以及案例投影片（context 分散圖、價格不一致對照、spike 1 vs 2 對照）。每張都標上證據等級。驗證：符合 spec 的對照圖、四項核心功能、證據等級、案例、價格不一致、Spec 對照等 requirement 的 scenario。
- [ ] 6.4 撰寫 Extension 段：Code layers 與 Payload，附上 spike 3 的證據或「概念」標示，備忘稿寫出對設計師的意義。驗證：符合 spec「講者備忘稿能獨立閱讀」的設計師 scenario。
- [ ] 6.5 撰寫 Reality 段與 Takeaways 段：釋出狀態、credits、Code layers 免費期已於 11/4 結束，以及只靠已開放功能就能做的行動建議。驗證：Takeaways 的每一項都不需要 closed beta 或 preview 的權限。
- [ ] 6.6 確認設計稿在分享前是否已依 PRD 修正，並據此調整價格不一致那張投影片。驗證：內容符合 spec「呈現設計稿與 PRD 的價格不一致」兩個 scenario 的其中一個。
- [ ] 6.7 逐張檢查講者備忘稿，確保不靠現場也能讀懂。驗證：每張投影片都有 `<!-- -->` 備忘稿。

## 7. 整合驗證與排練（12/5–12/6）

- [ ] 7.1 建置簡報。驗證：`npm run build -- 2026-12-07-Figma-Config-India/slides.md` 成功，沒有錯誤。
- [ ] 7.2 依 spec 逐條檢查簡報內容。驗證：每個 requirement 都能指出對應的投影片。
- [ ] 7.3 完整排練一次並計時，超過 30 分鐘就刪減內容。驗證：記錄的時長在 30 分鐘以內。
- [ ] 7.4 依 7.3 的排練時長，決定現場能不能放進即時 MCP demo（讀價格方案區塊並產生程式碼）；能的話，準備備用錄影並演練切換，加上 demo 的總時長仍要在 30 分鐘以內。驗證：備用錄影可以從簡報直接播放；排練紀錄中有包含 demo 的時長。

## Workflow follow-up

- 12/7 分享後，把簡報 commit 進本 repo，再 archive 這個 change。
- archive 後，確認 `openspec/specs/figma-config-india-deck/spec.md` 已建立，而且 Purpose 正確。
