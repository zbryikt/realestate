require! <[pthk papaparse]>
fs = require "fs-extra"

tooldir = fs.realpathSync pthk.dirname(__filename)
root = pthk.join(tooldir, \..)

hash = {}

fs.readdir-sync pthk.join(root, \data/paid)
  .map -> pthk.join(root, \data/paid, it)
  .map -> papaparse.parse fs.read-file-sync(it).toString!
  .map (list) ->
    list.data
      .filter -> it.3 and !/;/.exec(it.3) # remove results with multiple entries
      .map -> [(it.1 or '').replace(/臺北市北投區/,''), [+it.3, +it.4]]
      .map -> hash[it.0] = it.1

fs.write-file-sync pthk.join(root, "web/static/assets/data/latlng.json"), JSON.stringify(hash)
