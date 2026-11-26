# Design

## Context

動機見 proposal.md 的 Why，簡報必須滿足的內容見 `specs/figma-config-india-deck/spec.md`。以下只記錄影響做法的現況與限制：

- **時程**：今天是 2026-11-26，分享日是 2026-12-07，大約 11 天。
- **講者的 Figma 帳號**（2026-11-26 用 MCP `whoami` 查詢）：
  - 在公司的 team 不是設計稿的擁有者
  - 另有一個可自行管理的個人 team
  - 兩個 team 都已開通 Specs 與 Code layers
  - 講者沒有實際用過這次發表的任何功能
- **案例素材**：
  - 設計稿：Campus landing page 新版的 Mockup 頁，共約 2,700 個節點；其中「價格方案」區塊是本次的案例
  - PRD：Notion 上的頁面更新需求單，價格方案在第 2 節
  - 現有實作：hahow-for-business-frontend 現有的價格方案元件。這是舊的定價模型（10 個主題包加上合約年限），價格寫死在常數檔裡。新版是整個定價模型都換掉，不只是改樣式：

    ```
     Old (live)                              New (Figma, in design)
     -------------------------------------   -------------------------------------
     10 theme packs, checkboxes, any mix     6 themes, 3 fixed plans
     1-year / 2-year contract toggle         (choose 2 of 6 / choose 4 of 6 / all)
     price = per account per year,           tabs = concurrent users 30 / 60 / 90
       computed from the lookup tables       price = a fixed total per plan
     group selector + calculated result      tabs + 3 cards + CTA
     + mobile floating bar                   (floating bar? not in the design)
    ```

- **已知不一致**：設計稿三個 tab 都顯示「60 人」那一列的價格，PRD 則是三個 tab 各有不同的價格表。

## Goals / Non-Goals

**Goals:**
- 用可重現的方式產生「有 Spec 與沒有 Spec」的對照證據。
- spike 的所有副作用（程式碼、Figma 檔案、credits）都限制在可以拋棄的範圍內。
- 證據在分享前就固定下來，不依賴現場的網路或 AI 輸出是否穩定。

**Non-Goals:**
- 不交付 Campus 價格方案的正式實作。spike 產生的程式碼不進入 hahow-for-business-frontend 的任何分支或 PR。
- 不修改設計師的原稿，也不去改正設計稿上的價格。
- 不實測 Code source 與 Centralized design systems。

## Decisions

### D1. 案例範圍只取「價格方案」區塊的 XL 與 XS 兩個斷點
- **原因**：
  - 整頁約 2,700 個節點，AI 產出的結果很難控制，也放不進投影片。
  - 價格方案已經包含 tab 狀態、三張價格卡、徽章與 CTA，足以呈現差異。
  - 取 XL 與 XS 兩端，就能看出 RWD 的處理，不需要跑完 5 個斷點。
- **替代方案**：
  - 整頁：成本太高，demo 結果不可控。
  - 只取 XL：會看不到 RWD 的處理。

### D2. 公平對照：兩次只差一份 Spec
spike 1 與 spike 2 使用：
- 同一個模型
- 同一段固定提示詞
- 同一個 worktree 的同一個起點 commit

唯一的差別是 spike 2 的 context 多了一份 Figma Spec。提示詞原文與模型 ID 都要記錄下來，放進講者備忘稿。

```
 Spike 1: design only            Spike 2: design + Spec
 ----------------------          ------------------------------
 AI sees: frames, text           AI sees: frames + Spec (prices,
                                   default tab, CTA link, ...)
 same model / same prompt / same starting commit
         \                               /
          +---- the before/after slide --+
```

- **原因**：只有控制變因，對照才有說服力。這也符合 spec 的要求：結果不符預期時要如實呈現，不能重跑到滿意為止。
- **替代方案**：spike 2 也一併調整提示詞。這樣結果會比較漂亮，但結論就不成立了。

### D3. Spec 的內容來源是 Notion PRD，以 MCP 匯入
- **流程**：用 Notion MCP 讀取 PRD 第 2 節 → 在 Figma 建立一個新的 Spec 檔 → 寫入以下內容。Spec 由 Claude Code 透過 Figma MCP 寫入，不使用 Figma 內建的 Specs agent，讓 spike 2 和 spike 1 一樣只走自帶 agent 這條路徑（見 Risks 的成本項）：
  - 價格表
  - 預設選中「30 人」tab
  - 區塊說明文字
  - CTA 文字「立即諮詢」與連結

  ```
   Notion PRD --(Notion MCP read)--> Figma Spec --(Figma MCP read)--> code
                (price table and rules            (spike 2 output)
                 go into the Spec)
  ```
- **原因**：這就是官方宣稱的「從外部 context 起草 Spec」用法，同時也示範了 context 怎麼從 Notion 流到 Figma 再流到程式碼。
- **替代方案**：在 Figma 裡手寫 Spec。這樣較穩，但少了 MCP 串接這個展示點。如果 MCP 寫入失敗，就改用這個方案，並在投影片上註明。

### D4. 程式碼隔離：在 hahow-for-business-frontend 開拋棄式 worktree
- **做法**：
  - 從 `master` 開 `git worktree`，分支命名為 `spike/figma-config-*`。
  - spike 1 與 spike 2 各開一個 worktree，起點相同。
  - 截圖與擷取 diff 之後，刪除 worktree 與分支，不推到遠端。
- **原因**：不碰主線與他人的工作，也不需要清理留下來的檔案。
- **替代方案**：在 slidev repo 另寫一個獨立的 demo app。這樣看不出 AI 會不會沿用 `DESIGN.md` 與既有元件，而這正是 Core 段要講的重點。

### D5. Figma 寫入邊界
- 設計師的原稿只用唯讀工具（`get_metadata`、`get_screenshot`、`get_design_context`）。
- Spec 建在講者自己的新檔案裡。
- Code layer 建在原稿價格方案區塊的複本上。
- 每一次寫入前，都要先向講者確認。

```
 Spike                 Needs on the designer's file   Where writes go
 --------------------  -----------------------------  ---------------------------
 1. MCP read -> code   view only                      worktree code; Figma untouched
 2. Spec -> code       view only                      a new Spec file of the speaker
 3. Code layers        none (works on a duplicate)    a duplicate in the speaker's
                                                      own file
```
- **原因**：原稿屬於設計師；即使沒有權限擋住，也不應該在原稿上留下痕跡。
- **替代方案**：請設計師開權限，直接在原稿上試。這會干擾設計師正在進行的工作，所以不採用。

### D6. 證據事先錄好，現場只做選擇性的即時示範
- **做法**：
  - 所有「實測」證據都在 spike 期間擷取成截圖，或在必要時錄成短片，存進簡報的 `assets/`。
  - 現場可以加一段即時 MCP 讀稿示範，但它只是加分項，失敗就切回錄好的版本。
- **原因**：AI 輸出不固定，現場網路與 credits 都不可控；而且設計稿可能在分享前被修正（見 Risks）。
- **替代方案**：全程現場 demo。風險太高。

### D7. 圖表做法
- 流程圖與對照圖（context 分散圖、程式碼端與 Figma 端對照、Spec 流程）使用 Slidev 內建的 Mermaid 或 HTML 表格，保持可編輯。
- 截圖與程式碼片段，以左右並排的版面呈現。
- **替代方案**：在 Figma 畫好再匯出圖片。這樣比較美觀，但修改成本高，留到排練時間有剩再考慮。

### D8. 簡報資料夾與主題
- 資料夾名稱是 `2026-12-07-Figma-Config-India/`，從 `_template/` 複製。
- 主題沿用上一份的 `seriph`，跟 OpenSpec 分享保持一致的視覺風格，Hook 段的連結感也更強。

## Risks / Trade-offs

- **設計師在分享前修正了設計稿上的價格，「不一致」這個案例就不存在了。**
  → 先擷取設計稿與 PRD 的畫面並註明日期；spike 1 用擷取當下的版本。如果設計師確認修正了，就照 spec 改成「我們在開發前發現並釐清了這個問題」，這本身也是一個 context 分散的故事。
- **spike 1 的 AI 也做出正確價格**，例如從其他 frame 推斷出來。
  → 照 D2 與 spec 如實呈現，改成強調其他差異（預設 tab、CTA 連結、文案），或是 AI 能不能說明價格的來源。
- **Figma Spec 或 Code layer 的 beta 功能壞掉，或 MCP 的寫入工具無法使用。**
  → Spec 改用 D3 的替代方案，Code layer 本來就是加分項，可以直接放棄。投影片的證據等級改標成「概念」。
- **AI credits 不夠，或扣在非預期的 team。**
  → 先建一個小檔案試一次，看 credits 扣在哪個 plan。限制 Code layer 只做一次。
- **兩種付費路徑的成本不同，而且官方文件沒有寫完整。**

  ```
   Path A: Figma's built-in agent        Path B: own agent (Claude Code) via MCP
   ------------------------------        ---------------------------------------
   Figma agent / Make / Code layers /    reasoning paid by the agent subscription
   Specs agent                           Figma side: mostly rate limits only
   -> Figma AI credits                   still uses Figma credits: generate_image,
   -> no BYO model in the docs             generate_vector_illustration, send_prompt,
                                           send_code_to_figma (after first upload)
   Unknown: does Path B creating a Code layer or Spec use Figma credits?
  ```

  → spike 1 與 2 都走 Path B。每次寫入 Figma 的操作（3.1、4.1）前後都記錄 credits 餘額，把「官方未說明」的部分變成實測數據。量不到的話，投影片照 spec 標示「官方未說明」。
- **MCP rate limit 用完。** read 工具有每日與每分鐘的上限，依方案與席位而定。
  → spike 只讀價格方案區塊，不反覆讀整頁；先用 `get_metadata` 確定節點，再呼叫 `get_design_context`。
- **hahow-for-business-frontend 的 worktree 需要安裝依賴，或 dev server 跑不起來。**
  → spike 的對照以程式碼差異與元件截圖（例如 Storybook）為主，不一定要整頁跑起來。
- **內部資訊外流。**
  → 依 spec 移除經銷商聯絡資訊與 MCP 資產網址。build 的產出不部署到公開網址。

## Open Questions

- 設計稿與 PRD 的價格以哪一份為準？要跟設計師確認。不論答案是什麼，spec 都已涵蓋，只會影響一張投影片的寫法。
- 現場要不要做即時 MCP 示範？排練時再決定。
