# 30DayMapChallenge - Day 26: Transport

互動式交通方向視覺化（Vue 3 + D3）。以六角格網呈現借車/還車的方向箭頭，並支援 GitHub Pages 部署。

## 線上展示與倉庫

- 頁面：`https://kevin7261.github.io/30DayMapChallenge-26_Transport/`
- 倉庫：`https://github.com/kevin7261/30DayMapChallenge-26_Transport`

## 特色

- 六角格網展示，於每個格心繪製借車/還車方向箭頭
- 箭頭大小、顏色、偏移可調；支援圖例與互動提示
- 自動調整視窗尺寸；支援路由基底 `'/30DayMapChallenge-26_Transport/'`
- 資料分離：GeoJSON 與統計資料置於 `public/data/`

## 技術棧

- Vue 3、Vue Router、Pinia
- D3.js（繪圖、投影、縮放）
- Leaflet（底圖，可視需求開啟）
- Bootstrap 5、Font Awesome

## 資料來源

- 自有處理後的格網統計：`public/data/geojson/grid_with_weighted_angle_stats_500m.geojson`
- 行政區界：`public/data/geojson/臺北市區界圖_20220915.geojson`

## 專案結構（節錄）

```
src/
├─ tabs/
│  └─ MapTab.vue            # 主要地圖與箭頭繪製邏輯
├─ stores/
│  ├─ dataStore.js          # 可視化資料/旗標
│  └─ defineStore.js        # 設定儲存
├─ router/
│  └─ index.js              # history base: '/30DayMapChallenge-26_Transport/'
└─ main.js

public/
└─ data/
   └─ geojson/              # GeoJSON 與統計資料

vue.config.js               # publicPath: '/30DayMapChallenge-26_Transport/'
```

## 開發與運行

環境需求：Node.js 16+，npm 7+（或等效包管理器）

```bash
git clone https://github.com/kevin7261/30DayMapChallenge-26_Transport.git
cd 30DayMapChallenge-26_Transport/website/30DayMapChallenge-26_Transport
npm install
npm run serve
```

開發預設網址：`http://localhost:8080/30DayMapChallenge-26_Transport/`

## 構建與部署

```bash
npm run build     # 生成 dist/
npm run deploy    # 以 gh-pages 發佈到 GitHub Pages
```

注意：本專案的 `publicPath` 與 Router `base` 已設定為 `'/30DayMapChallenge-26_Transport/'`，請維持與倉庫名稱一致。

## 常用腳本

```bash
npm run lint          # ESLint 檢查
npm run lint:fix      # 自動修復
npm run prettier      # 以 Prettier 套用格式
npm run format        # Prettier + ESLint fix
```

## 貢獻

歡迎提交 Issue 或 PR。建議流程：

1. Fork 並建立分支：`git checkout -b feature/your-feature`
2. 提交：`git commit -m "feat: your change"`
3. 推送：`git push origin feature/your-feature`
4. 建立 Pull Request

## 授權

MIT License
