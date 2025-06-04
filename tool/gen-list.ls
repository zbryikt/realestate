require! <[pthk]>
fs = require "fs-extra"

tooldir = fs.realpathSync pthk.dirname(__filename)
root = pthk.join(tooldir, \..)
lib = require pthk.join(root, "lib")

list = lib.get filter: addr: /北投區|士林區/

fs.ensure-dir-sync pthk.join(root, "data/gen")
fs.write-file-sync pthk.join(root, "data/gen/all.json"), JSON.stringify(list)
