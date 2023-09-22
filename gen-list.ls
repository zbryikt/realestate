require! <[pthk]>
fs = require "fs-extra"
require! <[./lib]>

list = lib.get filter: addr: \北投

fs.ensure-dir-sync "data/gen"
fs.write-file-sync "data/gen/all.json", JSON.stringify(list)
