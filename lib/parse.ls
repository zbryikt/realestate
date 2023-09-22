require! <[decompress pthk]>
fs = require "fs-extra"
root = pthk.dirname fs.realpathSync pthk.dirname(__filename)

rawdir = pthk.join(root, \data/raw)
csvdir = pthk.join(root, \data/csv)
files = fs.readdir-sync rawdir .map (n) -> pthk.join rawdir, n
ps = files.map (fn) ->
  name = pthk.basename(fn).replace(/.zip/, '')
  decompress fn, pthk.join(csvdir, name)
Promise.all ps .then -> console.log \done.
