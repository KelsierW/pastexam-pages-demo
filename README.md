# 電子與光子考古題｜GitHub Pages Demo

公開展示： https://KelsierW.github.io/pastexam-pages-demo/

獨立的靜態示範站，以 GitHub PR 投稿、維護者審核合併的方式管理考卷。
所有範例 PDF 均為空白測試檔，沒有匯出原本本機站的真實考卷、帳號、密碼或登入 token。
不是學校官方網站，不提供校內限定存取。

## 功能
- 大一、大二、跨領域、通識四類課程
- 課程搜尋、教授／學年度／類型／解答篩選
- PDF 預覽與下載
- PR 投稿說明與範本、基本資料檢查工作流程

不包含登入、網站直接上傳、資料庫、即時討論、AI 出題與下載次數統計。

## 本機預覽
```sh
python -m http.server 18081 --bind 127.0.0.1 --directory docs
```
開啟 http://127.0.0.1:18081 。

## 驗證
```sh
node scripts/validate.mjs
```

## 發布
GitHub Pages 使用 main 分支的 /docs 目錄。合併 PR 至 main 後自動更新。
此 demo 不會自動合併 PR；由儲存庫維護者審核。

投稿方式請見 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 專案關係
本 demo 為獨立靜態實作，需求取自本機改作的考古題網站。
原開源系統：https://github.com/NCTUCSUnion/pastexam （MIT）。
本儲存庫不包含原系統的後端、資料庫或前端授權套件。
