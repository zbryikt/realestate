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
      {name: "ldslider"}
    ]);
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E.items .item{display:grid;gap:1em;grid-template-columns:6em 5em 4em 3em 3em 3em 3em 3em 3em 1fr}.items .head{cursor:pointer}.items .total,.items .unit,.items .floor,.items .total-floor,.items .main-area,.items .sec-area,.items .balcony,.items .age{text-align:right}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E\u003Cdiv class=\"input-group mb-3\"\u003E\u003Cinput class=\"form-control\" ld=\"addr\"\u003E\u003Cdiv class=\"input-group-append\"\u003E\u003Cdiv class=\"btn btn-outline-secondary border\" ld=\"filter\"\u003E過濾\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-4\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cdiv class=\"label\"\u003E屋齡\u003C\u002Fdiv\u003E\u003Cdiv class=\"ldrs\" ld=\"slider\" data-name=\"屋齡\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cdiv class=\"label\"\u003E樓層\u003C\u002Fdiv\u003E\u003Cdiv class=\"ldrs\" ld=\"slider\" data-name=\"樓層\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cdiv class=\"label\"\u003E建坪\u003C\u002Fdiv\u003E\u003Cdiv class=\"ldrs\" ld=\"slider\" data-name=\"建坪\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"my-5\"\u003E\u003Chr\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"items\"\u003E\u003Cdiv class=\"item head\"\u003E\u003Cdiv class=\"date\" ld=\"sort\" data-name=\"交易日\"\u003E交易日\u003C\u002Fdiv\u003E\u003Cdiv class=\"total\" ld=\"sort\" data-name=\"總價\"\u003E總價\u003C\u002Fdiv\u003E\u003Cdiv class=\"unit\" ld=\"sort\" data-name=\"單價\"\u003E單價\u003C\u002Fdiv\u003E\u003Cdiv class=\"age\" ld=\"sort\" data-name=\"屋齡\"\u003E屋齡\u003C\u002Fdiv\u003E\u003Cdiv class=\"floor\" ld=\"sort\" data-name=\"樓層\"\u003E樓層\u003C\u002Fdiv\u003E\u003Cdiv class=\"total-floor\" ld=\"sort\" data-name=\"總樓\"\u003E樓高\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-area\" ld=\"sort\" data-name=\"主建\"\u003E主建物\u003C\u002Fdiv\u003E\u003Cdiv class=\"sec-area\" ld=\"sort\" data-name=\"附建\"\u003E附建物\u003C\u002Fdiv\u003E\u003Cdiv class=\"balcony\" ld=\"sort\" data-name=\"陽台\"\u003E陽台\u003C\u002Fdiv\u003E\u003Cdiv class=\"addr\" ld=\"sort\" data-name=\"地址\"\u003E地址\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\" ld-each=\"item\"\u003E\u003Cdiv class=\"date\" ld=\"date\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"total\" ld=\"total\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"unit\" ld=\"unit\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"age\" ld=\"age\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"floor\" ld=\"floor\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"total-floor\" ld=\"total-floor\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-area\" ld=\"main-area\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sec-area\" ld=\"sec-area\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"balcony\" ld=\"balcony\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"addr text-truncate\" ld=\"addr\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"},
      {name: "ldslider"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Eld$.fetch(\"\u002Fassets\u002Fdata\u002Fall.json\",{method:\"GET\"},{type:\"json\"}).then(function(f){var n,e,i,o,u;n=function(r){return r};e=function(r){if(isNaN(r)){return\"-\"}else{return(+r).toFixed(2)}};i=function(r){var t;t={\"一\":1,\"二\":2,\"三\":3,\"四\":4,\"五\":5,\"六\":6,\"七\":7,\"八\":8,\"九\":9,\"十\":10,\"十一\":11,\"十二\":12,\"十三\":13,\"十四\":14,\"十五\":15,\"十六\":16,\"十七\":17,\"十八\":18,\"十九\":19,\"二十\":20,\"二十一\":21,\"二十二\":22,\"二十三\":23,\"二十四\":24,\"二十五\":25,\"二十六\":26,\"地下一\":-1,\"地下二\":-2,\"地下三\":-3,\"地下四\":-4,\"地下五\":-5}[r];return!t?r:t};o={all:f,addr:\"實踐|尊賢|石牌|致遠\",\"total-floor\":{min:3,max:5},floor:{min:2,max:4},sorter:{f:\"交易日\",d:{\"交易日\":-1}},range:{},get:function(){var r,t,e,i,n,o,u;if(!this.addr){return this.all}r=(this.addr||\"\").split(\"|\");t=f.filter(function(t){return r.filter(function(r){return~t[\"門牌\"].indexOf(r)}).length});e=this.sorter.f;if(e){i=this.sorter.d[e]||1;t.sort(function(r,t){var n;r=r[e];t=t[e];if(!(isNaN(r)||isNaN(t))){n=[r,t].map(function(r){return+r}),r=n[0],t=n[1]}return i*(r\u003Et?1:r\u003Ct?-1:0)})}for(n in o=this.range){u=o[n];if(n===\"建坪\"){continue}t=t.filter(a)}if(u=this.range[\"建坪\"]){t=t.filter(function(r){var t;t=+r[\"主建\"]+ +r[\"附建\"]+ +r[\"陽台\"];return t\u003E=u.from&&t\u003C=u.to})}return t;function a(r){var t;t=r[n];return t\u003E=u.from&&t\u003C=u.to}}};f=o.get();f.map(function(r,t){return r.idx=t});return u=new ldview({root:document.body,action:{click:{sort:function(r){var t,n,e;t=r.node;n=t.getAttribute(\"data-name\");e=o.sorter.f;o.sorter.f=n;if(!o.sorter.d[n]){o.sorter.d[n]=1}if(e===n){if(!o.sorter.d[e]){o.sorter.d[e]=1}else{o.sorter.d[e]=-o.sorter.d[e]}}return u.render(\"item\")},filter:function(){o.addr=u.get(\"addr\").value;return u.render(\"item\")}}},init:{slider:function(r){var t,n,e;t=r.node;n=t.getAttribute(\"data-name\");e=new ldslider({root:t,range:true});return e.on(\"change\",debounce(function(r){var t;(t=o.range)[n]||(t[n]={});t[n]=r;console.log(n,r);return u.render(\"item\")}))}},handler:{item:{list:function(){return f},key:function(r){return r.idx},view:{text:{date:function(r){var t;t=r.ctx;return n(t[\"交易日\"])},total:function(r){var t;t=r.ctx;return t[\"總價\"]},unit:function(r){var t;t=r.ctx;return t[\"單價\"]},floor:function(r){var t;t=r.ctx;return i(t[\"樓層\"])},\"total-floor\":function(r){var t;t=r.ctx;return i(t[\"總樓\"])},\"main-area\":function(r){var t;t=r.ctx;return e(t[\"主建\"])},\"sec-area\":function(r){var t;t=r.ctx;return e(t[\"附建\"])},balcony:function(r){var t;t=r.ctx;return e(t[\"陽台\"])},addr:function(r){var t;t=r.ctx;return t[\"門牌\"]},age:function(r){var t;t=r.ctx;return t[\"屋齡\"]}}}}}})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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