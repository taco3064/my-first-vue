# my-first-vue

這個專案是基於 [Vite Create](https://vite.dev/guide/) 工具生成的 Vue 3 初始範例，
並在此基礎上，重新套用我自己對於 [Folder Structure](https://lofty-find-5f1.notion.site/Folder-Structure-17006b644a208055b985eaa25886a051?pvs=4) 規劃 的理解，進行了結構調整與改寫。
目標是透過遵循規範整理程式架構，逐步學習並掌握 Vue 3 的基本應用方式。

## 📂 Folder Structure

我依據以下原則調整了資料夾結構：

- 功能單位清晰劃分，例如：`/components`、`/containers`、`/composables`、`/pages`
- 跨功能共用的邏輯（如 `useCounter`）統一集中在 `/composables`
- 每個資料夾皆採用 `index.ts` 作為統一出口，保持 import 清爽
- 盡量貼合大型專案實作，非單純教學用的輕量版結構

## 🛠 Research and Adjustments

在研究原始範例過程中，我發現：

> 專案中原本生成的 useCounterStore，其實沒有被任何頁面使用。

因此，我將 `useCounterStore` 的功能導入 `/pages/About/Page.vue`，使其實際發揮作用。
在導入過程中又發現一個初階的細節問題：

> 直接從 `useCounterStore` 解構 count 等資料時，畫面無法即時刷新。

深入調查後確認：Pinia 的 store 經過解構會失去 reactivity，需要透過 `storeToRefs()` 正確包裝。

## ✨ Enhancements Made

基於這個發現，我進一步思考封裝策略：

- 不希望讓每個使用者在不同頁面重複處理 `storeToRefs`
- 希望對外提供一個開箱即用的 `useCounter()` 方法
- 讓外部在呼叫 `useCounter()` 時，能直接拿到可即時更新的 reactive 資料與方法，不需要額外考慮 `storeToRefs` 等實作細節。

最終，將 `useCounterStore` 再加上一層封裝，在 `useCounter()` 中自動完成 `storeToRefs` 展開，並整理好要暴露的資料與方法，提供更一致且易於使用的開發體驗。

## 🚀 Getting Started

快速啟動本專案：

```bash
npm ci
npm run dev
```

如果需要進一步擴展這份範例，例如加上 Router、Service 層、或是 Testing，這份 Folder Structure 也可以輕鬆支援未來的成長與維護。
