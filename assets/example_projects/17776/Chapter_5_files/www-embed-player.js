(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={sa:!0},ea={};try{ea.__proto__=da;ca=ea.sa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function pa(){}
function qa(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function ra(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==ra(a)}
function sa(a){var b=ra(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ta(a){return"function"==ra(a)}
function ua(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var va="closure_uid_"+(1E9*Math.random()>>>0),wa=0;function xa(a,b,c){return a.call.apply(a.bind,arguments)}
function ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=xa:x=ya;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Va=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ba=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ca=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function Da(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ea(a,b){var c=za(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Fa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ga(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(sa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ha=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ia(a){if(!Ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(La,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Pa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Qa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ra,"&#0;"));return a}
var Ka=/&/g,La=/</g,Ma=/>/g,Pa=/"/g,Qa=/'/g,Ra=/\x00/g,Ja=/[\x00&<>"']/;function Sa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ta;a:{var Ua=p.navigator;if(Ua){var Va=Ua.userAgent;if(Va){Ta=Va;break a}}Ta=""}function D(a){return-1!=Ta.indexOf(a)}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a,b){var c=sa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a){for(var b in a)return!1;return!0}
function ab(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function bb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var eb=D("Opera"),fb=D("Trident")||D("MSIE"),gb=D("Edge"),hb=D("Gecko")&&!(-1!=Ta.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),ib=-1!=Ta.toLowerCase().indexOf("webkit")&&!D("Edge");function jb(){var a=p.document;return a?a.documentMode:void 0}
var kb;a:{var lb="",mb=function(){var a=Ta;if(hb)return/rv:([^\);]+)(\)|;)/.exec(a);if(gb)return/Edge\/([\d\.]+)/.exec(a);if(fb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mb&&(lb=mb?mb[1]:"");if(fb){var nb=jb();if(null!=nb&&nb>parseFloat(lb)){kb=String(nb);break a}}kb=lb}var ob=kb,pb;var qb=p.document;pb=qb&&fb?jb()||("CSS1Compat"==qb.compatMode?parseInt(ob,10):5):void 0;var rb=!fb||9<=Number(pb);function sb(){this.b="";this.g=tb}
sb.prototype.W=!0;sb.prototype.J=function(){return this.b};
function ub(a){return a instanceof sb&&a.constructor===sb&&a.g===tb?a.b:"type_error:TrustedResourceUrl"}
var tb={};function E(){this.b="";this.g=vb}
E.prototype.W=!0;E.prototype.J=function(){return this.b};
function wb(a){return a instanceof E&&a.constructor===E&&a.g===vb?a.b:"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof E)return a;a=a.W?a.J():String(a);xb.test(a)||(a="about:invalid#zClosurez");return zb(a)}
var vb={};function zb(a){var b=new E;b.b=a;return b}
zb("about:blank");function Ab(){this.b=""}
Ab.prototype.W=!0;Ab.prototype.J=function(){return this.b};
function Bb(a){var b=new Ab;b.b=a;return b}
Bb("<!DOCTYPE html>");Bb("");Bb("<br>");function Cb(a,b){var c=b instanceof E?b:yb(b);a.href=wb(c)}
function Db(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?ub(b):b instanceof sb?ub(b):b instanceof E?wb(b):yb(b).J()}
function Eb(a,b){a.src=ub(b)}
;function Fb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
Fb.prototype.equals=function(a){return a instanceof Fb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
Fb.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
Fb.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
Fb.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Gb(a,b){this.width=a;this.height=b}
k=Gb.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Hb(a){var b=document;return r(a)?b.getElementById(a):a}
function Ib(a,b){Wa(b,function(b,d){b&&b.W&&(b=b.J());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Jb.hasOwnProperty(d)?a.setAttribute(Jb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Jb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Kb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!rb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ia(g.name),'"');if(g.type){f.push(' type="',Ia(g.type),'"');var h={};db(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Ib(f,g));2<d.length&&Lb(e,f,d);return f}
function Lb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!sa(f)||ua(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(ua(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ta(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Fa(f):f,d)}}}
function Mb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Nb(a){Ob();var b=new sb;b.b=a;return b}
var Ob=pa;var Pb=document,F=window;function Qb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Rb=(new Date).getTime();function Sb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Tb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+u+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,u;a();return{reset:a,update:c,digest:d,ua:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Ub(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Vb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Vb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vb(a){var b=Tb();b.update(a);return b.ua().toLowerCase()}
;function Wb(a){this.b=a||{cookie:""}}
k=Wb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ha(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ha(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xb=new Wb("undefined"==typeof document?null:document);Xb.g=3950;function Yb(){var a=[],b=Sb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Wb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Wb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Ub(Sb(d),b,a||null)].join(" "):null}return null}
;function Zb(a,b){this.f=a;this.h=b;this.g=0;this.b=null}
Zb.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function $b(a,b){a.h(b);100>a.g&&(a.g++,b.next=a.b,a.b=b)}
;function ac(a){p.setTimeout(function(){throw a;},0)}
var bc;
function cc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ia;c.ia=null;a()}};
return function(a){d.next={ia:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function dc(){this.g=this.b=null}
var fc=new Zb(function(){return new ec},function(a){a.reset()});
dc.prototype.add=function(a,b){var c=fc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};
dc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function ec(){this.next=this.scope=this.b=null}
ec.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
ec.prototype.reset=function(){this.next=this.scope=this.b=null};function gc(a,b){hc||ic();jc||(hc(),jc=!0);kc.add(a,b)}
var hc;function ic(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);hc=function(){a.then(lc)}}else hc=function(){var a=lc;
!ta(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(bc||(bc=cc()),bc(a)):p.setImmediate(a)}}
var jc=!1,kc=new dc;function lc(){for(var a;a=kc.remove();){try{a.b.call(a.scope)}catch(b){ac(b)}$b(fc,a)}jc=!1}
;function G(){this.g=this.g;this.B=this.B}
G.prototype.g=!1;G.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function mc(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
G.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function nc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function oc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];sa(d)?oc.apply(null,d):nc(d)}}
;function pc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function qc(a,b){if(a.classList)var c=a.classList.contains(b);else c=pc(a),c=0<=za(c,b);return c}
function rc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):qc(a,"inverted-hdpi")&&(a.className=Ba(pc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var sc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function tc(){}
tc.prototype.next=function(){throw sc;};
tc.prototype.T=function(){return this};
function uc(a){if(a instanceof tc)return a;if("function"==typeof a.T)return a.T(!1);if(sa(a)){var b=0,c=new tc;c.next=function(){for(;;){if(b>=a.length)throw sc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function vc(a,b){if(sa(a))try{C(a,b,void 0)}catch(c){if(c!==sc)throw c;}else{a=uc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==sc)throw c;}}}
function wc(a){if(sa(a))return Fa(a);a=uc(a);var b=[];vc(a,function(a){b.push(a)});
return b}
;(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",pa,b);p.removeEventListener("test",pa,b);return a})();function xc(a){var b=[];yc(new zc,a,b);return b.join("")}
function zc(){}
function yc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),yc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ac(d,c),c.push(":"),yc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ac(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Bc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Cc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ac(a,b){b.push('"',a.replace(Cc,function(a){var b=Bc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Bc[a]=b);return b}),'"')}
;function Dc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Ec(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=pa)try{var c=this;a.call(b,function(a){Fc(c,2,a)},function(a){Fc(c,3,a)})}catch(d){Fc(this,3,d)}}
function Gc(){this.next=this.context=this.g=this.h=this.b=null;this.f=!1}
Gc.prototype.reset=function(){this.context=this.g=this.h=this.b=null;this.f=!1};
var Hc=new Zb(function(){return new Gc},function(a){a.reset()});
function Ic(a,b,c){var d=Hc.get();d.h=a;d.g=b;d.context=c;return d}
function Jc(a){return new H(function(b,c){c(a)})}
function Kc(a,b,c){Lc(a,b,c,null)||gc(y(b,a))}
function Mc(a){return new H(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Kc(e,b,c)})}
function Nc(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Z:!0,value:f}:{Z:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Kc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
H.prototype.then=function(a,b,c){return Oc(this,ta(a)?a:null,ta(b)?b:null,c)};
Dc(H);function Pc(a,b){var c=Ic(b,b,void 0);c.f=!0;Qc(a,c);return a}
function Rc(a,b){return Oc(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&gc(function(){var b=new Sc(a);Tc(this,b)},this)};
function Tc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Tc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Uc(c),Vc(c,e,3,b)))}a.f=null}else Fc(a,3,b)}
function Qc(a,b){a.g||2!=a.b&&3!=a.b||Wc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Oc(a,b,c,d){var e=Ic(null,null,null);e.b=new H(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Sc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Qc(a,e);return e.b}
H.prototype.o=function(a){this.b=0;Fc(this,2,a)};
H.prototype.w=function(a){this.b=0;Fc(this,3,a)};
function Fc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Lc(c,a.o,a.w,a)||(a.m=c,a.b=b,a.f=null,Wc(a),3!=b||c instanceof Sc||Xc(a,c)))}
function Lc(a,b,c,d){if(a instanceof H)return Qc(a,Ic(b||pa,c||null,d)),!0;if(Ec(a))return a.then(b,c,d),!0;if(ua(a))try{var e=a.then;if(ta(e))return Yc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Yc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Wc(a){a.j||(a.j=!0,gc(a.B,a))}
function Uc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
H.prototype.B=function(){for(var a;a=Uc(this);)Vc(this,a,this.b,this.m);this.j=!1};
function Vc(a,b,c,d){if(3==c&&b.g&&!b.f)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,Zc(b,c,d);else try{b.f?b.h.call(b.context):Zc(b,c,d)}catch(e){$c.call(null,e)}$b(Hc,b)}
function Zc(a,b,c){2==b?a.h.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Xc(a,b){a.i=!0;gc(function(){a.i&&$c.call(null,b)})}
var $c=ac;function Sc(a){B.call(this,a)}
A(Sc,B);Sc.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
A(I,G);k=I.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function ad(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Da(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.H(b)}}
k.H=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=pa):(c&&Ea(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.I=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];bd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.H(c)}}return 0!=e}return!1};
function bd(a,b,c){gc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.H,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.l=function(){I.u.l.call(this);this.clear();this.h.length=0};function cd(a){this.b=a}
cd.prototype.set=function(a,b){q(b)?this.b.set(a,xc(b)):this.b.remove(a)};
cd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
cd.prototype.remove=function(a){this.b.remove(a)};function dd(a){this.b=a}
A(dd,cd);function ed(a){this.data=a}
function fd(a){return!q(a)||a instanceof ed?a:new ed(a)}
dd.prototype.set=function(a,b){dd.u.set.call(this,a,fd(b))};
dd.prototype.g=function(a){a=dd.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
dd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gd(a){this.b=a}
A(gd,dd);gd.prototype.set=function(a,b,c){if(b=fd(b)){if(c){if(c<z()){gd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}gd.u.set.call(this,a,b)};
gd.prototype.g=function(a){var b=gd.u.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())gd.prototype.remove.call(this,a);else return b}};function hd(a){this.b=a}
A(hd,gd);function id(){}
;function jd(){}
A(jd,id);jd.prototype.clear=function(){var a=wc(this.T(!0)),b=this;C(a,function(a){b.remove(a)})};function kd(a){this.b=a}
A(kd,jd);k=kd.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.T=function(a){var b=0,c=this.b,d=new tc;d.next=function(){if(b>=c.length)throw sc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function ld(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(ld,kd);function md(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(md,kd);function nd(a){if(!ta(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function od(){var a=null;return Rc(new H(function(b,c){a=nd(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var pd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(pd)}
function qd(a){return a?decodeURI(a):a}
function rd(a,b,c){if(w(b))for(var d=0;d<b.length;d++)rd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sd(a){var b=[],c;for(c in a)rd(c,a[c],b);return b.join("&")}
function td(a,b){var c=sd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var ud=!1,vd="";function wd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(ud=!0,a.description)){vd=wd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){ud=!0;vd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],ud=!(!a||!a.enabledPlugin))){vd=wd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");ud=!0;vd=wd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");ud=!0;vd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),ud=!0,vd=wd(b.GetVariable("$version"))}catch(c){}})();
var xd=ud,yd=vd;function zd(a,b){var c="script";c=void 0===c?"":c;var d=a.createElement("link");Db(d,b,"preload");c&&(d.as=c);(c=a.getElementsByTagName("head")[0])&&c.appendChild(d)}
;var Bd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Cd=/\.(cn|com\.bi|do|sl)$/;function Dd(a){return Bd.test(a)&&!Cd.test(a)}
var Ed=p;function Fd(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];K[3]>=z()&&b.push("adsid="+encodeURIComponent(K[1]));return a+"?"+b.join("&")}
var K,L;function Gd(){Ed=p;K=Ed.googleToken=Ed.googleToken||{};var a=z();K[1]&&K[3]>a&&0<K[2]||(K[1]="",K[2]=-1,K[3]=-1,K[4]="",K[6]="");L=Ed.googleIMState=Ed.googleIMState||{};Dd(L[1])||(L[1]=".google.com");w(L[5])||(L[5]=[]);"boolean"==typeof L[6]||(L[6]=!1);w(L[7])||(L[7]=[]);"number"==typeof L[8]||(L[8]=0)}
function Hd(){Gd();return K[1]}
var M={ka:function(){return 0<L[8]},
Ja:function(){L[8]++},
Ka:function(){0<L[8]&&L[8]--},
La:function(){L[8]=0},
shouldRetry:function(){return!1},
ja:function(){return L[5]},
ha:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
fa:function(){if(!M.ka()){var a=p.document,b=function(b){var c=Fd(b);zd(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return p.processGoogleToken({},2)};
c=Nb(c);Eb(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),M.Ja()}catch(g){}},c=L[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Id(a){Gd();var b=Ed.googleToken[5]||0;a&&(0!=b||K[3]>=z()?M.ha(a):(M.ja().push(a),M.fa()));K[3]>=z()&&K[2]>=z()||M.fa()}
function Jd(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g=parseInt(b.freshLifetimeSecs||"",10)||3600,h=parseInt(b.validLifetimeSecs||"",10)||86400,l=b["1p_jar"]||"";b=b.pucrd||"";Gd();1==e?M.La():M.Ka();if(!f&&M.shouldRetry())Dd(".google.com")&&(L[1]=".google.com"),M.fa();else{var m=Ed.googleToken=Ed.googleToken||{},u=0==e&&f&&r(f)&&0<g&&0<h&&r(l),P=!(K[3]>=z())&&0!=e;if(u||P)u=z(),g=u+1E3*g,h=u+1E3*h,1E-5>Math.random()&&
(u="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e,p.google_image_requests||(p.google_image_requests=[]),P=p.document.createElement("img"),P.src=u,p.google_image_requests.push(P)),m[5]=e,m[1]=f,m[2]=g,m[3]=h,m[4]=l,m[6]=b,Gd();if(f||!M.ka()){e=M.ja();for(f=0;f<e.length;f++)M.ha(e[f]);e.length=0}}};
Id(a)}
;function Kd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var N=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ld=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Ld,void 0);function O(a){Kd(Ld,arguments)}
function R(a,b){return a in Ld?Ld[a]:b}
function Md(a){return R(a,void 0)}
function Nd(){return R("PLAYER_CONFIG",{})}
;function Od(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),O("ERRORS",f))}
;function T(a){return R("EXPERIMENT_FLAGS",{})[a]}
;function Pd(a){a&&(a.dataset?a.dataset[Qd("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Rd(a,b){return a?a.dataset?a.dataset[Qd(b)]:a.getAttribute("data-"+b):null}
var Sd={};function Qd(a){return Sd[a]||(Sd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function U(a,b){ta(a)&&(a=Od(a));return window.setTimeout(a,b)}
function V(a){window.clearTimeout(a)}
;var Td=v("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.H;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsubPubsubInstance",Td,void 0);var Ud=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Ud,void 0);var Vd=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Vd,void 0);var Wd=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Wd,void 0);
function Xd(a,b){var c=Yd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Ud[d]&&b.apply(window,c)};
try{Wd[a]?f():U(f,0)}catch(g){S(g)}},void 0);
Ud[d]=!0;Vd[a]||(Vd[a]=[]);Vd[a].push(d);return d}return 0}
function Zd(a){var b=Yd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Ud[a]}))}
function $d(a,b){var c=Yd();c&&c.publish.apply(c,arguments)}
function ae(a){var b=Yd();if(b)if(b.clear(a),a)be(a);else for(var c in Vd)be(c)}
function Yd(){return v("ytPubsubPubsubInstance")}
function be(a){Vd[a]&&(a=Vd[a],C(a,function(a){Ud[a]&&delete Ud[a]}),a.length=0)}
;var ce=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,de=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ee(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ce,""),c=c.replace(de,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else fe(a,b)}
function fe(a,b){var c=ge(a),d=document.getElementById(c),e=d&&Rd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Xd(c,b);var g=""+(b[va]||(b[va]=++wa));he[g]=e}f||(d=ie(a,c,function(){Rd(d,"loaded")||(Pd(d),$d(c),U(y(ae,c),0))}))}}
function ie(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Eb(d,Nb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function je(a){a=ge(a);var b=document.getElementById(a);b&&(ae(a),b.parentNode.removeChild(b))}
function ke(a,b){if(a&&b){var c=""+(b[va]||(b[va]=++wa));(c=he[c])&&Zd(c)}}
function ge(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Sa(a)}
var he={};var le=null;function me(){var a=R("BG_I",null),b=R("BG_IU",null),c=R("BG_P",void 0);b?ee(b,function(){window.botguard?ne(c):(je(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?ne(c):S(Error("Unable to load Botguard from JS"),"WARNING"))}
function ne(a){le=new window.botguard.bg(a);T("botguard_periodic_refresh")&&N()}
function oe(){return null!=le}
function pe(){return le?le.invoke():null}
;z();var qe=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function re(){if(!qe)return null;var a=qe();return"open"in a?a:null}
function se(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function te(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Ga(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var ue={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ve=!1;
function we(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=qd(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?qd(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in ue){if((e=d=R(ue[f]))&&!(e=c)){e=f;var g=R("CORS_HEADER_WHITELIST")||{},h=qd(J(a)[3]||null);e=h?(g=g[h])?0<=za(g,e):!1:!0}e&&(b[f]=d)}return b}
function xe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ye(a,b);var d=ze(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&V(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.C&&b.C.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.la&&0<b.timeout&&(f=U(function(){e||(e=!0,V(f),b.la.call(b.context||p))},b.timeout))}else Ae(a,b)}
function Ae(a,b){var c=b.format||"JSON";a=ye(a,b);var d=ze(a,b),e=!1,f,g=Be(a,function(a){if(!e){e=!0;f&&V(f);var d=se(a),g=null;if(d||400<=a.status&&500>a.status)g=Ce(c,a,b.Xa);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.C&&b.C.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ea&&b.ea.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.K&&0<b.timeout&&(f=U(function(){e||(e=!0,g.abort(),V(f),b.K.call(b.context||p,g))},b.timeout))}
function ye(a,b){b.za&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.Ua;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=te(f[1]||"");for(var g in d)f[g]=d[g];a=td(c,f)+e}return a}
function ze(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=Md("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.Ya||qd(J(a)[3]||null)&&!b.withCredentials&&qd(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=te(e),db(e,f),e=b.ma&&"JSON"==b.ma?JSON.stringify(e):sd(e));f=e||f&&!$a(f);!ve&&f&&"POST"!=b.method&&(ve=!0,S(Error("AJAX request with postData should use POST")));
return e}
function Ce(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?De(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ee(a)})}c&&Fe(d);
return d}
function Fe(a){if(ua(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Bb(a[b]);a[c]=d}else Fe(a[b])}}
function De(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ee(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ge(a,b){b.method="POST";b.A||(b.A={});Ae(a,b)}
function Be(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Od(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=re();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=we(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var He={},Ie=0;function Je(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ta,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Kb("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)):e?Be(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Be(a,b,"GET","",d):Ke(a,b))}
function Ke(a,b){var c=new Image,d=""+Ie++;He[d]=c;c.onload=c.onerror=function(){b&&He[d]&&b();delete He[d]};
c.src=a}
;var Le={},Me=0;
function Ne(a,b,c,d,e,f){f=f||{};f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Me)){e=a.stacktrace;c=a.columnNumber;d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(P){h="Not available",g=!0}try{var l=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(P){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Le[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=e;h={Ua:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},A:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.A.stack=l);for(var m in f)h.A["client."+m]=f[m];if(m=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.A[u]=m[u];Ae("/error_204",h);Le[a.message]=!0;Me++}}}
;var Oe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Oe,void 0);function Pe(a){Kd(Oe,arguments)}
;function Qe(){}
function Re(a,b){return Se(a,1,b)}
;function Te(){}
n(Te,Qe);function Se(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function Ue(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):V(a)}}
Te.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Te.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
qa(Te);Te.getInstance();var Ve=[],We=!1;function Xe(){if("1"!=Xa(Nd(),"args","privembed")||!T("do_not_set_cookies_for_ads_on_youtube_nocookie")){var a=function(){We=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
ee("//static.doubleclick.net/instream/ad_status.js",a);Ve.push(Re(function(){We||"google_ad_status"in window||(ke("//static.doubleclick.net/instream/ad_status.js",a),O("DCLKSTAT",3))},5E3))}}
function Ye(){return parseInt(R("DCLKSTAT",0),10)}
;var Ze=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++Ze},void 0);var $e={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function af(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in $e||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.b=a.pageX;this.g=a.pageY}}
function bf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
af.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
af.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
af.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Za,void 0);var cf=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",cf,void 0);function df(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function ef(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=df(a,b,c,d);if(e)return e;e=++cf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new af(d);if(!Mb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new af(b);
b.currentTarget=a;return c.call(a,b)};
g=Od(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d];return e}
function ff(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Za){var b=Za[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[a]}}))}
;function gf(a){this.o=a;this.b=null;this.i=0;this.m=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.h=0;this.D=ef(window,"mousemove",x(this.F,this));a=x(this.w,this);ta(a)&&(a=Od(a));this.G=window.setInterval(a,25)}
A(gf,G);gf.prototype.F=function(a){q(a.b)||bf(a);var b=a.b;q(a.g)||bf(a);this.b=new Fb(b,a.g)};
gf.prototype.w=function(){if(this.b){var a=N();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.o();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
gf.prototype.l=function(){window.clearInterval(this.G);ff(this.D)};var hf={};function jf(){if(null==v("_lact",window)){var a=parseInt(R("LACT"),10);a=isFinite(a)?z()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&W();ef(document,"keydown",W);ef(document,"keyup",W);ef(document,"mousedown",W);ef(document,"mouseup",W);T("lact_local_listeners")?(ef(window,"resize",function(){kf("resize",200)}),ef(window,"scroll",function(){kf("scroll",200)}),new gf(function(){kf("mouse",100)})):(Xd("page-mouse",W),Xd("page-scroll",W),Xd("page-resize",W))}}
function kf(a,b){hf[a]||(hf[a]=!0,Re(function(){W();hf[a]=!1},b))}
function W(){null==v("_lact",window)&&jf();var a=z();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function lf(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;function mf(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
function nf(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=nf(a.b));return b}
var of=1;function pf(){if(!qf&&!rf||!window.JSON)return null;try{var a=qf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=rf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var rf,sf=new ld;rf=sf.isAvailable()?new hd(sf):null;var qf,tf=new md;qf=tf.isAvailable()?new hd(tf):null;function uf(){var a=R("ROOT_VE_TYPE",void 0);return a?new mf(void 0,a,void 0):null}
function vf(){var a=R("client-screen-nonce")||R("EVENT_ID");return a?a:null}
;function wf(a,b,c){Xb.set(""+a,b,c,"/","youtube.com",!1)}
;function xf(a){if(a){a=a.itct||a.ved;var b=v("yt.logging.screen.storeParentElement");a&&b&&b(new mf(a))}}
;function yf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=qd(J(window.location.href)[3]||null);f&&e.push(f);f=qd(J(d)[3]||null);if(0<=za(e,f)||!f&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(e=document.createElement("a"),Cb(e,d),d=e.href),d){f=J(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
vf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Sa(d).toString(36),e=b?sd(b):"",wf(d,e,h||5),xf(b))}else h="ST-"+Sa(d).toString(36),d=b?sd(b):"",wf(h,d,5),xf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=td(a,l)+m;a=a instanceof E?a:yb(a);c.href=wb(a)}return!0}
;t("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||oe,void 0);t("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||pe,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||Ye,void 0);t("yt.player.exports.navigate",v("yt.player.exports.navigate")||yf,void 0);t("yt.util.activity.init",v("yt.util.activity.init")||jf,void 0);t("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||lf,void 0);
t("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||W,void 0);var zf={log_event:"events",log_interaction:"interactions"},Af=Object.create(null);Af.log_event="GENERIC_EVENT_LOGGING";Af.log_interaction="INTERACTION_LOGGING";var Bf={},Cf={},Df=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",X,void 0);var Ef=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Ef,void 0);var Ff=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",Ff,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Gf(a,b){Cf[a.endpoint]=b;if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Ef[a.V.token]=d;c=Hf(a.endpoint,a.V.token)}else c=Hf(a.endpoint);c.push(a.payload);c.length>=(Number(T("web_logging_max_batch")||0)||20)?If():Jf()}
function If(){V(Df);if(!$a(X)){for(var a in X){var b=Bf[a];if(!b){var c=Cf[a];if(!c)continue;b=new c;Bf[a]=b}c=void 0;var d=a,e=b,f=zf[d],g=Ff[d]||{};Ff[d]=g;b=Math.round(N());for(c in X[d]){var h=e.b;h={client:{hl:h.Ca,gl:h.Ba,clientName:h.Aa,clientVersion:h.innertubeContextClientVersion}};R("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});h={context:h};h[f]=Hf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;h.requestTimeMs=b;
var l=Ef[c];if(l)a:{var m=h,u=c;if(l.videoId)var P="VIDEO";else if(l.playlistId)P="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:P}]}delete Ef[c];Kf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete X[a]}$a(X)||Jf()}}
function Jf(){V(Df);Df=U(If,R("LOGGING_BATCH_TIMEOUT",1E4))}
function Hf(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
;function Lf(a,b,c,d){var e=Mf,f={};f.eventTimeMs=Math.round(c||N());f[a]=b;f.context={lastActivityMs:String(c?-1:lf())};Gf({endpoint:"log_event",payload:f,V:d},e)}
;function Nf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function Mf(a){this.b=a||{innertubeApiKey:Md("INNERTUBE_API_KEY"),innertubeApiVersion:Md("INNERTUBE_API_VERSION"),Aa:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Md("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ca:Md("INNERTUBE_CONTEXT_HL"),Ba:Md("INNERTUBE_CONTEXT_GL"),Da:Md("INNERTUBE_HOST_OVERRIDE")||""}}
function Kf(a,b,c){var d={};!R("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":R("VISITOR_DATA","")},method:"POST",A:c,ma:"JSON",K:function(){d.K()},
la:d.K,C:function(a,b){d.C&&d.C(b)},
ab:function(a){d.C&&d.C(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Za:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=Yb();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=R("SESSION_INDEX",0));var g="",h=a.b.Da;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);a=""+g+Nf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;T("use_fetch_for_op_xhr")?xe(a,e):Ge(a,e)}
;function Of(a,b,c){Pf({attachChild:{csn:a,parentVisualElement:nf(b),visualElements:[nf(c)]}})}
function Pf(a){var b=Mf;a.eventTimeMs=Math.round(N());a.lactMs=lf();Gf({endpoint:"log_interaction",payload:a},b)}
;function Qf(a){a=a||{};this.url=a.url||"";this.args=a.args||bb(Rf);this.assets=a.assets||{};this.attrs=a.attrs||bb(Sf);this.params=a.params||bb(Tf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Rf={enablejsapi:1},Sf={},Tf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Uf(a){var b=new Qf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ra(d)?bb(d):d}return b}
;function Vf(){G.call(this);this.b=[]}
n(Vf,G);Vf.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Wa)}G.prototype.l.call(this)};var Wf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Xf(a){a=a||"";if(window.spf){var b=a.match(Wf);spf.style.load(a,b?b[1]:"",void 0)}else Yf(a)}
function Yf(a){var b=Zf(a),c=document.getElementById(b),d=c&&Rd(c,"loaded");d||c&&!d||(c=$f(a,b,function(){Rd(c,"loaded")||(Pd(c),$d(b),U(y(ae,b),0))}))}
function $f(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Nb(a);Db(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Zf(a){var b=document.createElement("A");a=zb(a);Cb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Sa(b)}
;var ag=v("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",ag,void 0);var bg=0;function cg(a){ag[a]=ag[a]||{count:0};var b=ag[a];b.count++;b.time=N();bg||(bg=Se(dg,0,5E3));return 10<b.count?(11==b.count&&Ne(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function dg(){var a=N(),b;for(b in ag)6E4<a-ag[b].time&&delete ag[b];bg=0}
;function eg(a,b){this.version=a;this.args=b}
;function fg(a){this.topic=a}
fg.prototype.toString=function(){return this.topic};var gg=v("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.H;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsub2Pubsub2Instance",gg,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function hg(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function ig(){var a=R("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function jg(){var a=ig(),b;for(b in a)Ue(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function kg(a,b){eg.call(this,1,arguments)}
n(kg,eg);function lg(a,b){eg.call(this,1,arguments)}
n(lg,eg);var mg=new fg("aft-recorded"),ng=new fg("timing-sent");var og=z().toString();var pg={vc:!0},qg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},rg="ap c cver ei srt yt_fss yt_li ba plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),vg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),wg=!1;
function xg(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}b=yg();var c=N();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=ig();if(c=b[a])Ue(c),b[a]=0;zg()["tick_"+a]=void 0;N();T("csi_on_gel")?(b=Ag(),"_start"==a?cg("baseline_"+b)||Lf("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):cg("tick_"+a+"_"+b)||Lf("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=
Md("TIMING_ACTION"),a=yg(),v("ytglobal.timingready_")&&b&&a._start&&(b=Bg()))){T("tighter_critical_section")&&!wg&&(hg(mg,new kg(Math.round(b-a._start),void 0)),wg=!0);b=!0;c=R("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Cg()}}
function Dg(){var a=Eg().info.yt_lt="hot_bg";zg().info_yt_lt=a;if(T("csi_on_gel"))if("yt_lt"in qg){var b={},c=qg.yt_lt;0<=za(vg,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Ag();c=Object.keys(b).join("");cg("info_"+c+"_"+a)||(b.clientActionNonce=a,Lf("latencyActionInfo",b,void 0,void 0))}else 0<=za(rg,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function Bg(){var a=yg();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Cg(){jg();if(!T("csi_on_gel")){var a=yg(),b=Eg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in pg){var f=Ca(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=v("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Fg(f,e),Gg(),Hg(),Ig(!1,void 0),R("TIMING_ACTION")&&O("PREVIOUS_ACTION",R("TIMING_ACTION")),O("TIMING_ACTION","")}else{var g=R("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:R("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+v("ytplayer.config.assets.js");(l=Y.getEntriesByName?Y.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=Bg();Jg()&&"youtube"==g&&(Dg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=N();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=v("ytdebug.logTiming"))&&a(f,b);Fg(f,e,void 0);hg(ng,new lg(b.aft+(h||0),void 0))}}}
var Hg=x(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||pa,Y);
function Fg(a,b,c){if(T("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Je(a,void 0,void 0,void 0,f)}catch(g){Je(a,void 0,void 0,void 0,f)}}else Je(a);Ig(!0,c)}
function Ag(){var a=Eg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=z();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(og)for(b=1,c=0;c<og.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^og.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Eg().nonce=a}return a}
function yg(){return Eg().tick}
function zg(){var a=Eg();"gel"in a||(a.gel={});return a.gel}
function Eg(){return v("ytcsi.data_")||Gg()}
function Gg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Ig(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Jg(){var a=yg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Eg().info.yt_pvis}
;function Kg(a,b){G.call(this);this.m=this.R=a;this.G=b;this.o=!1;this.f={};this.O=this.F=null;this.w=new I;mc(this,y(nc,this.w));this.i={};this.M=this.P=this.h=this.Y=this.b=null;this.L=!1;this.j=this.D=null;this.S={};this.qa=["onReady"];this.X=null;this.ga=NaN;this.N={};Lg(this);this.U("WATCH_LATER_VIDEO_ADDED",this.Fa.bind(this));this.U("WATCH_LATER_VIDEO_REMOVED",this.Ga.bind(this));this.U("onAdAnnounce",this.ta.bind(this));this.ra=new Vf(this);mc(this,y(nc,this.ra))}
n(Kg,G);k=Kg.prototype;
k.da=function(a){if(!this.g){a instanceof Qf||(a=new Qf(a));this.Y=a;this.b=Uf(a);this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.G,this.b.attrs.id=this.G);this.m.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.P||(this.P=Mg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.m.style.width=Qb(Number(a)||a);if(a=this.b.attrs.height)this.m.style.height=Qb(Number(a)||
a);Ng(this);this.o&&Og(this)}};
k.wa=function(){return this.Y};
function Og(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Pg(a){var b=!0,c=Qg(a);c&&a.b&&(a=a.b,b=Rd(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function Ng(a){if(!a.g&&!a.L){var b=Pg(a);if(b&&"html5"==(Qg(a)?"html5":null))a.M="html5",a.o||Rg(a);else if(Sg(a),a.M="html5",b&&a.j)a.R.appendChild(a.j),Rg(a);else{a.b.loaded=!0;var c=!1;a.D=function(){c=!0;var b=Uf(a.b);v("yt.player.Application.create")(a.R,b);Rg(a)};
a.L=!0;b?a.D():(ee(a.b.assets.js,a.D),Xf(a.b.assets.css),Tg(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Qg(a){var b=Hb(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function Rg(a){if(!a.g){var b=Qg(a),c=!1;try{b&&b.getApiInterface&&b.getApiInterface()&&(c=!0)}catch(d){}c?(a.L=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||Ug(a)):a.ga=U(function(){Rg(a)},50)}}
function Ug(a){Lg(a);a.o=!0;var b=Qg(a);b.addEventListener&&(a.F=Vg(a,b,"addEventListener"));b.removeEventListener&&(a.O=Vg(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=Vg(a,b,e))}for(var f in a.i)a.F(f,a.i[f]);Og(a);a.P&&a.P(a.f);a.w.I("onReady",a.f)}
function Vg(a,b,c){var d=b[c];return function(){try{return a.X=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.X=e,S(e,"WARNING",void 0,void 0,void 0))}}}
function Lg(a){a.o=!1;if(a.O)for(var b in a.i)a.O(b,a.i[b]);for(var c in a.N)V(parseInt(c,10));a.N={};a.F=null;a.O=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.U.bind(a);a.f.removeEventListener=a.Ma.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.xa.bind(a);a.f.getPlayerType=a.ya.bind(a);a.f.getCurrentVideoConfig=a.wa.bind(a);a.f.loadNewVideoConfig=a.da.bind(a);a.f.isReady=a.Ea.bind(a)}
k.Ea=function(){return this.o};
k.U=function(a,b){var c=this,d=Mg(this,b);if(d){if(!(0<=za(this.qa,a)||this.i[a])){var e=Wg(this,a);this.F&&this.F(a,e)}this.w.subscribe(a,d);"onReady"==a&&this.o&&U(function(){d(c.f)},0)}};
k.Ma=function(a,b){if(!this.g){var c=Mg(this,b);c&&ad(this.w,a,c)}};
function Mg(a,b){var c=b;if("string"==typeof b){if(a.S[b])return a.S[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.S[b]=c}return c?c:null}
function Wg(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.w.I(b,c);else{var f=U(function(){if(!a.g){a.w.I(b,c);var d=a.N,e=String(f);e in d&&delete d[e]}},0);
ab(a.N,String(f))}};
return c}
k.ta=function(a){$d("a11y-announce",a)};
k.Fa=function(a){$d("WATCH_LATER_VIDEO_ADDED",a)};
k.Ga=function(a){$d("WATCH_LATER_VIDEO_REMOVED",a)};
k.ya=function(){return this.M||(Qg(this)?"html5":null)};
k.xa=function(){return this.X};
function Sg(a){xg("dcp");a.cancel();Lg(a);a.M=null;a.b&&(a.b.loaded=!1);var b=Qg(a);b&&(Pg(a)||!Tg(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.R;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.D&&ke(this.b.assets.js,this.D);V(this.ga);this.L=!1};
k.l=function(){Sg(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.S=null;for(var a in this.i)p[this.i[a]]=null;this.Y=this.b=this.f=null;delete this.R;delete this.m;G.prototype.l.call(this)};
function Tg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Xg={},Yg="player_uid_"+(1E9*Math.random()>>>0);function Zg(a){var b="player";b=r(b)?Hb(b):b;var c=Yg+"_"+(b[va]||(b[va]=++wa)),d=Xg[c];if(d)return d.da(a),d.f;d=new Kg(b,c);Xg[c]=d;$d("player-added",d.f);mc(d,y($g,d));U(function(){d.da(a)},0);
return d.f}
function $g(a){delete Xg[a.G]}
;function ah(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function bh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ch(a)}
function ch(a,b,c){if(ua(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function dh(a,b,c,d){if(ua(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function eh(a){var b=a.video_id||a.videoId;if(r(b)){var c=pf()||{},d=pf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=rf;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function fh(a){G.call(this);this.b=a;this.b.subscribe("command",this.na,this);this.f={};this.i=!1}
A(fh,G);k=fh.prototype;k.start=function(){this.i||this.g||(this.i=!0,gh(this.b,"RECEIVING"))};
k.na=function(a,b,c){if(this.i&&!this.g){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Oa,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&hh(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=ih(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=jh(a,c))&&this.i&&!this.g&&gh(this.b,a,c))}}};
k.Oa=function(a,b){this.i&&!this.g&&gh(this.b,a,this.aa(a,b))};
k.aa=function(a,b){if(null!=b)return{value:b}};
function hh(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.l=function(){var a=this.b;a.g||ad(a.b,"command",this.na,this);this.b=null;for(var b in this.f)hh(this,b);fh.u.l.call(this)};function kh(a,b){fh.call(this,b);this.h=a;this.start()}
A(kh,fh);kh.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
kh.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function ih(a,b){switch(a){case "loadVideoById":return b=ch(b),eh(b),[b];case "cueVideoById":return b=ch(b),eh(b),[b];case "loadVideoByPlayerVars":return eh(b),[b];case "cueVideoByPlayerVars":return eh(b),[b];case "loadPlaylist":return b=dh(b),eh(b),[b];case "cuePlaylist":return b=dh(b),eh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function jh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
kh.prototype.aa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return kh.u.aa.call(this,a,b)};
kh.prototype.l=function(){kh.u.l.call(this);delete this.h};function lh(a,b,c,d){G.call(this);this.f=b||null;this.o="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=x(this.w,this);window.addEventListener("message",this.m)}
n(lh,G);lh.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=za(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
lh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=xc(a);c.postMessage(d,this.o)}catch(e){S(e,"WARNING")}}};
lh.prototype.l=function(){window.removeEventListener("message",this.m);G.prototype.l.call(this)};function mh(a,b,c){lh.call(this,a,b,c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(mh,lh);function nh(){var a=this.g=new mh(!!R("WIDGET_ID_ENFORCE")),b=x(this.Ia,this);a.i=b;a.j=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=nh.prototype;k.Ia=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,oh(this,a)),this.i[a]=!0)):this.pa(a,b,c)};
k.pa=function(){};
function oh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.va=function(){this.j=!0;this.sendMessage("initialDelivery",this.ba());this.sendMessage("onReady");C(this.h,this.oa,this);this.h=[]};
k.ba=function(){return null};
function ph(a,b){a.sendMessage("infoDelivery",b)}
k.oa=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.oa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.g=null};function qh(a){nh.call(this);this.b=a;this.f=[];this.addEventListener("onReady",x(this.Ha,this));this.addEventListener("onVideoProgress",x(this.Sa,this));this.addEventListener("onVolumeChange",x(this.Ta,this));this.addEventListener("onApiChange",x(this.Na,this));this.addEventListener("onPlaybackQualityChange",x(this.Pa,this));this.addEventListener("onPlaybackRateChange",x(this.Qa,this));this.addEventListener("onStateChange",x(this.Ra,this))}
A(qh,nh);k=qh.prototype;k.pa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&ah(a)){var d=b;if(ua(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ch.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=bh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=dh.apply(window,d)}d=e}eh(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);ah(a)&&ph(this,this.ba())}};
k.Ha=function(){var a=x(this.va,this);this.g.b=a};
k.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ba=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ea(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Ra=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());ph(this,a)};
k.Pa=function(a){ph(this,{playbackQuality:a})};
k.Qa=function(a){ph(this,{playbackRate:a})};
k.Na=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Ta=function(){ph(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Sa=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());ph(this,a)};
k.dispose=function(){qh.u.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function rh(){G.call(this);this.b=new I;mc(this,y(nc,this.b))}
A(rh,G);rh.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
rh.prototype.H=function(a){return this.g?!1:this.b.H(a)};
rh.prototype.j=function(a,b){this.g||this.b.I.apply(this.b,arguments)};function sh(a,b,c){rh.call(this);this.f=a;this.h=b;this.i=c}
A(sh,rh);function gh(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(xc(a),d.h))}}
sh.prototype.l=function(){this.h=this.f=null;sh.u.l.call(this)};function th(a,b,c){G.call(this);this.b=a;this.h=c;this.i=ef(window,"message",x(this.j,this));this.f=new sh(this,a,b);mc(this,y(nc,this.f))}
A(th,G);th.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.g||c.j("command",b.command,b.data,a.origin))}};
th.prototype.l=function(){ff(this.i);this.b=null;th.u.l.call(this)};function uh(){var a=vh()?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=bb(wh);return new H(function(c,d){b.C=function(a){se(a)?c(a):d(new xh("Request failed, status="+a.status,"net.badstatus",a))};
b.onError=function(a){d(new xh("Unknown request error","net.unknown",a))};
b.K=function(a){d(new xh("Request timed out","net.timeout",a))};
Ae(a,b)})}
function xh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(xh,B);function yh(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
yh.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),Ec(a)?a:zh(a)):2===this.g&&b?(a=b.call(c,this.b),Ec(a)?a:Ah(a)):this};
yh.prototype.getValue=function(){return this.b};
Dc(yh);function Ah(a){var b=new yh;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function zh(a){var b=new yh;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function Bh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ch;this.isTimeout=a instanceof xh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Sc}
n(Bh,B);Bh.prototype.name="BiscottiError";function Ch(){B.call(this,"Biscotti ID is missing from server")}
n(Ch,B);Ch.prototype.name="BiscottiMissingError";var wh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Dh=null;function Eh(){if("1"===Xa(Nd(),"args","privembed"))return Jc(Error("Biscotti ID is not available in private embed mode"));Dh||(Dh=Rc(uh().then(Fh),function(a){return Gh(2,a)}));
return Dh}
function vh(){var a;(a=!!Xa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie"))||(a=!!R("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1));return a||!!T("html5_serverside_pagead_id_sets_cookie")}
function Fh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ch;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ch;a=a.id;Hh(a);Dh=zh(a);Ih(18E5,2);return a}
function Gh(a,b){var c=new Bh(b);Hh("");Dh=Ah(c);0<a&&Ih(12E4,a-1);throw c;}
function Ih(a,b){U(function(){Rc(uh().then(Fh,function(a){return Gh(b,a)}),pa)},a)}
function Hh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function Jh(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Eh()}catch(b){return Jc(b)}}
;function Kh(a){B.apply(this,arguments)}
n(Kh,B);Kh.prototype.name="MutsuError";function Lh(){var a=new Kh("ID is missing"),b=new Kh("Timeout"),c=null,d=!1;Jd(function(){c=Hd();d=!0});
if(d)return c?zh(c):Ah(a);var e=new H(function(b,c){Jd(function(){var d=Hd();d?b(d):c(a)})}),f=od().then(function(){return Jc(b)});
return Pc(Mc([e,f]),function(){return f.cancel()})}
;function Mh(a){if("1"!==Xa(Nd(),"args","privembed")){a&&!v("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Eh,void 0);try{var b=Jh();if(T("enable_mutsu")){v("yt.ads.mutsu.getId_")||t("yt.ads.mutsu.getId_",Lh,void 0);try{var c=v("yt.ads.mutsu.getId_")()}catch(d){c=Jc(d)}}else c=Jc(new Kh("unimplemented"));Nc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Z||a.Z){b=b.value;a=a.value;var c={};c.dt=Rb;c.flash=yd||"0";a:{try{var d=window.top.location.href}catch(Oa){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?F:h;try{var l=h.history.length}catch(Oa){l=0}d.u_his=l;d.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(d.u_h=F.screen.height,d.u_w=F.screen.width,d.u_ah=F.screen.availHeight,d.u_aw=F.screen.availWidth,d.u_cd=F.screen.colorDepth);F.navigator&&F.navigator.plugins&&(d.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(d.u_nmime=
F.navigator.mimeTypes.length);d.ca_type=xd?"flash":"image";if(T("enable_server_side_search_pyv")||T("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var u=l.screenY}catch(Oa){}try{var P=l.outerWidth;var sg=l.outerHeight}catch(Oa){}try{var tg=l.innerWidth;var ug=l.innerHeight}catch(Oa){}m=[l.screenLeft,l.screenTop,m,u,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,P,sg,tg,ug];u=window.top;try{var Q=(u||window).document,Na="CSS1Compat"==Q.compatMode?Q.documentElement:
Q.body;var Aa=(new Gb(Na.clientWidth,Na.clientHeight)).round()}catch(Oa){Aa=new Gb(-12245933,-12245933)}Q={};Na=0;p.SVGElement&&p.document.createElementNS&&(Na|=1);Q.bc=Na;Q.bih=Aa.height;Q.biw=Aa.width;Q.brdim=m.join();Aa=(Q.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Pb.webkitVisibilityState||Pb.mozVisibilityState||Pb.visibilityState||""]||0,Q.wgl=!!F.WebGLRenderingContext,Q);for(var Ad in Aa)d[Ad]=Aa[Ad]}void 0!==b&&(d.bid=b);void 0!==a&&(d.mutsuid=a);d.bsq=Nh++;Ge("//www.youtube.com/ad_data_204",
{za:!1,A:d})}});
U(Mh,18E5)}catch(d){S(d)}}}
var Nh=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Oh(){this.b=R("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Xb.get(""+this.b,void 0)){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=Oh.prototype;k.get=function(a,b){Ph(a);Qh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){Ph(a);Qh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){Ph(a);Qh(a);delete Z[a]};
k.save=function(){var a=this.b,b=[],c;for(c in Z)b.push(c+"="+encodeURIComponent(String(Z[c])));wf(a,b.join("&"),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
function Qh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ph(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Rh(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
qa(Oh);var Sh=null,Th=null,Uh=null,Vh={};function Wh(a){Lf(a.payload_name,a.payload,void 0,void 0)}
function Xh(a){var b=a.id;a=a.ve_type;var c=of++;a=new mf(void 0,a,c,void 0,void 0);Vh[b]=a;b=vf();c=uf();b&&c&&Of(b,c,a)}
function Yh(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(O("client-screen-nonce",b),O("ROOT_VE_TYPE",a),a=uf()))for(var c in Vh){var d=Vh[c];d&&Of(b,a,d)}}
function Zh(a){Vh[a.id]=new mf(a.tracking_params)}
function $h(a){var b=vf();a=Vh[a.id];b&&a&&(T("interaction_click_on_gel_web")?Lf("visualElementGestured",{csn:b,ve:nf(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):Pf({click:{csn:b,visualElement:nf(a)}}))}
function ai(a){a=a.ids;var b=vf();if(b)for(var c=0;c<a.length;c++){var d=Vh[a[c]];d&&Lf("visualElementShown",{csn:b,ve:nf(d),eventType:1})}}
function bi(){var a=Sh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",O,void 0);t("yt.config.set",O,void 0);t("yt.setMsg",Pe,void 0);t("yt.msgs.set",Pe,void 0);t("yt.logging.errors.log",Ne,void 0);
t("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);Mh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&eh(a.args);Sh=a=Zg(a);a.addEventListener("onScreenChanged",Yh);a.addEventListener("onLogClientVeCreated",Xh);a.addEventListener("onLogServerVeCreated",Zh);a.addEventListener("onLogToGel",Wh);
a.addEventListener("onLogVeClicked",$h);a.addEventListener("onLogVesShown",ai);a.addEventListener("onReady",bi);b=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Uh=new qh(a):R("ENABLE_POST_API")&&r(b)&&r(c)&&(Th=new th(window.parent,b,c),Uh=new kh(a,Th.f));R("BG_P")&&(R("BG_I")||R("BG_IU"))&&me();Xe()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Je(a+"mac_204?action_fcts=1");return!0},void 0);
var ci=Od(function(){xg("ol");var a=Oh.getInstance(),b=!!((Rh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&qc(document.body,"exp-invert-logo"))if(c&&!qc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):qc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&qc(document.body,"inverted-hdpi")&&rc();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Rh(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),di=Od(function(){var a=Sh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&(le=null);a=0;for(var b=Ve.length;a<b;a++)Ue(Ve[a]);Ve.length=0;je("//static.doubleclick.net/instream/ad_status.js");We=!1;O("DCLKSTAT",0);oc(Uh,Th);if(a=Sh)a.removeEventListener("onScreenChanged",Yh),a.removeEventListener("onLogClientVeCreated",Xh),a.removeEventListener("onLogServerVeCreated",Zh),a.removeEventListener("onLogToGel",Wh),a.removeEventListener("onLogVeClicked",$h),a.removeEventListener("onLogVesShown",ai),a.removeEventListener("onReady",
bi),a.destroy();Vh={}});
window.addEventListener?(window.addEventListener("load",ci),window.addEventListener("unload",di)):window.attachEvent&&(window.attachEvent("onload",ci),window.attachEvent("onunload",di));}).call(this);
