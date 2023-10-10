 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, c, defer, hashfile, libLoader, md5, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
pug_html = pug_html + "\u003Chtml\u003E\u003Chead\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "@loadingio/bootstrap.ext"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;margin:0;padding:0}.charts{position:absolute;z-index:var(--z-float);bottom:1em;left:1em;display:flex;gap:1em}.charts .label{text-shadow:0 0 4px #fff;background:rgba(255,255,255,0.8);padding:0 .2em;margin-bottom:.1em;border-radius:.25em}.chart{width:10em;height:6em;border-radius:.25em;box-shadow:0 2px 4px rgba(0,0,0,0.3);background:#fff;padding:.5em}.ldcv-popup .label{width:4em;text-align:right;opacity:.8}.ldcv-popup .value{font-weight:700}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"w-100 h-100\" id=\"map\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex charts\"\u003E\u003Cdiv class=\"p-2\"\u003E\u003Cdiv class=\"label text-sm\"\u003E屋齡分布\u003C\u002Fdiv\u003E\u003Cdiv class=\"chart\" ld=\"chart\" data-name=\"age\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-2\"\u003E\u003Cdiv class=\"label text-sm\"\u003E樓層分布\u003C\u002Fdiv\u003E\u003Cdiv class=\"chart\" ld=\"chart\" data-name=\"floor\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-2\"\u003E\u003Cdiv class=\"label text-sm\"\u003E交易距今(年)\u003C\u002Fdiv\u003E\u003Cdiv class=\"chart\" ld=\"chart\" data-name=\"timespan\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-2\"\u003E\u003Cdiv class=\"label text-sm\"\u003E單價\u003C\u002Fdiv\u003E\u003Cdiv class=\"chart\" ld=\"chart\" data-name=\"unitp\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ldcv scroll autogap\" ld=\"popup\"\u003E\u003Cdiv class=\"w-640 rwd base\"\u003E\u003Cdiv class=\"inner ldcv-popup\"\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E成交日\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"deal-date\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E地址\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"addr\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E屋齡\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"age\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E總價\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"total-price\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E單價\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"unit-price\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E樓層\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"floor\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E主坪\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"main-area\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E附坪\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"sec-area\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-3\"\u003E\u003Cdiv class=\"label\"\u003E陽台\u003C\u002Fdiv\u003E\u003Cdiv class=\"value\" ld=\"balcony\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "@plotdb/semver"},
      {name: "@plotdb/rescope"},
      {name: "@plotdb/csscope"},
      {name: "@plotdb/block"},
      {name: "ldview"},
      {name: "ldcover"},
      {name: "ldcolor"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(n){return n.apply({})})(function(){var v=this;return ld$.fetch(\"\u002Fassets\u002Fdata\u002Fsecret.json\",{method:\"GET\"},{type:\"json\"}).then(function(e){var y,m,h;y=v;v.charts={};v.ldcv={};m=new block.manager({registry:function(n){var e,t,r,a,i,o;e=n.url,t=n.name,r=n.path,a=n.version,i=n.type;if(o=e){return o}if(t===\"@plotdb\u002Fchart\"&&(r===\"bar\"||r===\"scatter\")){return\"\u002Fassets\u002Fchart\u002F\"+r+\"\u002F0.0.1\u002Findex.html\"}if(t===\"base\"){return\"\u002Fassets\u002Fchart\u002Fbase\u002F0.0.1\u002Findex.html\"}if(!r){r=i===\"js\"?\"index.min.js\":i===\"css\"?\"index.min.css\":void 8}return\"\u002Fassets\u002Flib\u002F\"+t+\"\u002Fmain\u002F\"+r}});h=proxise(function(){var n;n=document.createElement(\"script\");n.setAttribute(\"src\",\"https:\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key=\"+e.key+\"&callback=init&v=weekly\");return document.body.appendChild(n)});if(v.inited){return Promise.resolve()}window.init=function(){v.map=new google.maps.Map(document.getElementById(\"map\"),{center:{lat:25.11509,lng:121.51525},zoom:15,clickableIcons:false,styles:[{featureType:\"poi\",stylers:[{saturation:-100}]}]});v.inited=true;return h.resolve()};return ld$.fetch(\"\u002Fassets\u002Fdata\u002Flatlng.json\",{method:\"GET\"},{type:\"json\"}).then(function(d){return ld$.fetch(\"\u002Fassets\u002Fdata\u002Fall.json\",{method:\"GET\"},{type:\"json\"}).then(function(p){var e,s,g,b,l,u,n,r,t,a,o,f,i,c;v.showEntry=function(n){this.entry=n.data;this.ldcv.popup.toggle();return c.render(\"popup\")};p=p.map(function(n){var e;n[\"門牌\"]=n[\"門牌\"].replace(\u002F臺北市北投區\u002F,\"\");e=d[n[\"門牌\"]];if(e){n.latlng={lat:e[1],lng:e[0]}}n[\"整單價\"]=Math.round(n[\"單價\"]);return n}).filter(function(n){return n.latlng}).filter(function(n){return n[\"整單價\"]\u003E10});e=function(n){var e,t,r,a;e=n.split(\"\u002F\").map(function(n){return+n}),t=e[0],r=e[1];t=t+1911;r=r-1;a=((Date.now()-new Date(t,r,2).getTime())\u002F(1e3*86400*365)).toFixed(2);a=Math.round(a);return a};p.map(function(n){return n[\"年距\"]=e(n[\"交易日\"])});s={};p.map(function(n){var e;if(isNaN(n[\"年距\"])){e=n[\"年距\"]}else{e=+n[\"年距\"];if(e\u003E10){e=\"10+\"}}return s[e]=(s[e]||0)+1});g={};b=function(n){g={};return n.map(function(n){var e;e=Math.round(n[\"單價\"]);if(e\u003E110){e=\"110+\"}g[e]=(g[e]||0)+1;return n[\"整單價\"]=e})};l={};p.map(function(n){var e;e=n[\"屋齡\"];e=isNaN(e)?e:Math.ceil(e\u002F5)*5;if(e\u003E60){e=\"60+\"}return l[e]=(l[e]||0)+1});u={};p.map(function(n){var e;e=n[\"樓層\"][0];if(e\u003C=0||isNaN(e)){e=0}if(e\u003E10){e=\"10+\"}n[\"樓層\"]=[e];return u[e]=(u[e]||0)+1});n=p.map(function(n){return+n[\"單價\"]}).filter(function(n){return n\u003C600&&n\u003E10});r={min:20,max:100};r.delta=(t=r.max-r.min)\u003E1?t:1;p.map(function(n){var e,t;n.color=(e=(t=Math.round(100*(+n[\"單價\"]-r.min)\u002Fr.delta))\u003C100?t:100)\u003E0?e:0;return n.color=(e=(t=Math.round(100*(+n[\"單價\"]-r.min)\u002Fr.delta))\u003C100?t:100)\u003E0?e:0});n.sort(function(n,e){return e-n});a=function(n){var e,t,r;e=20+n*80\u002F100;t=ldcolor.hex({r:n*255\u002F100,g:0,b:0});r='\u003C?xml version=\"1.0\"?\u003E\\n\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"12\" height=\"12\" viewBox=\"0 0 100 100\"\u003E\\n\u003Crect x=\"0\" y=\"0\" width=\"100\" height=\"100\" rx=\"30\" ry=\"30\"\\nfill=\"red\" stroke=\"#000\" stroke-width=\"10\"\u002F\u003E\\n\u003Ctext font-family=\"sans-serif\" font-size=\"75\" fill=\"white\"\\nx=\"50\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\"\u003E'+Math.round(e)+\"\u003C\u002Ftext\u003E\\n\u003C\u002Fsvg\u003E\";return r=\"data:image\u002Fsvg+xml;base64,\"+btoa(r)};o=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100].map(function(n){return a(n)});f={floor:[],age:[],timespan:[],bound:{},render:debounce(function(){var n,e,t,r,a,i,o,s,l,u,f,c,d,m=this;n=[];console.log(\"樓層: \",this.floor,\" \u002F 屋齡: \",this.age,\" \u002F 交易年距今: \",this.timespan);for(e=0,t=p.length;e\u003Ct;++e){r=e;a=p[r];i=true;o=isNaN(a[\"屋齡\"])?a[\"屋齡\"]:Math.ceil(a[\"屋齡\"]\u002F5)*5;if(this.age.length&&!in$(o,this.age)){i=false}if(this.floor.length&&!(a[\"樓層\"]||[]).filter(h).length){i=false}if(this.timespan.length&&!in$(a[\"年距\"],this.timespan)){i=false}a.marker.setVisible(i);if(i){n.push(a)}}s=[];for(e=0,t=n.length;e\u003Ct;++e){r=e;a=n[r];if(a.latlng.lat\u003E=((l=this.bound).lat||(l.lat={})).min&&a.latlng.lat\u003C=((l=this.bound).lat||(l.lat={})).max&&a.latlng.lng\u003E=((l=this.bound).lng||(l.lng={})).min&&a.latlng.lng\u003C=((l=this.bound).lng||(l.lng={})).max){s.push(a)}}b(s);f=[];for(c in l=g){d=l[c];f.push({size:d,name:c})}u=f;return y.charts[\"unitp\"].setRaw({raw:u,binding:{size:{key:\"size\"},name:{key:\"name\"}}});function h(n){return in$(n,m.floor)}})};i={age:function(n){var e;e=n.node;return m.from({name:\"@plotdb\u002Fchart\",path:\"bar\"},{root:e}).then(function(n){var e,t,r,a,i,o;e=n[\"interface\"];e.config({legend:{enabled:false},yaxis:{enabled:false},xaxis:{tick:{inner:2,color:\"rgb(255,92,100)\"},baseline:{show:false},label:{format:\"d\"},caption:{show:false}}});r=[];for(a in i=l){o=i[a];r.push({size:o,name:a})}t=r;e.on(\"filter\",function(n){f.age=((n.name||{}).value||[]).map(function(n){return+n});return f.render()});return e.setRaw({raw:t,binding:{size:{key:\"size\"},name:{key:\"name\"}}})})},floor:function(n){var e;e=n.node;return m.from({name:\"@plotdb\u002Fchart\",path:\"bar\"},{root:e}).then(function(n){var e,t,r,a,i,o;e=n[\"interface\"];e.config({legend:{enabled:false},yaxis:{enabled:false},xaxis:{tick:{inner:2,color:\"rgb(255,92,100)\"},baseline:{show:false},label:{format:\"d\"},caption:{show:false}}});r=[];for(a in i=u){o=i[a];r.push({size:o,name:a})}t=r;e.on(\"filter\",function(n){f.floor=((n.name||{}).value||[]).map(function(n){return+n});return f.render()});return e.setRaw({raw:t,binding:{size:{key:\"size\"},name:{key:\"name\"}}})})},timespan:function(n){var e;e=n.node;return m.from({name:\"@plotdb\u002Fchart\",path:\"bar\"},{root:e}).then(function(n){var e,t,r,a,i,o;e=n[\"interface\"];e.config({legend:{enabled:false},yaxis:{enabled:false},xaxis:{tick:{inner:2,color:\"rgb(255,92,100)\"},baseline:{show:false},label:{format:\"d\"},caption:{show:false}}});r=[];for(a in i=s){o=i[a];r.push({size:o,name:a})}t=r;e.on(\"filter\",function(n){f.timespan=((n.name||{}).value||[]).map(function(n){if(isNaN(n)){return n}else{return+n}});return f.render()});return e.setRaw({raw:t,binding:{size:{key:\"size\"},name:{key:\"name\"}}})})},unitp:function(n){var e;e=n.node;return m.from({name:\"@plotdb\u002Fchart\",path:\"bar\"},{root:e}).then(function(n){var e,t,r,a,i,o;v.charts[\"unitp\"]=e=n[\"interface\"];e.config({legend:{enabled:false},yaxis:{enabled:false},xaxis:{tick:{inner:2,color:\"rgb(255,92,100)\"},baseline:{show:false},label:{format:\"d\"},caption:{show:false}}});r=[];for(a in i=g){o=i[a];r.push({size:o,name:a})}t=r;return e.setRaw({raw:t,binding:{size:{key:\"size\"},name:{key:\"name\"}}})})},unitpx:function(n){var e;e=n.node;return m.from({name:\"@plotdb\u002Fchart\",path:\"scatter\"},{root:e}).then(function(n){var e,t,r,a,i,o;v.charts[\"unitp\"]=e=n[\"interface\"];e.config({legend:{enabled:false},yaxis:{enabled:false},xaxis:{tick:{inner:2,color:\"rgb(255,92,100)\"},baseline:{show:false},label:{format:\"d\"},caption:{show:false}}});r=[];for(a in i=g){o=i[a];r.push({s:o,x:a,y:1})}t=r;return e.setRaw({raw:t,binding:{x:{key:\"x\"},y:{key:\"y\"},size:{key:\"s\"}}})})}};c=new ldview({root:document.body,init:{chart:function(n){var e;e=n.node;return i[e.getAttribute(\"data-name\")]({node:e})}},handler:{popup:{text:{\"deal-date\":function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"交易日\"]},addr:function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"門牌\"]},age:function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"屋齡\"]},\"total-price\":function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"總價\"]},\"unit-price\":function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"單價\"]},floor:function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"樓層\"]},\"main-area\":function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"主建\"]},\"sec-area\":function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"附建\"]},balcony:function(n){var e;e=n.node;return(v.entry||(v.entry={}))[\"陽台\"]}}}}});return c.init().then(function(){return h()}).then(function(){var n,e,t,r,a;v.ldcv.popup=new ldcover({root:c.get(\"popup\")});for(n=0,e=p.length;n\u003Ce;++n){t=n;r=p[t];a=new google.maps.Marker({position:r.latlng,icon:o[r.color]});r.marker=a;a.data=r;a.setMap(v.map);i(a)}return google.maps.event.addListener(v.map,\"bounds_changed\",debounce(function(){var n,e,t;n=v.map.getBounds();f.bound={};e=n.Ua||n.rb;t=n.Ia||n.Ta;f.bound.lat={min:e.lo,max:e.hi};f.bound.lng={min:t.lo,max:t.hi};return f.render()}));function i(n){return n.addListener(\"click\",function(){return v.showEntry(n)})}})})})})});function in$(n,e){var t=-1,r=e.length\u003E\u003E\u003E0;while(++t\u003Cr)if(n===e[t])return true;return false}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 