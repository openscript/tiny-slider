var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false","null"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t){return localStorage.setItem(e,t),t}function i(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function a(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function r(e,t){return Math.atan2(e,t)*(180/Math.PI)}function o(e,t){return Math.abs(90-Math.abs(e))>=90-t?"horizontal":Math.abs(90-Math.abs(e))<=t&&"vertical"}function s(e,t){return e.hasAttribute(t)}function l(e,t){return e.getAttribute(t)}function c(e){return void 0!==e.item}function u(e,t){if(e=c(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function d(e,t){e=c(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function f(e){var t=e.cloneNode(!0);e.parentNode.insertBefore(t,e),e.remove(),e=null}function h(e){s(e,"hidden")||u(e,{hidden:""})}function v(e){s(e,"hidden")&&d(e,"hidden")}function p(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function m(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++)if(prop=e[n],void 0!==t.style[prop])return prop;return!1}function y(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function g(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&N;e.addEventListener(n,t[n],i)}}function b(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&N;e.removeEventListener(n,t[n],i)}}function x(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function T(e,t,n,i,a,r,o){function s(){r-=l,u+=d,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var e,t,n,i=window,a=document,r=Object,o="length",s="item contains add remove toggle toString toLocaleString".split(" "),l=s[2],c=s[3],u=s[4],d="prototype",f="defineProperty"in r||"__defineGetter__"in r[d]||null,h=function(e,t,n,i){r.defineProperty?r.defineProperty(e,t,{configurable:!1===f||!!i,get:n}):e.__defineGetter__(t,n)},v=function(e,t){var n=this,i=[],a={},d=0,f=0,v=function(){if(d>=f)for(;f<d;++f)!function(e){h(n,e,function(){return p(),i[e]},!1)}(f)},p=function(){var n,r,s=arguments,l=/\s+/;if(s[o])for(r=0;r<s[o];++r)if(l.test(s[r]))throw n=new SyntaxError('String "'+s[r]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+e[t]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},r=0;r<i[o];++r)a[i[r]]=!0;d=i[o],v()};return p(),h(n,o,function(){return p(),d}),n[s[6]]=n[s[5]]=function(){return p(),i.join(" ")},n.item=function(e){return p(),i[e]},n.contains=function(e){return p(),!!a[e]},n[l]=function(){p.apply(n,r=arguments);for(var r,s,l=0,c=r[o];l<c;++l)s=r[l],a[s]||(i.push(s),a[s]=!0);d!==i[o]&&(d=i[o]>>>0,e[t]=i.join(" "),v())},n[c]=function(){p.apply(n,r=arguments);for(var r,s={},l=0,c=[];l<r[o];++l)s[r[l]]=!0,delete a[r[l]];for(l=0;l<i[o];++l)s[i[l]]||c.push(i[l]);i=c,d=c[o]>>>0,e[t]=i.join(" "),v()},n[u]=function(e,t){return p.apply(n,[e]),void 0!==t?t?(n[l](e),!0):(n[c](e),!1):a[e]?(n[c](e),!1):(n[l](e),!0)},function(e,t){if(t)for(var n=0;n<7;++n)t(e,s[n],{enumerable:!1})}(n,r.defineProperty),n},p=function(e,t,n){h(e[d],t,function(){var e,i=this,r="__defineGetter__defineProperty"+t;if(i[r])return e;if(i[r]=!0,!1===f){for(var s,l=p.mirror=p.mirror||a.createElement("div"),c=l.childNodes,u=c[o],d=0;d<u;++d)if(c[d]._R===i){s=c[d];break}s||(s=l.appendChild(a.createElement("div"))),e=v.call(s,i,n)}else e=new v(i,n);return h(i,t,function(){return e}),delete i[r],e},!0)};if(i.DOMTokenList)e=a.createElement("div").classList,d=i.DOMTokenList[d],e[l].apply(e,s),2>e[o]&&(t=d[l],n=d[c],d[l]=function(){for(var e=0,n=arguments;e<n[o];++e)t.call(this,n[e])},d[c]=function(){for(var e=0,t=arguments;e<t[o];++e)n.call(this,t[e])}),e[u]("List",!1)&&(d[u]=function(e,t){var n=this;return n[(t=void 0===t?!n.contains(e):t)?l:c](e),!!t});else{if(f)try{h({},"support")}catch(e){f=!1}v.polyfill=!0,i.DOMTokenList=v,p(i.Element,"classList","className"),p(i.HTMLLinkElement,"relList","rel"),p(i.HTMLAnchorElement,"relList","rel"),p(i.HTMLAreaElement,"relList","rel")}}();var E=function(){var e=document.styleSheets[0];return"insertRule"in e?function(e,t,n,i){e.insertRule(t+"{"+n+"}",i)}:"addRule"in e?function(e,t,n,i){e.addRule(t,n,i)}:void 0}(),C=function(){return document.styleSheets[0].cssRules?function(e){return e.cssRules.length}:function(e){return e.rules.length}}(),w=!1;try{var D=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,D)}catch(e){}var N=!!w&&{passive:!0},L=navigator.userAgent,S=localStorage;S.tnsApp?S.tnsApp!==L&&(S.tnsApp=L,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(e){S.removeItem(e)})):S.tnsApp=L;var M=document,k=window,O={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},A=t(S.tnsCalc||n("tnsCalc",function(){var e=document,t=e.body,n=e.createElement("div"),i=!1;t.appendChild(n);try{for(var a,r=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],o=0;o<3;o++)if(a=r[o],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(e){}return t.removeChild(n),i}())),P=t(S.tnsSubpixel||n("tnsSubpixel",function(){var e,t=document,n=t.body,i=t.createElement("div"),a=t.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",e=a.cloneNode(!0),i.appendChild(a),i.appendChild(e),n.appendChild(i);var r=a.offsetTop!==e.offsetTop;return n.removeChild(i),r}())),W=t(S.tnsCSSMQ||n("tnsCSSMQ",function(){var e=document,t=e.body,n=e.createElement("div");n.className="tns-mq-test",t.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return t.removeChild(n),"absolute"===i}())),I=t(S.tnsTf||n("tnsTf",m(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]))),H=t(S.tnsTsDu||n("tnsTsDu",m(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]))),R=t(S.tnsTsDe||n("tnsTsDe",m(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]))),z=t(S.tnsAnDu||n("tnsAnDu",m(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]))),B=t(S.tnsAnDe||n("tnsAnDe",m(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]))),j=t(S.tnsTsEn||n("tnsTsEn",y(H,"Transition"))),G=t(S.tnsAnEn||n("tnsAnEn",y(z,"Animation")));return W||(P=!1),function(t){function n(e){var n=t[e];return!n&&et&&Ze.indexOf(e)>=0&&et.forEach(function(t){$e[t][e]&&(n=!0)}),n}function c(e,n){n=n?n:Je;var i;if("items"===e&&c("fixedWidth"))i=Math.floor(n/c("fixedWidth"));else if("slideBy"!==e||ze)if("edgePadding"!==e||ze)if("autoHeight"!==e||ze&&"outer"!==ct){if(i=t[e],et&&Ze.indexOf(e)>=0)for(var a=0,r=et.length;a<r;a++){var o=et[a];if(!(n>=o))break;e in $e[o]&&(i=$e[o][e])}"items"===e&&(i=Math.max(1,Math.min(Qe,i))),"slideBy"===e&&"page"===i&&(i=st)}else i=!0;else i=!1;else i=st;return i}function m(e){return A?A+"("+100*e+"% / "+Et+")":100*e/Et+"%"}function y(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(Je%(n+t)+t)/2+"px":Fe?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r=Fe?"right":"bottom";i="margin-"+r+": -"+t+"px;"}return i}function w(e,t,n){n=Math.min(Qe,n);return e?(e+Number(t))*Et+"px":A?A+"("+100*Et+"% / "+n+")":100*Et/n+"%"}function D(e,t,n){n=Math.min(Qe,n);var i="";if(Fe){if(i="width:",e)i+=e+Number(t)+"px";else{var a=ze?Et:Math.min(Qe,n);i+=A?A+"(100% / "+a+")":100/a+"%"}i+=_t+";"}return i}function N(e){var t="";if(e!==!1){t=(Fe?"padding-":"margin-")+(Fe?"right":"bottom")+": "+e+"px;"}return t}function L(e){clearTimeout(rt),rt=setTimeout(function(){Je!==Ue.clientWidth&&(S(),"outer"===ct&&It.emit("outerResized",Pe(e)))},100)}function S(){var e=tt,n=St,i=st;if(Je=Ue.clientWidth,qe=Ve.clientWidth,et&&(tt=_()),e!==tt){var a=tt>0?$e[et[tt-1]]:t,r=ht,o=yt,s=ft,l=dt,u=ut,d=Gt;if(Gt=Qe<=st,st=a.items||c("items"),ht=!Gt&&(a.arrowKeys||c("arrowKeys")),lt=c("slideBy"),vt=a.speed||c("speed"),yt=c("autoHeight"),ft=a.fixedWidth||c("fixedWidth"),dt=a.edgePadding||c("edgePadding"),ut=a.gutter||c("gutter"),Gt!==d&&Gt&&(St=ze?0:Tt),ht!==r&&(ht?g(M,Ut):b(M,Ut)),ft!==s&&ne(),yt!==o&&(yt||(Ve.style.height="")),Kt){var f=tn,p=nn;tn=!Gt&&(a.controls||c("controls")),nn=a.controlsText||c("controlsText"),tn!==f&&(tn?v(an):h(an)),nn!==p&&(Zt.innerHTML=nn[0],en.innerHTML=nn[1])}if(Yt){var m=on;on=!Gt&&(a.nav||c("nav")),on!==m&&(on?(v(sn),Ae()):h(sn))}if(Jt){var x=Sn;Sn=!Gt&&(a.touch||c("touch")),Sn!==x&&ze&&(Sn?g(Xe,Vt):b(Xe,Vt))}if($t){var T=On;On=!Gt&&(a.mouseDrag||c("mouseDrag")),On!==T&&ze&&(On?g(Xe,Xt):b(Xe,Xt))}if(Qt){var L=vn,S=gn,k=Cn,O=yn;if(Gt?vn=gn=Cn=!1:(vn=a.autoplay||c("autoplay"),vn?(gn=a.autoplayHoverPause||c("autoplayHoverPause"),Cn=a.autoplayResetOnVisibility||c("autoplayResetOnVisibility")):gn=Cn=!1),yn=a.autoplayText||c("autoplayText"),pn=a.autoplayTimeout||c("autoplayTimeout"),vn!==L&&(vn?(v(bn),xn||he()):(h(bn),xn&&ve())),gn!==S&&(gn?g(Xe,qt):b(Xe,qt)),Cn!==k&&(Cn?g(M,Ft):b(M,Ft)),yn!==O){var A=vn?1:0,P=bn.innerHTML,I=P.length-O[A].length;P.substring(I)===O[A]&&(bn.innerHTML=P.substring(0,I)+yn[A])}}if(Wn(),!W){dt===l&&ut===u||(Ve.style.cssText=y(dt,ut,ft)),ze&&Fe&&(ft!==s||ut!==u||st!==i)&&(Xe.style.width=w(ft,ut,st));var H=D(ft,ut,st);ut!==u&&(H+=N(ut)),H.length>0&&(gt.removeRule(C(gt)-1),E(gt,"#"+jt+" .tns-item",H,C(gt))),ft||ae(0)}st!==i&&(At=Et-st-kt,U(),J(),Z(),Ae(),$(),St!==n&&(It.emit("indexChanged",Pe()),ae(0)),navigator.msMaxTouchPoints&&Q())}else c("fixedWidth")&&(st=c("items"));Fe||(Y(),ke(),ne()),ft&&dt&&(Ve.style.cssText=y(dt,ut,ft)),V()}function _(){return tt=0,et.forEach(function(e,t){Je>=e&&(tt=t+nt)}),tt}function q(){xn&&(ve(),Tn=!0)}function F(){!xn&&Tn&&(he(),Tn=!1)}function U(){if(bt){var e=St,t=St+st;for(dt&&(e-=1,t+=1);e<t;e++)[].forEach.call(Ye[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[j]=function(e){e.stopPropagation()},g(e,t),e.classList.contains("loaded")||(e.src=l(e,"data-src"),e.classList.add("loaded"))})}}function V(){if(yt){for(var e=[],t=St;t<St+st;t++)[].forEach.call(Ye[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?K():X(e)}}function X(e){e.forEach(function(t,n){p(t)&&e.splice(n,1)}),0===e.length?K():setTimeout(function(){X(e)},16)}function K(){for(var e,t=[],n=St;n<St+st;n++)t.push(Ye[n].offsetHeight);e=Math.max.apply(null,t),Ve.style.height!==e&&(H&&ee(vt),Ve.style.height=e+"px")}function Y(){at=[0];for(var e,t=Ye[0].getBoundingClientRect().top,n=1;n<Et;n++)e=Ye[n].getBoundingClientRect().top,at.push(e-t)}function Q(){Ue.style.msScrollSnapPointsX="snapInterval(0%, "+100/st+"%)"}function J(){for(var e=Et;e--;){var t=Ye[e];e>=St&&e<St+st?s(t,"tabindex")&&(u(t,{"aria-hidden":"false"}),d(t,["tabindex"])):s(t,"tabindex")||u(t,{"aria-hidden":"true",tabindex:"-1"})}}function $(){on&&(dn=un!==-1?un:(St-kt)%Qe,un=-1,dn!==fn&&(u(rn[fn],{tabindex:"-1","aria-selected":"false"}),u(rn[dn],{tabindex:"0","aria-selected":"true"}),fn=dn))}function Z(){tn&&!mt&&(St%Qe===Ot?(Zt.disabled||(Zt.disabled=!0),en.disabled&&(en.disabled=!1)):pt||St%Qe!==At?(Zt.disabled&&(Zt.disabled=!1),en.disabled&&(en.disabled=!1)):(Zt.disabled&&(Zt.disabled=!1),en.disabled||(en.disabled=!0)))}function ee(e,t){e=e?e/1e3+"s":"",t=t||Xe,t.style[H]=e,ze||(t.style[z]=e),Fe||(Ve.style[H]=e)}function te(){var e;if(Fe)if(ft)e=-(ft+Number(ut))*St+"px";else{var t=I?Et:st;e=100*-St/t+"%"}else e=-at[St]+"px";return e}function ne(e){e||(e=te()),Xe.style[Dt]=Nt+e+Lt}function ie(e,t,n,i){for(var a=e,r=e+st;a<r;a++){var o=Ye[a];i||(o.style.left=100*(a-St)/st+"%"),H&&ee(vt,o),Ge&&R&&(o.style[R]=o.style[B]=Ge*(a-e)/1e3+"s"),o.classList.remove(t),o.classList.add(n),i&&xt.push(o)}}function ae(e,t){void 0===e&&(e=vt),H&&ee(e),In(e,t)}function re(){Pt=!0,wt&&Wn(),St!==Mt&&It.emit("indexChanged",Pe()),It.emit("transitionStart",Pe()),ae()}function oe(e){function t(e){return e.toLowerCase().replace(/-/g,"")}if(It.emit("transitionEnd",Pe(e)),!ze&&xt.length>0)for(var n=0;n<st;n++){var i=xt[n];i.style.left="",H&&ee(0,i),Ge&&R&&(i.style[R]=i.style[B]=""),i.classList.remove(je),i.classList.add(_e)}if(!e||!ze&&e.target.parentNode===Xe||e.target===Xe&&t(e.propertyName)===t(Dt)){if(!wt){var a=St;Wn(),St!==a&&(ae(0),It.emit("indexChanged",Pe()))}J(),(on&&!mt||on&&mt&&ln.indexOf(St%Qe)===-1)&&Ae(),$(),Z(),U(),V(),"inner"===ct&&It.emit("innerLoaded",Pe()),Pt=!1,Mt=St}}function se(e){if(!Pt){var t,n=St%Qe;switch(n<0&&(n+=Qe),e){case"next":t=1;break;case"prev":t=-1;break;case"first":t=-n;break;case"last":t=Qe-1-n;break;default:if("number"==typeof e){var i=e%Qe;i<0&&(i+=Qe),!mt&&dt&&(i+=1),t=i-n}}St+=t,wt&&Wn(),St%Qe!=Mt%Qe&&re()}}function le(e){Pt||(St+=e*lt,re())}function ce(){le(-1)}function ue(){pt&&St===At?se(0):le(1)}function de(e){if(!Pt){for(var t,n=e.target||e.srcElement;null===l(n,"data-nav");)n=n.parentNode;t=un=Number(l(n,"data-nav")),se(t)}}function fe(e,t){u(bn,{"data-action":e}),bn.innerHTML=En[0]+e+En[1]+t}function he(){me(),fe("stop",yn[1]),xn=!0}function ve(){pe(),fe("start",yn[0]),xn=!1}function pe(){xn="paused",clearInterval(hn)}function me(){xn!==!0&&(clearInterval(hn),hn=setInterval(function(){le(mn)},pn))}function ye(){xn?ve():he()}function ge(){wn!=M.hidden&&xn!==!1&&(M.hidden?pe():me()),wn=M.hidden}function be(e){switch(e=e||k.event,e.keyCode){case O.LEFT:ce();break;case O.RIGHT:ue()}}function xe(e){e=e||k.event;var t=e.keyCode;M.activeElement;switch(t){case O.LEFT:case O.UP:case O.PAGEUP:Zt.disabled||ce();break;case O.RIGHT:case O.DOWN:case O.PAGEDOWN:en.disabled||ue();break;case O.HOME:se(0);break;case O.END:se(Qe-1)}}function Te(e){e.focus()}function Ee(e){function n(e){return t.navContainer?e:ln[e]}e=e||k.event;var i=e.keyCode,a=M.activeElement,r=Number(l(a,"data-nav")),o=ln.length,s=ln.indexOf(r);switch(t.navContainer&&(o=Qe,s=r),i){case O.LEFT:case O.PAGEUP:s>0&&Te(rn[n(s-1)]);break;case O.UP:case O.HOME:s>0&&Te(rn[n(0)]);break;case O.RIGHT:case O.PAGEDOWN:s<o-1&&Te(rn[n(s+1)]);break;case O.DOWN:case O.END:s<o-1&&Te(rn[n(o-1)]);break;case O.ENTER:case O.SPACE:de(e)}}function Ce(){ae(0,Xe.scrollLeft()),Mt=St}function we(e){return e.target||e.srcElement}function De(e){return"a"===e.tagName.toLowerCase()}function Ne(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Le(e){e=e||k.event,De(we(e))&&"touchstart"!==e.type&&Ne(e);var t="touchstart"===e.type?e.changedTouches[0]:e;Mn=parseInt(t.clientX),kn=parseInt(t.clientY),Dn=Number(Xe.style[Dt].replace(Nt,"").replace(Lt,"").replace(/(px|%)/g,"")),"touchstart"===e.type?It.emit("touchStart",Pe(e)):(It.emit("dragStart",Pe(e)),An=!0)}function Se(e){if(e=e||k.event,An&&"mousemove"===e.type&&!Pn&&(Pn=!0),null!==Mn){De(we(e))&&"touchmove"!==e.type&&Ne(e);var n="touchmove"===e.type?e.changedTouches[0]:e;if(Nn=parseInt(n.clientX)-Mn,Ln=parseInt(n.clientY)-kn,o(r(Ln,Nn),15)===t.axis){ot=!0,"touchmove"===e.type?It.emit("touchMove",Pe(e)):It.emit("dragMove",Pe(e));var i=Dn;if(Fe)if(ft)i+=Nn,i+="px";else{var a=I?Nn*st*100/(qe*Et):100*Nn/qe;i+=a,i+="%"}else i+=Ln,i+="px";I&&ee(0),Xe.style[Dt]=Nt+i+Lt}}}function Me(e){if(e=e||k.event,An&&(An=!1),ot){ot=!1;var t=0===e.type.indexOf("touch")?e.changedTouches[0]:e;if(Nn=parseInt(t.clientX)-Mn,Ln=parseInt(t.clientY)-kn,Mn=kn=null,Fe){var n=-Nn*st/qe;n=Nn>0?Math.floor(n):Math.ceil(n),St+=n}else{var i=-(Dn+Ln);if(i<=0)St=Ot;else if(i>=at[at.length-1])St=At;else{var a=0;do{a++,St=Ln<0?a+1:a}while(a<Et&&i>=at[a+1])}}0===e.type.indexOf("touch")?It.emit("touchEnd",Pe(e)):It.emit("dragEnd",Pe(e)),re()}if(Pn){Pn=!1;var r=we(e);De(r)&&g(r,{click:function e(t){Ne(t),b(r,{click:e})}})}}function ke(){Ve.style.height=at[St+st]-at[St]+"px"}function Oe(){ln=[];for(var e=!mt&&dt?St-1:St,t=e%Qe%st;t<Qe;)!mt&&t+st>Qe&&(t=Qe-st),ln.push(t),t+=st;(mt&&ln.length*st<Qe||!mt&&ln[0]>0)&&ln.unshift(0)}function Ae(){on&&!t.navContainer&&(Oe(),ln!==cn&&(cn.length>0&&cn.forEach(function(e){u(rn[e],{hidden:""})}),ln.length>0&&ln.forEach(function(e){d(rn[e],"hidden")}),cn=ln))}function Pe(e){return{container:Xe,slideItems:Ye,navContainer:sn,navItems:rn,controlsContainer:an,prevButton:Zt,nextButton:en,items:st,slideBy:lt,cloneCount:Tt,slideCount:Qe,slideCountNew:Et,index:St,indexCached:Mt,navCurrent:dn,navCurrentCached:fn,visibleNavIndexes:ln,visibleNavIndexesCached:cn,event:e||{}}}if(t=e({container:M.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=M.querySelector(t[e]))}),t.container&&t.container.nodeName&&!(t.container.children.length<2)){if(t.responsive){var We={},Ie=t.responsive;for(var He in Ie){var Re=Ie[He];We[He]="number"==typeof Re?{items:Re}:Re}t.responsive=We,We=null}var ze="carousel"===t.mode;if(!ze){t.axis="horizontal",t.rewind=!1,t.loop=!0;var Be="tns-fadeIn",je="tns-fadeOut",Ge=!1,_e=t.animateNormal||"tns-normal";j&&G&&(Be=t.animateIn||Be,je=t.animateOut||je,Ge=t.animateDelay||Ge)}var qe,Fe="horizontal"===t.axis,Ue=M.createElement("div"),Ve=M.createElement("div"),Xe=t.container,Ke=Xe.parentNode,Ye=Xe.children,Qe=Ye.length,Je=Ke.clientWidth,$e=t.responsive,Ze=[],et=!1,tt=0,nt=0;if($e){et=Object.keys($e).map(function(e){return Number(e)}).sort(function(e,t){return e-t}),et.indexOf(0)<0&&(nt=1),et.forEach(function(e){Ze=Ze.concat(Object.keys($e[e]))});var it=[];Ze.forEach(function(e){it.indexOf(e)<0&&it.push(e)}),Ze=it,tt=_()}var at,rt,ot,st=c("items"),lt="page"===c("slideBy")?st:c("slideBy"),ct=t.nested,ut=c("gutter"),dt=c("edgePadding"),ft=c("fixedWidth"),ht=c("arrowKeys"),vt=c("speed"),pt=t.rewind,mt=!pt&&t.loop,yt=c("autoHeight"),gt=a(),bt=t.lazyload,xt=[],Tt=mt?2*Qe:n("edgePadding")?1:0,Et=ze?Qe+2*Tt:Qe+Tt,Ct=!(!ft||mt||dt),wt=!ze||!mt,Dt=Fe?"left":"top",Nt="",Lt="",St=ze?Tt:0,Mt=St,kt=!mt&&n("edgePadding")?1:0,Ot=kt,At=Et-st-kt,Pt=!1,Wt=t.onInit,It=new x,Ht=Xe.id,Rt=Xe.className,zt=Ye[0].id,Bt=Ye[0].className,jt=Xe.id||i(),Gt=Qe<=st,_t="inner"===ct?" !important":"",qt={mouseover:q,mouseout:F},Ft={visibilitychange:ge},Ut={keydown:be},Vt={touchstart:Le,touchmove:Se,touchend:Me,touchcancel:Me},Xt={mousedown:Le,mousemove:Se,mouseup:Me,mouseleave:Me},Kt=n("controls"),Yt=n("nav"),Qt=n("autoplay"),Jt=n("touch"),$t=n("mouseDrag");if(Kt)var Zt,en,tn=c("controls"),nn=c("controlsText"),an=t.controlsContainer;if(Yt)var rn,on=c("nav"),sn=t.navContainer,ln=[],cn=ln,un=-1,dn=0,fn=0;if(Qt)var hn,vn=c("autoplay"),pn=c("autoplayTimeout"),mn="forward"===t.autoplayDirection?1:-1,yn=c("autoplayText"),gn=c("autoplayHoverPause"),bn=t.autoplayButton,xn=!1,Tn=!1,En=["<span class='tns-visually-hidden'>"," animation</span>"],Cn=c("autoplayResetOnVisibility"),wn=!1;if(Jt)var Dn,Nn,Ln,Sn=c("touch"),Mn=null,kn=null;if($t)var On=c("mouseDrag"),An=!1,Pn=!1;Gt&&(tn=on=Sn=On=ht=vn=gn=Cn=!1),I&&(Dt=I,Nt="translate",Nt+=Fe?"X(":"Y(",Lt=")"),function(){Ue.appendChild(Ve),Ke.insertBefore(Ue,Xe),Ve.appendChild(Xe),qe=Ve.clientWidth;var e="tns-outer",i="tns-inner",a=" tns-slider tns-"+t.mode;if(ze&&(Fe&&(n("edgePadding")||n("gutter")&&!t.fixedWidth)?e+=" tns-ovh":i+=" tns-ovh"),Ue.className=e,Ve.className=i,Ve.id=jt+"-iw",yt&&(Ve.className+=" tns-ah",Ve.style[H]=vt/1e3+"s"),""===Xe.id&&(Xe.id=jt),a+=P?" tns-subpixel":" tns-no-subpixel",a+=A?" tns-calc":" tns-no-calc",ze&&(a+=" tns-"+t.axis),Xe.className+=a,ze&&j){var r={};r[j]=oe,g(Xe,r)}e=i=a=null;for(var o=0;o<Qe;o++){var s=Ye[o];s.id=jt+"-item"+o,s.classList.add("tns-item"),!ze&&_e&&s.classList.add(_e),u(s,{"aria-hidden":"true",tabindex:"-1"})}if(mt||dt){for(var l=M.createDocumentFragment(),f=M.createDocumentFragment(),v=Tt;v--;){var p=v%Qe,b=Ye[p].cloneNode(!0);if(d(b,"id"),f.insertBefore(b,f.firstChild),ze){var x=Ye[Qe-1-p].cloneNode(!0);d(x,"id"),l.appendChild(x)}}Xe.insertBefore(l,Xe.firstChild),Xe.appendChild(f),Ye=Xe.children}for(var T=St;T<St+st;T++){var s=Ye[T];u(s,{"aria-hidden":"false"}),d(s,["tabindex"]),ze||(s.style.left=100*(T-St)/st+"%",s.classList.remove(_e),s.classList.add(Be))}if(ze&&Fe)if(P){var O=k.getComputedStyle(Ye[0]).fontSize;O.indexOf("em")!==-1&&(O=16*Number(O.replace(/r?em/,""))+"px"),E(gt,"#"+jt,"font-size:0;",C(gt)),E(gt,"#"+jt+" .tns-item","font-size:"+O+";",C(gt))}else[].forEach.call(Ye,function(e,t){e.style.marginLeft=m(t)});if(W){var I=y(t.edgePadding,t.gutter,t.fixedWidth);E(gt,"#"+jt+"-iw",I,C(gt)),ze&&Fe&&(I="width:"+w(t.fixedWidth,t.gutter,t.items),E(gt,"#"+jt,I,C(gt))),(Fe||t.gutter)&&(I=D(t.fixedWidth,t.gutter,t.items)+N(t.gutter),E(gt,"#"+jt+" .tns-item",I,C(gt)))}else if(Ve.style.cssText=y(dt,ut,ft),ze&&Fe&&(Xe.style.width=w(ft,ut,st)),Fe||ut){var I=D(ft,ut,st)+N(ut);E(gt,"#"+jt+" .tns-item",I,C(gt))}if(Fe||(Y(),ke()),$e&&W&&et.forEach(function(e){var t=$e[e],i=innerWrapperStr=containerStr=slideStr="",a=c("items",e),r=c("fixedWidth",e),o=c("edgePadding",e),s=c("gutter",e);("edgePadding"in t||"gutter"in t)&&(innerWrapperStr="#"+jt+"-iw{"+y(o,s,r)+"}"),ze&&Fe&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(containerStr="#"+jt+"{width:"+w(r,s,a)+"}"),("fixedWidth"in t||n("fixedWidth")&&"gutter"in t)&&(slideStr+=D(r,s,a)),"gutter"in t&&(slideStr+=N(s)),slideStr.length>0&&(slideStr="#"+jt+" .tns-item{"+slideStr+"}"),i=innerWrapperStr+containerStr+slideStr,i.length>0&&gt.insertRule("@media (min-width: "+e/16+"em) {"+i+"}",gt.cssRules.length)}),ze&&ne(),navigator.msMaxTouchPoints&&(Ue.classList.add("ms-touch"),g(Ue,{scroll:Ce}),Q()),Yt){if(sn)u(sn,{"aria-label":"Carousel Pagination"}),rn=sn.children,[].forEach.call(rn,function(e,t){u(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":jt+"-item"+t})});else{for(var R="",T=0;T<Qe;T++)R+='<button data-nav="'+T+'" tabindex="-1" aria-selected="false" aria-controls="'+jt+"-item"+T+'" hidden type="button"></button>';R='<div class="tns-nav" aria-label="Carousel Pagination">'+R+"</div>",Ue.insertAdjacentHTML("afterbegin",R),[].forEach.call(Ue.children,function(e){e.classList.contains("tns-nav")&&(sn=e)}),rn=sn.children,Ae()}u(rn[0],{tabindex:"0","aria-selected":"true"});for(var z=0;z<Qe;z++)g(rn[z],{click:de,keydown:Ee});on||h(sn)}if(Qt){var B=vn?"stop":"start";bn?u(bn,{"data-action":B}):(Ve.insertAdjacentHTML("beforebegin",'<button data-action="'+B+'" type="button">'+En[0]+B+En[1]+yn[0]+"</button>"),bn=Ue.querySelector("[data-action]")),g(bn,{click:ye}),vn?(he(),gn&&g(Xe,qt),Cn&&g(Xe,Ft)):h(bn)}Kt&&(an?(Zt=an.children[0],en=an.children[1],u(an,{"aria-label":"Carousel Navigation",tabindex:"0"}),u(Zt,{"data-controls":"prev"}),u(en,{"data-controls":"next"}),u(an.children,{"aria-controls":jt,tabindex:"-1"})):(Ue.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+jt+'" type="button">'+nn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+jt+'" type="button">'+nn[1]+"</button></div>"),[].forEach.call(Ue.children,function(e){e.classList.contains("tns-controls")&&(an=e)}),Zt=an.children[0],en=an.children[1]),mt||(Zt.disabled=!0),g(an,{keydown:xe}),g(Zt,{click:ce}),g(en,{click:ue}),tn||h(an)),Sn&&g(Xe,Vt),On&&g(Xe,Xt),ht&&g(M,Ut),"inner"===ct?It.on("outerResized",function(){S(),It.emit("innerLoaded",Pe())}):(g(k,{resize:L}),"outer"===ct&&It.on("innerLoaded",V)),U(),V(),"function"==typeof Wt&&Wt(Pe()),"inner"===ct&&It.emit("innerLoaded",Pe())}();var Wn=function(){return mt?function(){var e=Ot,t=At;ze&&(e+=lt,t-=lt);var n=ut?ut:0;if(ft&&Je%(ft+n)>n&&(t-=1),St>t)for(;St>=e+Qe;)St-=Qe;else if(St<e)for(;St<=t-Qe;)St+=Qe}:function(){St=Math.max(Ot,Math.min(At,St))}}(),In=function(){return ze?function(e,t){if(t||(t=te()),Ct&&St===At){var n=I?100*-((Et-st)/Et):100*-(Et/st-1);t=Math.max(Number(t.replace("%","")),n)+"%"}H||!e?(ne(t),0===vt&&oe()):T(Xe,Dt,Nt,Lt,t,vt,oe),Fe||ke()}:function(){xt=[];var e={};e[j]=e[G]=oe,b(Ye[Mt],e),g(Ye[St],e),ie(Mt,Be,je,!0),ie(St,_e,Be),j&&G&&0!==vt||setTimeout(oe,0)}}();return{getInfo:Pe,events:It,goTo:se,destroy:function(){if(gt.disabled=!0,Ke.insertBefore(Xe,Ue),Ue.remove(),Ue=Ve=null,Xe.id=Ht||"",Xe.className=Rt||"",d(Xe,["style"]),mt)for(var e=Tt;e--;)Ye[0].remove(),Ye[Ye.length-1].remove();for(var n=Qe;n--;)Ye[n].id=zt||"",Ye[n].className=Bt||"";d(Ye,["style","aria-hidden","tabindex"]),jt=Qe=null,tn&&(t.controlsContainer?(d(an,["aria-label","tabindex"]),d(an.children,["aria-controls","tabindex"]),f(an)):an=Zt=en=null),on&&(t.navContainer?(d(sn,["aria-label"]),d(rn,["aria-selected","aria-controls","tabindex"]),f(sn)):sn=null,rn=null),vn&&(t.navContainer?f(bn):sn=null,b(M,{visibilitychange:ge})),f(Xe),ht&&b(M,{keydown:be}),b(k,{resize:L})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
