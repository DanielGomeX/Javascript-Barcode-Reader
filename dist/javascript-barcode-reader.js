parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({3:[function(require,module,exports) {
var r={3211:"0",2221:"1",2122:"2",1411:"3",1132:"4",1231:"5",1114:"6",1312:"7",1213:"8",3112:"9"};module.exports=function(e){for(var n="",o=~~((e[1]+e[2]+e[3])/3),t=1;t<e.length;t+=1){var a=void 0;a=n.length<6?e.slice(4*t,4*t+4):e.slice(4*t+5,4*t+9);var i=[Math.round(a[0]/o),Math.round(a[1]/o),Math.round(a[2]/o),Math.round(a[3]/o)],u=r[i.join("")]||r[i.reverse().join("")];if(!u)return u;if(12===(n+=u).length)break}return n};
},{}],4:[function(require,module,exports) {
var r={3211:"0",2221:"1",2122:"2",1411:"3",1132:"4",1231:"5",1114:"6",1312:"7",1213:"8",3112:"9"};module.exports=function(e){for(var n="",o=~~((e[1]+e[2]+e[3])/3),t=1;t<e.length;t+=1){var a=void 0;a=n.length<4?e.slice(4*t,4*t+4):e.slice(4*t+5,4*t+9);var i=[Math.round(a[0]/o),Math.round(a[1]/o),Math.round(a[2]/o),Math.round(a[3]/o)],u=r[i.join("")]||r[i.reverse().join("")];if(!u)return u;if(8===(n+=u).length)break}return n};
},{}],5:[function(require,module,exports) {
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n={10001:"1","01001":"2",11000:"3","00101":"4",10100:"5","01100":"6","00011":"7",10010:"8","01010":"9","00110":"10"},r={"01000":"0","00100":"10","00010":"20",10000:"30"},o=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-",".","␣","*"];module.exports=function(e){e.push(0);for(var u="",f=function(t){var f=e.slice(t,t+10),i=Math.ceil(f.reduce(function(t,n){return t+n},0)/f.length),c=f.map(function(t){return t>i?1:0}),l=c.filter(function(t,n){return n%2==0}).join(""),p=c.filter(function(t,n){return n%2!=0}).join(""),y=o[parseInt(n[l],10)-1+parseInt(r[p],10)];if(!y)return{v:y};u+=y},i=1;i<e.length;i+=10){var c=f(i);if("object"===(void 0===c?"undefined":t(c)))return c.v}return u.replace(/\*/g,"")};
},{}],6:[function(require,module,exports) {
var n={10001:"1","01001":"2",11000:"3","00101":"4",10100:"5","01100":"6","00011":"7",10010:"8","01010":"9","00110":"10"},r={"01000":"0","00100":"10","00010":"20",10000:"30"},t=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-",".","␣","*"];module.exports=function(e){e.push(3);for(var u="",i=function(i){var o=e.slice(i,i+10),f=Math.round(o.reduce(function(n,r){return n+r},0)/o.length),c=o.map(function(n){return n>f?1:0}),a=c.filter(function(n,r){return r%2==0}).join(""),l=c.filter(function(n,r){return r%2!=0}).join("");u+=t[parseInt(n[a],10)-1+parseInt(r[l],10)]},o=1;o<e.length;o+=10)i(o);return u.substring(1,u.length-1)};
},{}],1:[function(require,module,exports) {
var e=require("./ean-13"),a=require("./ean-8"),r=require("./code-39"),t=require("./code-93"),o={"code-93":t,"code-39":r,"ean-13":e,"ean-8":a},i=function(e,a){var r=void 0;"string"==typeof e&&(e=document.getElementById(e));var t=e.tagName;if("IMG"===t){var i=document.createElement("canvas");i.width=e.naturalWidth,i.height=e.naturalHeight;var n=i.getContext("2d");n.drawImage(e,0,0),r=n.getImageData(0,0,e.naturalWidth,e.naturalHeight)}else if("CANVAS"===t)r=e.getContext("2d").getImageData(0,0,e.naturalWidth,e.naturalHeight);else{if(!e.data)throw new Error("Invalid image source specified!");r=e}var d=r,l=d.data,u=d.width,v=d.height;e=null,r=null;for(var h=[1,9,2,8,3,7,4,6,5],g=h.length,f=v/(g+1);g-=1;){for(var c=4*u*Math.floor(f*h[g]),m=4*u*Math.floor(f*h[g])+8*u,s=l.slice(c,m),p=[],I=0,w=0,q=0;q<2;q+=1)for(var x=0;x<u;x+=1){var C=4*(q*u+x),E=(3*s[C]+4*s[C+1]+2*s[C+2])/9,H=p[x];s[C]=E,s[C+1]=E,s[C+2]=E,p[x]=E+(void 0===H?0:H)}for(var M=0;M<u;M+=1){p[M]/=2;var W=p[M];W<I&&(I=W),W>w&&(w=W)}for(var y=I+(w-I)/2,A=[],B=0;B<u;B+=1){for(var D=0,N=0;N<2;N+=1)s[4*(N*u+B)]>y&&(D+=1);A.push(D>1)}for(var b=A[0],j=1,G=[],R=0;R<u;R+=1)A[R]===b?j+=1:(G.push(j),j=1,b=A[R]);var S=o[a.barcode](G);if(S)return S}return null};module&&module.exports?module.exports=i:root.javascriptBarcodeReader=i;
},{"./ean-13":3,"./ean-8":4,"./code-39":5,"./code-93":6}]},{},[1], null)
//# sourceMappingURL=/javascript-barcode-reader.map