require! <[pthk]>
fs = require "fs-extra"
require! <[./lib]>

list = lib.get {filter: addr: \北投, city: /^a_/}

ret = list.filter ->
  /尊賢街/.exec(it["門牌"]) and
  /２０６|206/.exec(it["門牌"]) and true
  #it["屋齡"] in [51,52,53]
console.log ret
