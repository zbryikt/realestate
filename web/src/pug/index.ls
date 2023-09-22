(list) <- ld$.fetch "/assets/data/all.json", {method: \GET}, {type: \json} .then _
datefmt = -> "#{it.substring(0,3)}/#{it.substring(3,5)}/#{it.substring(5,7)}"
area = -> (+it * 0.3025).toFixed(2)
floor = ->
  ret = {
    "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, 
    "七": 7, "八": 8, "九": 9, "十": 10, "十一": 11, "十二": 12, 
    "十三": 13, "十四": 14, "十五": 15, "十六": 16, 
    "十七": 17, "十八": 18, "十九": 19, "二十": 20
    "二十一": 21, "二十二": 22, "二十三": 23, "二十四": 24, "二十五": 25, "二十六": 26
    "地下一": -1, "地下二": -2, "地下三": -3, "地下四": -4, "地下五": -5
  }[it]
  return if !ret => it else ret

entries =
  all: list
  addr: '實踐|尊賢|石牌|致遠二路'
  "total-floor": {min: 3, max: 5}
  floor: {min: 2, max: 4}
  get: ->
    if !@addr => return @all
    addr = (@addr or '').split('|')
    return list.filter (entry) ~>
      addr.filter((a) ~> ~entry["門牌"].indexOf(a)).length
sort = (n, dir = 1) -> list.sort (a,b) -> dir * (if a[n] > b[n] => 1 else if a[n] < b[n] => -1 else 0)

sort "交易日", -1

view = new ldview do
  root: document.body
  action: click: filter: ->
    entries.addr = view.get \addr .value
    view.render \item


  handler:
    item:
      list: -> entries.get!
      view:
        text:
          date: ({ctx}) -> datefmt ctx["交易日"]
          total: ({ctx}) -> ctx["總價"]
          unit: ({ctx}) -> ctx["單價"]
          floor: ({ctx}) -> floor ctx["樓層"]
          "total-floor": ({ctx}) -> floor ctx["總樓"]
          "main-area": ({ctx}) -> area ctx["主建"]
          "sec-area": ({ctx}) -> area ctx["附建"]
          "balcony": ({ctx}) -> area ctx["陽台"]
          addr: ({ctx}) -> ctx["門牌"]
