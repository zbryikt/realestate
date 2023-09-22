require! <[@loadingio/debounce.js pthk papaparse]>
fs = require "fs-extra"
fetch = require "node-fetch"

root = pthk.dirname fs.realpathSync pthk.dirname(__filename)
csvdir = pthk.join(root, \data/csv)
rawdir = pthk.join(root, \data/raw)

start =
  year: 101
  season: 2

cur =
  year: ((new Date!).getYear! - 11)
  season: Math.ceil(((new Date!).getMonth! + 1) / 4)

list = [start.year to cur.year].map (y) -> [1 to 4].map (s) -> "#{y}S#{s}"
  .reduce(((a,b) -> a ++ b), [])
  .filter -> it >= "#{start.year}S#{start.season}"
  .filter -> it < "#{cur.year}S#{cur.season}"
  .map -> {type: \season, key: it}

list = []
list-alt = []
date = new Date!
[year,month] = [date.getYear! + 1900, date.getMonth! + 1]
for i from -2 to 0 => for j in [1,11,21] =>
  m = month + i
  y = if m < 1 => year - 1 else year
  if m < 1 => m = m + 12
  y = year
  list-alt.push "#{('' + y).padStart(4,'0')}#{('' + m).padStart(2,'0')}#{('' + j).padStart(2,'0')}"
list ++= list-alt.map -> {type: \10day, key: it}


url = (d) ->
  if d.type == \10day =>
    # 10day
    return "https://plvr.land.moi.gov.tw/DownloadHistory?type=history&fileName=#{d.key}" # d fmt: 20230911
  else
    # season
    return "https://plvr.land.moi.gov.tw//DownloadSeason?season=#{d.key}&type=zip&fileName=lvr_landcsv.zip"
proc = (list) ->
  if !(list and list.length) => return Promise.resolve!
  item = list.splice(0, 1).0
  console.log "fetching #{item.key} ..."
  fetch url(item), {method: \GET}
    .then (res) -> res.buffer!
    .then ->
      fs.ensure-dir-sync rawdir
      fs.write-file-sync pthk.join(rawdir, "#{item.key}.zip"), it
      debounce 2000 .then -> proc list
    .catch ->
      console.error "failed to fetch #{item.key} . continue with delay ..."
      debounce 2000 .then -> proc list

proc list
  .then -> console.log \done.

