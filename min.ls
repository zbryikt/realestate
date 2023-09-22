require! <[papaparse]>
fs = require "fs-extra"
ret = papaparse.parse fs.read-file-sync('out-done.csv').toString!
ret = ret.data
  .filter -> it.3 and !/;/.exec(it.3) # remove results with multiple entries
  .map -> [(it.1 or '').replace(/臺北市北投區/,''), [+it.3, +it.4]]
hash = Object.fromEntries ret

fs.write-file-sync "web/static/assets/data/latlng.json", JSON.stringify(hash)
