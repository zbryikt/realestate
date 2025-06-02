# 實價登錄解譯器

 - lib/download: 下載 zip 到 data/raw (待整理)
 - lib/parse: 將 data/raw 中的 zip 解開到 data/csv
 - lib/index: 讀取 csv, 轉成列表 ( js module )

工具程式:

 - `tool/min.ls`: 將 geocoding 的地址整理到 web (check code)
 - `tool/make-convert-list.ls`: 將尚未做 geocoding 的地址整理出來 (check code)


## 網址

下載位置: https://plvr.land.moi.gov.tw/DownloadOpenData#
門牌批次 Geocoding: https://www.tgos.tw/tgos/Addr/Compare
 - 已申請過 API Key 的話, 別忘了翻翻 email (搜尋 `地理資訊圖資雲服務平台` )


## 規格

 - 檔名:
   - prefix:
     - 字母: 依身份證字號對應縣市
   - suffix:
     - a: 一般買賣
     - b: 預售買賣
     - c: 租賃


## 路徑

 - data/raw: 下載的 zip 檔. 注意, 近期資料仍有可能會需要再更新
 - data/csv: 解開 zip 後的 csv 檔, 依檔名(年S季) 分目錄
 - data/gen: 程式轉譯過的檔案.
