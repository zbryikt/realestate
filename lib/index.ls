require! <[pthk papaparse]>
fs = require "fs-extra"
root = pthk.dirname fs.realpathSync pthk.dirname(__filename)
csvdir = pthk.join(root, \data/csv)

# converted fields:
# 單價 總價 門牌 樓層 總樓 交易日 主建 附建 陽台 車位價

sorter = ({list, field, dir, number}) ->
  list.sort (a,b) ->
    [a, b] = [a[field], b[field]]
    if number => [a, b] = [+a, +b]
    return dir * (if a > b => 1 else if a < b => -1 else 0)
datefmt = ->
  if !it => return "-"
  len = it.length
  delta = len - 4
  "#{it.substring(0,delta).padStart(3, "0")}/#{it.substring(delta,delta + 2)}/#{it.substring(delta + 2,delta + 4)}"
area-convert = -> (+it * 0.3025).toFixed(2)
get-age = (d) ->
  if !d => return "-"
  len = d.length
  delta = len - 4
  y = +d.substring(0, delta).replace(/^0/,'') + 1911
  return ((new Date!).getYear! + 1900 - y)

floor-map = (n) ->
  ret = {
    "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6,
    "七": 7, "八": 8, "九": 9, "十": 10, "十一": 11, "十二": 12,
    "十三": 13, "十四": 14, "十五": 15, "十六": 16,
    "十七": 17, "十八": 18, "十九": 19, "二十": 20
    "二十一": 21, "二十二": 22, "二十三": 23, "二十四": 24, "二十五": 25, "二十六": 26
    "地下一": -1, "地下二": -2, "地下三": -3, "地下四": -4, "地下五": -5
  }[n]
  return if ret => ret else n

parse = ({name, filter}) ->
  ret = papaparse.parse fs.read-file-sync(name).toString!, {header: true}
  ret.data.splice 0, 1
  list = ret.data
    .filter ->
      if !(filter and filter.addr) => return true
      ~((it['土地位置建物門牌'] or '').indexOf(filter.addr))
    .map ->
      it{
        '建築完成年月'
        '主建物面積'
        '附屬建物面積'
        '陽台面積'
        '電梯'
        '移轉編號'
        '車位移轉總面積(平方公尺)'
        '車位總價元'
        '總價元'
        '單價元平方公尺'
        '建物移轉總面積平方公尺'
        '土地位置建物門牌'
        '交易年月日'
      }
      it
    .map ->
      {
        '屋齡': get-age(it["建築完成年月"])
        '單價': (+it['單價元平方公尺'] * 3.29 / 10000).toFixed(2)
        '總價': if isNaN(+it['總價元']) => '0' else (+it['總價元'] / 10000).toFixed(0)
        '門牌': it['土地位置建物門牌']
        '樓層': (it['移轉層次'] or '').trim!.replace('層','').split(/，/).map -> floor-map it
        '總樓': floor-map((it['總樓層數'] or '').trim!.replace('層',''))
        '交易日': datefmt it['交易年月日']
        '主建': area-convert it['主建物面積']
        '附建': area-convert it['附屬建物面積']
        '陽台': area-convert it['陽台面積']
        '車位價': (+it['車位總價元'])
      }
  return list

get = (opt = {}) ->
  alllist = []
  dirs = fs.readdir-sync csvdir
    .map ->
      d = pthk.join csvdir, it
      files = fs.readdir-sync d
        .filter(-> if opt.filter and opt.filter.city => opt.filter.city.exec(it) else true)
        .filter(-> /_[ab]\.csv/.exec(it))
        .map -> pthk.join(d, it)
        .map ->
          alllist ++= parse {name: it, filter: opt.filter}
  return alllist

module.exports =
  get: get
