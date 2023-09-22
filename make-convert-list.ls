require! <[pthk]>
fs = require "fs-extra"
require! <[./lib]>

list = lib.get filter: addr: \北投

hash = {}
list.map ->
  addr = it["門牌"]
  if !hash[addr] => hash[addr] = it["交易日"]
  else if hash[addr] < it["交易日"] => hash[addr] = it["交易日"]

ks = [[v, k] for k,v of hash]
ks.sort (a,b) -> if hash[a.1] > hash[b.1] => -1 else if hash[a.1] < hash[b.1] => 1 else 0

console.log [0 to 20].map -> ks[it].0
ks.splice 10000
console.log ks.length
out = "id,Address,Response_Address,Response_X,Response_Y\n"
for i from 0 til ks.length =>
  out += "#{i + 1},#{ks[i].1},,,\n"

fs.write-file-sync "out.csv", out
