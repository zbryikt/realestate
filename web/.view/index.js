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
      {name: "@loadingio/bootstrap.ext"}
    ]);
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E.items .item{display:grid;gap:1em;grid-template-columns:6em 5em 4em 3em 3em 3em 3em 3em 1fr}.items .total,.items .unit,.items .floor,.items .total-floor,.items .main-area,.items .sec-area,.items .balcony{text-align:right}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E\u003Cdiv class=\"input-group\"\u003E\u003Cinput class=\"form-control\" ld=\"addr\"\u003E\u003Cdiv class=\"input-group-append\"\u003E\u003Cdiv class=\"btn btn-outline-secondary border\" ld=\"filter\"\u003E過濾\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"my-5\"\u003E\u003Chr\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"items\"\u003E\u003Cdiv class=\"item head\"\u003E\u003Cdiv class=\"date\"\u003E交易日\u003C\u002Fdiv\u003E\u003Cdiv class=\"total\"\u003E總價\u003C\u002Fdiv\u003E\u003Cdiv class=\"unit\"\u003E單價\u003C\u002Fdiv\u003E\u003Cdiv class=\"floor\"\u003E樓層\u003C\u002Fdiv\u003E\u003Cdiv class=\"total-floor\"\u003E樓高\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-area\"\u003E主建物\u003C\u002Fdiv\u003E\u003Cdiv class=\"sec-area\"\u003E附建物\u003C\u002Fdiv\u003E\u003Cdiv class=\"balcony\"\u003E陽台\u003C\u002Fdiv\u003E\u003Cdiv class=\"addr\"\u003E地址\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\" ld-each=\"item\"\u003E\u003Cdiv class=\"date\" ld=\"date\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"total\" ld=\"total\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"unit\" ld=\"unit\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"floor\" ld=\"floor\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"total-floor\" ld=\"total-floor\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-area\" ld=\"main-area\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sec-area\" ld=\"sec-area\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"balcony\" ld=\"balcony\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"addr text-truncate\" ld=\"addr\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"},
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Eld$.fetch(\"\u002Fassets\u002Fdata\u002Fall.json\",{method:\"GET\"},{type:\"json\"}).then(function(n){var r,e,u,t,i,o;r=function(t){return t.substring(0,3)+\"\u002F\"+t.substring(3,5)+\"\u002F\"+t.substring(5,7)};e=function(t){return(+t*.3025).toFixed(2)};u=function(t){var n;n={\"一\":1,\"二\":2,\"三\":3,\"四\":4,\"五\":5,\"六\":6,\"七\":7,\"八\":8,\"九\":9,\"十\":10,\"十一\":11,\"十二\":12,\"十三\":13,\"十四\":14,\"十五\":15,\"十六\":16,\"十七\":17,\"十八\":18,\"十九\":19,\"二十\":20,\"二十一\":21,\"二十二\":22,\"二十三\":23,\"二十四\":24,\"二十五\":25,\"二十六\":26,\"地下一\":-1,\"地下二\":-2,\"地下三\":-3,\"地下四\":-4,\"地下五\":-5}[t];return!n?t:n};t={all:n,addr:\"實踐|尊賢|石牌|致遠二路\",\"total-floor\":{min:3,max:5},floor:{min:2,max:4},get:function(){var t;if(!this.addr){return this.all}t=(this.addr||\"\").split(\"|\");return n.filter(function(n){return t.filter(function(t){return~n[\"門牌\"].indexOf(t)}).length})}};i=function(r,e){e==null&&(e=1);return n.sort(function(t,n){return e*(t[r]\u003En[r]?1:t[r]\u003Cn[r]?-1:0)})};i(\"交易日\",-1);return o=new ldview({root:document.body,action:{click:{filter:function(){t.addr=o.get(\"addr\").value;return o.render(\"item\")}}},handler:{item:{list:function(){return t.get()},view:{text:{date:function(t){var n;n=t.ctx;return r(n[\"交易日\"])},total:function(t){var n;n=t.ctx;return n[\"總價\"]},unit:function(t){var n;n=t.ctx;return n[\"單價\"]},floor:function(t){var n;n=t.ctx;return u(n[\"樓層\"])},\"total-floor\":function(t){var n;n=t.ctx;return u(n[\"總樓\"])},\"main-area\":function(t){var n;n=t.ctx;return e(n[\"主建\"])},\"sec-area\":function(t){var n;n=t.ctx;return e(n[\"附建\"])},balcony:function(t){var n;n=t.ctx;return e(n[\"陽台\"])},addr:function(t){var n;n=t.ctx;return n[\"門牌\"]}}}}}})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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