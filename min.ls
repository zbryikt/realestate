require! <[papaparse]>
fs = require "fs-extra"
ret1 = papaparse.parse fs.read-file-sync('data/paid/address-latlng1.csv').toString!
ret2 = papaparse.parse fs.read-file-sync('data/paid/address-latlng2.csv').toString!
ret3 = papaparse.parse fs.read-file-sync('data/paid/address-latlng3.csv').toString!
hash = {}
[ret1, ret2, ret3].map (ret) ->
  ret = ret.data
    .filter -> it.3 and !/;/.exec(it.3) # remove results with multiple entries
    .map -> [(it.1 or '').replace(/臺北市北投區/,''), [+it.3, +it.4]]
    .map -> hash[it.0] = it.1

fs.write-file-sync "web/static/assets/data/latlng.json", JSON.stringify(hash)
