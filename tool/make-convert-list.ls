<-(->it!) _
require! <[pthk papaparse]>
fs = require "fs-extra"

tooldir = fs.realpathSync pthk.dirname(__filename)
root = pthk.join(tooldir, \..)

lib = require pthk.join(root, "lib")

console.log "load converted latlng..."
converted = {}

fs.readdir-sync pthk.join(root, \data/paid)
  .map -> pthk.join(root, \data/paid, it)
  .map -> papaparse.parse fs.read-file-sync(it).toString!
  .map (list) -> list.data.map -> converted[it.1] = true

console.log "get list ..."
list = lib.get filter: addr: /北投區|士林區/

console.log "prepare address list to be converted ..."
hash = {}
stat = {}
list.map ->
  addr = it["門牌"]
  if converted[addr] =>
    stat.converted = (stat.converted or 0) + 1
    return
  if !hash[addr] => hash[addr] = it["交易日"]
  else if hash[addr] < it["交易日"] => hash[addr] = it["交易日"]

ks = [[v, k] for k,v of hash]
ks.sort (a,b) -> if hash[a.1] > hash[b.1] => -1 else if hash[a.1] < hash[b.1] => 1 else 0

ks.splice 10000
console.log "converted: #{stat.converted}"
console.log "to be converted: #{ks.length}"
out = "id,Address,Response_Address,Response_X,Response_Y\n"
for i from 0 til ks.length =>
  out += "#{i + 1},#{ks[i].1},,,\n"

fs.write-file-sync "out.csv", out
console.log "addresses to be converted are written into out.csv."
