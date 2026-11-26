# Proposal

## Why

Figma 在 Config India 2026 發表了 7 項新功能，其中 Specs、Guidelines、Code source 與 MCP 改進，都在處理「把設計端的 context 交給 AI」這個問題。這跟團隊在程式碼端用 OpenSpec、`DESIGN.md` 做的事情正好對應。12/7 有一場內部分享，要用真實案例而不是轉述官方文件，讓前端工程師看懂這些功能對我們的開發流程代表什麼。

## What Changes

- 新增一份 Slidev 簡報 `2026-12-07-Figma-Config-India/`，從 `_template/` 複製而來。
  - 只講一場，約 25 分鐘，主要聽眾是前端工程師。
  - 不分主幹或換頭換尾。之後會傳給設計師和 PM 自行閱讀，所以講者備忘稿要寫得完整。
- 故事線採「觀點串聯」，不做逐項功能導覽：
  1. **Hook**：OpenSpec 讓 AI 知道什麼叫「完成」，但 AI 對設計仍然是用猜的。
  2. **Map**：7 項發表依「Build on the canvas / Context for AI / Governance」三組整理成總覽。Centralized design systems 只在這裡帶一行。
  3. **Core**：Specs、Guidelines、Code source、MCP，各自一張以上的投影片。核心圖是程式碼端與 Figma 端的對照：

     ```
      Code side (we already have)        Figma side (Config India 2026)
      ---------------------------        -------------------------------
      openspec/specs/  (behavior)   <->  Figma Specs
      DESIGN.md        (DS rules)   <->  Guidelines
      src/components   (real code)  <->  Code source
                   \                       /
                    +--- MCP: the bridge -+
     ```

  4. **Extension**：Code layers 和 Payload，討論「設計稿本身就是程式碼」之後，交接點會移到哪裡。
  5. **Reality**：哪些還在 beta、AI credits 的成本、Code layers 的免費期已在 11/4 結束、我們現在能先試什麼。
  6. **Takeaways**：前端工程師可以先試的事。
- 案例使用 Hahow Campus landing page 新版的「價格方案」區塊（尚未實作）：
  - 需求散落在五個地方：Figma frames、畫布上的手寫 spec、Notion PRD、Google Sheet、Drive。
  - 設計稿三個 tab 都用了「60 人」那一列的價格，跟 PRD 不一致，只讀設計稿的 AI 會做錯。

  ```
                     +------------------+
                     |  AI / engineer   |
                     +--------+---------+
        what it reads today   |   what it never sees
     +-----------+------------+----------+------------+
     v           v            v          v            v
   Figma       canvas       Notion     Google       Drive
   frames      notes        PRD        Sheet        (course
   (prices     (default     (price     ("see all     covers,
    wrong)      tab)         table,     courses"     logos)
                             CTA link)  links)
  ```

- 投影片的證據來自三個 spike（在 hahow-for-business-frontend 的拋棄式 worktree 執行，不進主線）：
  1. 只用 Figma MCP 讀設計稿產生程式碼。
  2. 從 Notion PRD 建立 Figma Spec，再讓 MCP 產生程式碼，跟 spike 1 比較。
  3. （加分項）把價格方案 frame 轉成 Code layer。只在複本或自己的檔案上操作。
- Guidelines 只講概念，必要時在講者的個人 team 做小規模試用。Code source 在 closed beta，明確標註「未實測」。

## Capabilities

### New Capabilities
- `figma-config-india-deck`：這份簡報必須傳達的內容與呈現規則，包括故事線、每項功能的證據等級（實測、概念、未實測）、案例素材，以及講者備忘稿的完整度。

### Modified Capabilities
（無）

## Impact

- **本 repo**：新增 `2026-12-07-Figma-Config-India/`（`slides.md` 與 `assets/`），不改動共用設定與其他簡報。
- **hahow-for-business-frontend**：只建立拋棄式 worktree 給 spike 使用，結束後刪除，不提交到任何分支。
- **Figma**：設計師的原稿只做唯讀操作。所有寫入（Spec、Code layer）都在新檔案或複本上進行，每次寫入前會先確認。
- **成本**：Specs、Code layers、MCP `generate_image` 都會消耗 AI credits。Code layers 已無免費期。
- **待確認**：
  - 設計稿與 PRD 的價格差異，需要跟設計師確認。
  - 簡報資料夾日期暫定 12/7，對應分享日。
