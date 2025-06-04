require! <[pthk papaparse proj4]>
fs = require "fs-extra"

tooldir = fs.realpathSync pthk.dirname(__filename)
root = pthk.join(tooldir, \..)

hash = {}

convert = (x, y) ->
  proj4.defs 'EPSG:3826', '+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +units=m +no_defs'
  proj4.defs 'EPSG:4326', proj4.WGS84  # 可省略，內建定義
  # 範例輸入：TWD97 座標（公尺）

  # 轉換到 WGS84（經緯度）
  #lng, lat = proj4 'EPSG:3826', 'EPSG:4326', [x, y]
  ret = proj4 'EPSG:3826', 'EPSG:4326', [x, y]


fs.readdir-sync pthk.join(root, \data/paid)
  .map -> pthk.join(root, \data/paid, it)
  .map -> papaparse.parse fs.read-file-sync(it).toString!
  .map (list) ->
    list.data = list.data.filter (d) -> d.3 and d.4
    list.data.map (d) ->
      d.3 = +d.3.split(';').0
      d.4 = +d.4.split(';').0
    list.data = list.data.filter (d) -> !isNaN(d.3) and !isNaN(d.4)
    list.data
      .map (d) ->
        if (+d.3 < 300 and +d.4 < 300) => return
        ret = convert d.3, d.4
        d.3 = ret.0
        d.4 = ret.1
    list.data
      .filter -> it.3 and !/;/.exec(it.3) # remove results with multiple entries
      #.map -> [(it.1 or '').replace(/臺北市北投區/,''), [+it.3, +it.4]]
      .map -> [(it.1 or '').replace(/臺北市/,''), [+it.3, +it.4]]
      .map -> hash[it.0] = it.1

fs.write-file-sync pthk.join(root, "web/static/assets/data/latlng.json"), JSON.stringify(hash)
