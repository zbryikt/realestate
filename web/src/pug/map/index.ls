<-(->it.apply {}) _
(config) <~ ld$.fetch "/assets/data/secret.json", {method: \GET}, {type: \json} .then _
obj = @
@charts = {}
@ldcv = {}
manager = new block.manager registry: ({url, name, path, version, type}) ->
  if url => return that
  if name == \@plotdb/chart and path in <[bar scatter]> => return "/assets/chart/#path/0.0.1/index.html"
  if name == \base => return "/assets/chart/base/0.0.1/index.html"
  if !path => path = if type == \js => \index.min.js else if type == \css => \index.min.css
  return "/assets/lib/#{name}/main/#{path}"
init = proxise ~>
  script = document.createElement \script
  script.setAttribute \src, "https://maps.googleapis.com/maps/api/js?key=#{config.key}&callback=init&v=weekly"
  document.body.appendChild script

if @inited => return Promise.resolve!
window.init = ~>
  @map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.11509, lng: 121.51525 }
    zoom: 15,
    clickableIcons: false
    styles: [{
      featureType: \poi
      stylers: [{saturation: -100}]
    }]
  });
  @inited = true
  init.resolve!

(latlng) <~ ld$.fetch "/assets/data/latlng.json", {method: \GET}, {type: \json} .then _
(list) <~ ld$.fetch "/assets/data/all.json", {method: \GET}, {type: \json} .then _

console.log list
@show-entry = (m) ->
  @entry = m.data
  @ldcv.popup.toggle!
  view.render \popup

console.log "input count: ", list.length
list = list
  .map ->
    #it["門牌"] = it["門牌"].replace(/臺北市北投區/, '')
    it["門牌"] = it["門牌"].replace(/臺北市/, '')
    ll = latlng[it["門牌"]]
    if ll => it.latlng = {lat: ll.1, lng: ll.0}
    it["整單價"] = Math.round(it["單價"])
    it
  .filter -> it.latlng
  .filter -> it["整單價"] > 10

console.log "filtered count: ", list.length
list.map ->
  if /北投/.exec(it["門牌"]) => console.log it.latlng

gettimespan = (n) ->
  [y,m] = n.split(\/).map -> +it
  y = y + 1911
  m = m - 1
  ret = ((Date.now! - (new Date(y, m, 2)).getTime!) / (1000 * 86400 * 365)).toFixed(2)
  ret = Math.round(ret)
  return ret

list.map -> it["年距"] = gettimespan(it["交易日"])

timespan = {}
list.map ->
  if isNaN(it["年距"]) => y = it["年距"]
  else
    y = +it["年距"]
    if y > 10 => y = "10+"
  timespan[y] = (timespan[y] or 0) + 1

quartile = (arr, q) ->
  a = arr.slice!sort (a, b) -> a - b
  pos = (a.length - 1) * q
  base = Math.floor pos
  rest = pos - base
  if a[base + 1]?
    a[base] + rest * (a[base + 1] - a[base])
  else
    a[base]

stddev = (arr) ->
  avg = arr.reduce(((sum, val) -> sum + val), 0) / arr.length
  Math.sqrt arr.reduce(((sum, val) -> sum + (val - avg) ** 2), 0) / arr.length

average = (arr) ->
  arr.reduce(((sum, val) -> sum + val), 0) / arr.length


pstat = {}
unitp = {}
get-unitp = (list) ->
  unitp := {}
  all = []
  list.map ->
    p = Math.round(it["單價"])
    all.push p
    it["整單價"] = p
    p = Math.floor(p / 5) * 5
    if p > 110 => p = "110+"
    unitp[p] = (unitp[p] or 0) + 1
  pstat <<<
    q1: Math.round(quartile all, 0.25)
    q2: Math.round(quartile all, 0.5)
    q3: Math.round(quartile all, 0.75)
    stddev: Math.round(stddev all)
    avg: Math.round(average all)
  view.render \pstat

age = {}
list.map ->
  y = it["屋齡"]
  y = if isNaN(y) => y else Math.ceil(y / 5) * 5
  if y > 60 => y = "60+"
  age[y] = (age[y] or 0) + 1

floor = {}
list.map ->
  f = it["樓層"].0
  if f <= 0 or isNaN(f) => f = 0
  if f > 10 => f = "10+"
  it["樓層"] = [f]
  floor[f] = (floor[f] or 0) + 1

unit-prices = list
  .map -> +it["單價"]
  .filter -> it < 600 and it > 10
unit-price =
  min: 20 #Math.min.apply Math, unit-prices
  max: 100 #Math.max.apply Math, unit-prices
unit-price.delta = (unit-price.max - unit-price.min) >? 1

list.map ->
  it.color = Math.round(100 * (+it["單價"] - unit-price.min) / unit-price.delta) <? 100 >? 0
  it.color = Math.round(100 * (+it["單價"] - unit-price.min) / unit-price.delta) <? 100 >? 0
unit-prices.sort (a,b) -> return b - a

get-svg = (v) ->
  u = 20 + v * 80 / 100
  hex = ldcolor.hex {r: v * 255 / 100, g: 0, b: 0}
  ret = """<?xml version="1.0"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 100 100">
  <rect x="0" y="0" width="100" height="100" rx="30" ry="30"
  fill="red" stroke="\#000" stroke-width="10"/>
  <text font-family="sans-serif" font-size="75" fill="white"
  x="50" y="60" text-anchor="middle" dominant-baseline="middle">#{Math.round(u)}</text>
  </svg>"""
  ret = "data:image/svg+xml;base64,#{btoa(ret)}"
svgs = [0 to 100].map (v) -> get-svg v

filter =
  floor: []
  age: []
  timespan: []
  bound: {}
  render: debounce ->
    filtered = []
    console.log "樓層: ", @floor, " / 屋齡: ", @age, " / 交易年距今: ", @timespan
    for i from 0 til list.length =>
      d = list[i]
      show = true
      age = if isNaN(d["屋齡"]) => d["屋齡"]
      else Math.ceil( d["屋齡"] / 5 ) * 5
      if @age.length and !(age in @age) => show = false
      if @floor.length and !(d["樓層"] or []).filter(~> it in @floor).length => show = false
      if @timespan.length and !(d["年距"] in @timespan) => show = false
      d.marker.setVisible show
      if show => filtered.push d
    vp = []
    for i from 0 til filtered.length =>
      d = filtered[i]
      if d.latlng.lat >= @bound.{}lat.min and d.latlng.lat <= @bound.{}lat.max and
      d.latlng.lng >= @bound.{}lng.min and d.latlng.lng <= @bound.{}lng.max =>
        vp.push d
    get-unitp(vp)
    raw = [{size: v, name: k} for k,v of unitp]
    obj.charts["unitp"].set-raw raw: raw, binding: {size: {key: \size}, name: {key: \name}}
    #raw = [{s: v, x: k, y: 1} for k,v of unitp]
    #obj.charts["unitp"].set-raw raw: raw, binding: {x: {key: \x}, y: {key: \y}, size: {key: \s}}

makechart =
  age: ({node}) ->
    manager.from {name: \@plotdb/chart, path: \bar}, {root: node}
      .then (ret) ->
        chart = ret.interface
        chart.config do
          legend: enabled: false
          yaxis: enabled: false
          xaxis:
            tick: inner: 2, color: 'rgb(255,92,100)'
            baseline: show: false
            label: format: \d
            caption: show: false
        raw = [{size: v, name: k} for k,v of age]
        chart.on \filter, ->
          filter.age = ((it.name or {}).value or []).map -> +it
          filter.render!
        chart.set-raw do
          raw: raw
          binding: size: {key: \size}, name: {key: \name}
  floor: ({node}) ->
    manager.from {name: \@plotdb/chart, path: \bar}, {root: node}
      .then (ret) ->
        chart = ret.interface
        chart.config do
          legend: enabled: false
          yaxis: enabled: false
          xaxis:
            tick: inner: 2, color: 'rgb(255,92,100)'
            baseline: show: false
            label: format: \d
            caption: show: false
        raw = [{size: v, name: k} for k,v of floor]
        chart.on \filter, ->
          filter.floor = ((it.name or {}).value or []).map -> +it
          filter.render!
        chart.set-raw do
          raw: raw
          binding: size: {key: \size}, name: {key: \name}
  timespan: ({node}) ->
    manager.from {name: \@plotdb/chart, path: \bar}, {root: node}
      .then (ret) ->
        chart = ret.interface
        chart.config do
          legend: enabled: false
          yaxis: enabled: false
          xaxis:
            tick: inner: 2, color: 'rgb(255,92,100)'
            baseline: show: false
            label: format: \d
            caption: show: false
        raw = [{size: v, name: k} for k,v of timespan]
        chart.on \filter, ->
          filter.timespan = ((it.name or {}).value or []).map -> if isNaN(it) => it else +it
          filter.render!
        chart.set-raw do
          raw: raw
          binding: size: {key: \size}, name: {key: \name}

  unitp: ({node}) ~>
    manager.from {name: \@plotdb/chart, path: \bar}, {root: node}
      .then (ret) ~>
        @charts["unitp"] = chart = ret.interface
        chart.config do
          legend: enabled: false
          yaxis: enabled: false
          xaxis:
            tick: inner: 2, color: 'rgb(255,92,100)'
            baseline: show: false
            label: format: \d
            caption: show: false
        raw = [{size: v, name: k} for k,v of unitp]
        chart.set-raw raw: raw, binding: {size: {key: \size}, name: {key: \name}}

  unitpx: ({node}) ~>
    manager.from {name: \@plotdb/chart, path: \scatter}, {root: node}
      .then (ret) ~>
        @charts["unitp"] = chart = ret.interface
        chart.config do
          legend: enabled: false
          yaxis: enabled: false
          xaxis:
            tick: inner: 2, color: 'rgb(255,92,100)'
            baseline: show: false
            label: format: \d
            caption: show: false
        raw = [{s: v, x: k, y: 1} for k,v of unitp]
        chart.set-raw raw: raw, binding: {x: {key: \x}, y: {key: \y}, size: {key: \s}}

view = new ldview do
  root: document.body
  init:
    chart: ({node}) -> makechart[node.getAttribute(\data-name)]({node})
  handler:
    pstat:
      text: stat: ({node}) -> pstat[node.dataset.name] or '0'

    popup:
      text:
        "deal-date":({node}) ~> @{}entry["交易日"]
        "addr": ({node}) ~> @{}entry["門牌"]
        "age":({node}) ~> @{}entry["屋齡"]
        "total-price":({node}) ~> @{}entry["總價"]
        "unit-price":({node}) ~> @{}entry["單價"]
        "floor":({node}) ~> @{}entry["樓層"]
        "main-area":({node}) ~> @{}entry["主建"]
        "sec-area":({node}) ~> @{}entry["附建"]
        "balcony":({node}) ~> @{}entry["陽台"]


view.init!
  .then ->
    init!
  .then ~>
    @ldcv.popup = new ldcover root: view.get(\popup)
    for i from 0 til list.length =>
      d = list[i]
      m = new google.maps.Marker do
        position: d.latlng
        icon: svgs[d.color]
      d.marker = m
      m.data = d
      m.setMap @map
      ((m) ~> m.addListener \click, ~> @show-entry m)(m)
    google.maps.event.addListener @map, \bounds_changed, debounce ~>
      b = @map.getBounds!
      filter.bound = {}
      ne = b.getNorthEast!
      sw = b.getSouthWest!
      filter.bound <<<
        lat: min: sw.lat!, max: ne.lat!
        lng: min: sw.lng!, max: ne.lng!
      filter.render!
