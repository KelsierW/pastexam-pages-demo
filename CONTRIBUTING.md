# 投稿考古題

這是公開的 GitHub Pages 示範站。現在的考卷都是空白測試 PDF。
提交真實考卷前，請確認有權公開分享，並移除姓名、學號與成績等個人資料。
注意：公開 repo 的 PR 與 fork 也可能被公開瀏覽，審核前不是私人空間。

## 投稿步驟

1. 在 GitHub 登入自己的帳號，Fork 此儲存庫。
2. 在自己的 fork 開啟 `docs/exams/`，按 **Add file → Upload files** 加入 PDF。
   建議檔名：`114-general-physics-zheng-midterm.pdf`，使用英文、數字及連字號，單檔最多 10 MB。
3. 編輯 `docs/data/exams.json`，在陣列中加入一筆資料。courseId 請從 `docs/data/courses.json` 查詢。
4. 若是新課程，先在 `courses.json` 增加課程；同名同類課程不要按教授重複建立。
5. 回到 fork，選 **Contribute → Open pull request**，填寫投稿範本。
6. 等候維護者檢查與合併。合併到 main 後，GitHub Pages 會自動更新。

## 考卷資料範例

```json
{
  "id": "114-physics-zheng-midterm-01",
  "courseId": "115",
  "professor": "鄭信良",
  "year": 114,
  "type": "midterm",
  "title": "114 普通物理學期中考",
  "hasAnswers": false,
  "demo": false,
  "file": "exams/114-general-physics-zheng-midterm.pdf"
}
```

此範例的檔案路徑必須對應你實際上傳的 PDF，請勿只新增中繼資料。
`year` 使用民國學年度。`type` 可為 `quiz`、`midterm`、`final`、`other`。
`demo` 只有測試檔才設為 true。教授選單由考卷資料自動產生。
課程分類：`freshman`、`sophomore`、`interdisciplinary`、`general`。

## 維護者審核

- 檢查 PR 的資料異動與 PDF，不要只看自動檢查通過。
- 確認課程、教授、學年度、類型、檔案與分享依據。
- **Validate exam submissions** 只檢查基本格式、PDF 檔頭、檔案大小與課程關聯，不判斷版權、內容正確性或惡意檔案。
- 需要投稿者修正時，使用 Request changes；確認後再 Merge。
- 不要將權杖、.env、帳號密碼或學校登入資訊提交到儲存庫。
