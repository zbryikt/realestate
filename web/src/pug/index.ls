(list) <- ld$.fetch "/assets/data/all.json", {method: \GET}, {type: \json} .then _
console.log list
numfth = (str) ->
  ret = for char in str =>
    c = char.charCodeAt 0
    if !(c >= 65296 and c <= 65305) => char
    else String.fromCharCode(c - 65248)
  ret.join('')

list.map (d,i) ->
  d.idx = i
  d["門牌"] = numfth d["門牌"]
  d["主建陽"] = +d["主建"] + +d["附建"] + +d["陽台"]

datefmt = -> it #"#{it.substring(0,3)}/#{it.substring(3,5)}/#{it.substring(5,7)}"
area = -> if isNaN(it) => return '-' else (+it).toFixed(2) # (+it * 0.3025).toFixed(2)
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
  #addr: '實踐|尊賢|石牌|致遠|吉利|自強|東華'
  addr: '建民路'
  "total-floor": {min: 3, max: 5}
  floor: {min: 2, max: 4}
  sorter: {f: \交易日, d: {"交易日": -1}}
  range: {}
  get: ->
    if !@addr => ret = @all
    addr = (@addr or '').split('|')
    ret = @all.filter (entry) ~>
      addr.filter((a) ~> ~entry["門牌"].indexOf(a)).length

    for k,o of @range =>
      if k == \建坪 => continue
      [L,R] = if o.from > o.to => [o.to, o.from] else [o.from, o.to]
      ret = ret.filter (entry) ~>
        v = +entry[k]
        return v >= L and v <= R
    if o = @range["建坪"] =>
      [L,R] = if o.from > o.to => [o.to, o.from] else [o.from, o.to]
      ret = ret.filter (entry) ~>
        v = +entry["主建"] + +entry["附建"] + +entry["陽台"]
        return v >= L and v <= R

    f = @sorter.f
    if f =>
      d = (@sorter.d[f] or 1)
      ret.sort (a,b) ~>
        a = a[f]
        b = b[f]
        if !(isNaN(+a) and isNaN(+b)) =>
          [a,b] = [a,b].map -> +it
          if isNaN(a) => a = -1
          if isNaN(b) => b = -1
        d * (if a > b => 1 else if a < b => -1 else 0)

    
    return ret

view = new ldview do
  root: document.body
  action: click:
    sort: ({node}) ->
      field-name = node.getAttribute \data-name
      f = entries.sorter.f
      entries.sorter.f = field-name
      if !entries.sorter.d[field-name] => entries.sorter.d[field-name] = 1
      if f == field-name =>
        if !entries.sorter.d[f] => entries.sorter.d[f] = 1
        else entries.sorter.d[f] = -entries.sorter.d[f]
      view.render \item
    filter: ->
      entries.addr = view.get(\addr).value or ''
      view.render \item

  init:
    slider: ({node}) ->
      name = node.getAttribute \data-name
      ldrs = new ldslider root: node, range: true
      ldrs.on \change, debounce ->
        entries.range{}[name] = it
        console.log name, it
        view.render \item

  handler:
    item:
      list: ->
        ret = entries.get!
        console.log "#{ret.length} entries listed"
        if ret.length > 2000 =>
          console.log "truncated to 2000 entries"
          return ret.slice 0, 2000
        return ret

      key: -> it.idx
      view:
        text:
          date: ({ctx}) -> datefmt ctx["交易日"]
          total: ({ctx}) -> ctx["總價"]
          unit: ({ctx}) -> ctx["單價"]
          floor: ({ctx}) -> floor ctx["樓層"]
          "total-floor": ({ctx}) -> floor ctx["總樓"]
          "all-area": ({ctx}) -> area ctx["主建陽"]
          "main-area": ({ctx}) -> area ctx["主建"]
          "sec-area": ({ctx}) -> area ctx["附建"]
          "balcony": ({ctx}) -> area ctx["陽台"]
          addr: ({ctx}) -> ctx["門牌"]
          age: ({ctx}) -> ctx["屋齡"]
