(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{h33z:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),i=function(){return function(){}}(),o=l("pMnS"),r=function(){function n(){this.selectedOptions=[]}return n.ngInjectableDef=Object(t.U)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),a=function(){return function(n){this.tabsService=n,this.active=!1,this.isCloseable=!1}}(),u=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[r]}},n}(),s=l("Ip0R"),c=l("gIcY"),d=l("26FU"),p=(l("K9Ia"),l("p0ib"),l("VnD/")),b=l("67Y/");l("mrSG");var f=new t.p("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:function(){return null}}),h=[{alias:"xs",mediaQuery:"(min-width: 0px) and (max-width: 599px)",priority:100},{alias:"gt-xs",overlapping:!0,mediaQuery:"(min-width: 600px)",priority:7},{alias:"lt-sm",overlapping:!0,mediaQuery:"(max-width: 599px)",priority:10},{alias:"sm",mediaQuery:"(min-width: 600px) and (max-width: 959px)",priority:100},{alias:"gt-sm",overlapping:!0,mediaQuery:"(min-width: 960px)",priority:8},{alias:"lt-md",overlapping:!0,mediaQuery:"(max-width: 959px)",priority:9},{alias:"md",mediaQuery:"(min-width: 960px) and (max-width: 1279px)",priority:100},{alias:"gt-md",overlapping:!0,mediaQuery:"(min-width: 1280px)",priority:9},{alias:"lt-lg",overlapping:!0,mediaQuery:"(max-width: 1279px)",priority:8},{alias:"lg",mediaQuery:"(min-width: 1280px) and (max-width: 1919px)",priority:100},{alias:"gt-lg",overlapping:!0,mediaQuery:"(min-width: 1920px)",priority:10},{alias:"lt-xl",overlapping:!0,mediaQuery:"(max-width: 1919px)",priority:7},{alias:"xl",mediaQuery:"(min-width: 1920px) and (max-width: 5000px)",priority:100}],m="(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)",g="(orientation: portrait) and (min-width: 600px) and (max-width: 839px)",y="(orientation: portrait) and (min-width: 840px)",v="(orientation: landscape) and (min-width: 1280px)",x={HANDSET:"(orientation: portrait) and (max-width: 599px), (orientation: landscape) and (max-width: 959px)",TABLET:g+" , "+m,WEB:y+", "+v+" ",HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599px)",TABLET_PORTRAIT:g+" ",WEB_PORTRAIT:""+y,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959px)]",TABLET_LANDSCAPE:""+m,WEB_LANDSCAPE:""+v},w=[{alias:"handset",mediaQuery:x.HANDSET},{alias:"handset.landscape",mediaQuery:x.HANDSET_LANDSCAPE},{alias:"handset.portrait",mediaQuery:x.HANDSET_PORTRAIT},{alias:"tablet",mediaQuery:x.TABLET},{alias:"tablet.landscape",mediaQuery:x.TABLET},{alias:"tablet.portrait",mediaQuery:x.TABLET_PORTRAIT},{alias:"web",mediaQuery:x.WEB,overlapping:!0},{alias:"web.landscape",mediaQuery:x.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",mediaQuery:x.WEB_PORTRAIT,overlapping:!0}];function A(n){for(var e=[],l=1;l<arguments.length;l++)e[l-1]=arguments[l];if(null==n)throw TypeError("Cannot convert undefined or null to object");for(var t=0,i=e;t<i.length;t++){var o=i[t];if(null!=o)for(var r in o)o.hasOwnProperty(r)&&(n[r]=o[r])}return n}var _=/(\.|-|_)/g;function C(n){var e=n.length>0?n.charAt(0):"",l=n.length>1?n.slice(1):"";return e.toUpperCase()+l}var O={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0},k=new t.p("Flex Layout token, config options for the library",{providedIn:"root",factory:function(){return O}}),M=new t.p("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:function(){var n=Object(t.Y)(f),e=Object(t.Y)(k),l=[].concat.apply([],(n||[]).map(function(n){return Array.isArray(n)?n:[n]}));return function(n,e){void 0===e&&(e=[]);var l,t={};return n.forEach(function(n){t[n.alias]=n}),e.forEach(function(n){t[n.alias]?A(t[n.alias],n):t[n.alias]=n}),(l=Object.keys(t).map(function(n){return t[n]})).forEach(function(n){n.suffix||(n.suffix=n.alias.replace(_,"|").split("|").map(C).join(""),n.overlapping=!!n.overlapping)}),l}((e.disableDefaultBps?[]:h).concat(e.addOrientationBps?w:[]),l)}}),P=function(){function n(n){this._registry=n}return Object.defineProperty(n.prototype,"items",{get:function(){return this._registry.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"sortedItems",{get:function(){var n=this._registry.filter(function(n){return!0===n.overlapping}),e=this._registry.filter(function(n){return!0!==n.overlapping});return n.concat(e)},enumerable:!0,configurable:!0}),n.prototype.findByAlias=function(n){return this._registry.find(function(e){return e.alias==n})||null},n.prototype.findByQuery=function(n){return this._registry.find(function(e){return e.mediaQuery==n})||null},Object.defineProperty(n.prototype,"overlappings",{get:function(){return this._registry.filter(function(n){return 1==n.overlapping})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"aliases",{get:function(){return this._registry.map(function(n){return n.alias})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"suffixes",{get:function(){return this._registry.map(function(n){return n.suffix?n.suffix:""})},enumerable:!0,configurable:!0}),n.ngInjectableDef=Object(t.U)({factory:function(){return new n(Object(t.Y)(M))},token:n,providedIn:"root"}),n}(),I=function(){function n(n,e,l,t){void 0===n&&(n=!1),void 0===e&&(e="all"),void 0===l&&(l=""),void 0===t&&(t=""),this.matches=n,this.mediaQuery=e,this.mqAlias=l,this.suffix=t,this.property=""}return n.prototype.clone=function(){return new n(this.matches,this.mediaQuery,this.mqAlias,this.suffix)},n}(),T=function(){function n(n,e,l){this._zone=n,this._platformId=e,this._document=l,this._registry=new Map,this._source=new d.a(new I(!0)),this._observable$=this._source.asObservable()}return n.prototype.isActive=function(n){var e=this._registry.get(n);return!!e&&e.matches},n.prototype.observe=function(n){return n&&this.registerQuery(n),this._observable$.pipe(Object(p.a)(function(e){return!n||e.mediaQuery===n}))},n.prototype.registerQuery=function(n){var e=this,l=Array.isArray(n)?Array.from(new Set(n)):[n];l.length>0&&function(n,e){var l=n.filter(function(n){return!j[n]});if(l.length>0){var t=l.join(", ");try{var i=e.createElement("style");i.setAttribute("type","text/css"),i.styleSheet||i.appendChild(e.createTextNode("\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media "+t+" {.fx-query-test{ }}\n")),e.head.appendChild(i),l.forEach(function(n){return j[n]=i})}catch(o){console.error(o)}}}(l,this._document),l.forEach(function(n){var l=function(l){e._zone.run(function(){return e._source.next(new I(l.matches,n))})},t=e._registry.get(n);t||((t=e._buildMQL(n)).addListener(l),e._registry.set(n,t)),t.matches&&l(t)})},n.prototype._buildMQL=function(n){return function(n,e){return e&&window.matchMedia("all").addListener?window.matchMedia(n):{matches:"all"===n||""===n,media:n,addListener:function(){},removeListener:function(){}}}(n,Object(s.v)(this._platformId))},n.ngInjectableDef=Object(t.U)({factory:function(){return new n(Object(t.Y)(t.z),Object(t.Y)(t.B),Object(t.Y)(s.d))},token:n,providedIn:"root"}),n}(),j={},Q=function(){return function(){}}(),L=function(){function n(n,e){this.breakpoints=n,this.mediaWatcher=e,this.filterOverlaps=!0,this._registerBreakPoints(),this.observable$=this._buildObservable()}return n.prototype.isActive=function(n){return this.mediaWatcher.isActive(this._toMediaQuery(n))},n.prototype.subscribe=function(n,e,l){return n&&"object"==typeof n?this.observable$.subscribe(n.next,n.error,n.complete):this.observable$.subscribe(n,e,l)},n.prototype.asObservable=function(){return this.observable$},n.prototype._registerBreakPoints=function(){var n=this.breakpoints.sortedItems.map(function(n){return n.mediaQuery});this.mediaWatcher.registerQuery(n)},n.prototype._buildObservable=function(){var n=this;return this.mediaWatcher.observe().pipe(Object(p.a)(function(n){return n.matches}),Object(p.a)(function(e){var l=n.breakpoints.findByQuery(e.mediaQuery);return!l||!(n.filterOverlaps&&l.overlapping)}),Object(b.a)(function(e){return A(e,(l=n._findByQuery(e.mediaQuery))?{mqAlias:l.alias,suffix:l.suffix}:{});var l}))},n.prototype._findByAlias=function(n){return this.breakpoints.findByAlias(n)},n.prototype._findByQuery=function(n){return this.breakpoints.findByQuery(n)},n.prototype._toMediaQuery=function(n){var e=this._findByAlias(n)||this._findByQuery(n);return e?e.mediaQuery:n},n.ngInjectableDef=Object(t.U)({factory:function(){return new n(Object(t.Y)(P),Object(t.Y)(T))},token:n,providedIn:"root"}),n}(),E=function(){return function(){}}(),B=new t.p("FlexLayoutServerLoaded",{providedIn:"root",factory:function(){return!1}}),S=l("Fzqc");l("ny24");var N=function(){return function(){}}();l("n6gG");var R=function(){return function(){}}(),D=function(){return function(){}}(),F=function(){function n(n,e){Object(s.w)(e)&&!n&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}return n.withConfig=function(e,l){return void 0===l&&(l=[]),{ngModule:n,providers:e.serverLoaded?[{provide:k,useValue:e},{provide:f,useValue:l,multi:!0},{provide:B,useValue:!0}]:[{provide:k,useValue:e},{provide:f,useValue:l,multi:!0}]}},n}(),K=l("Wf4p"),W=l("ZYjt"),V=l("dWZg"),Y=function(){return function(){}}(),q=l("lLAP"),z=(l("YlbQ"),l("YSh2"),l("pugT"),function(){return function(){}}()),U=l("UodH"),H=l("wFw1");l("MlvX");var $=l("bujt"),X=t.qb({encapsulation:0,styles:[".pane[_ngcontent-%COMP%] {\n      padding: 1em;\n    }"],data:{}});function G(n){return t.Kb(0,[(n()(),t.sb(0,0,null,null,1,"h3",[["class","tab-heading"]],null,null,null,null,null)),(n()(),t.Ib(1,null,[" "," "]))],null,function(n,e){n(e,1,0,e.component.tabTitle)})}function Z(n){return t.Kb(0,[(n()(),t.sb(0,16777216,null,null,2,null,null,null,null,null,null,null)),t.rb(1,540672,null,0,s.r,[t.Q],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t.Eb(2,{person:0}),(n()(),t.jb(0,null,null,0))],function(n,e){var l=e.component,t=n(e,2,0,l.dataContext);n(e,1,0,t,l.template)},null)}function J(n){return t.Kb(0,[(n()(),t.sb(0,0,null,null,5,"div",[["class","pane"]],null,null,null,null,null)),(n()(),t.jb(16777216,null,null,1,null,G)),t.rb(2,16384,null,0,s.k,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),t.Bb(null,0),(n()(),t.jb(16777216,null,null,1,null,Z)),t.rb(5,16384,null,0,s.k,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(n,e){var l=e.component;n(e,2,0,l.tabsService.multi&&l.tabsService.selectedOptions.length>1),n(e,5,0,l.template)},null)}function nn(n){return t.Kb(0,[(n()(),t.jb(16777216,null,null,1,null,J)),t.rb(1,16384,null,0,s.k,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,1,0,e.component.active)},null)}function en(n){return t.Kb(0,[(n()(),t.sb(0,0,null,null,1,"ng-vertical-tab",[],null,null,null,nn,X)),t.rb(1,49152,null,0,a,[r],null,null)],null,null)}var ln=t.ob("ng-vertical-tab",a,en,{tabTitle:"tabTitle",active:"active",template:"template",dataContext:"dataContext",isCloseable:"isCloseable"},{},["*"]),tn=l("ZYCi"),on=function(){function n(){}return n.prototype.scrollToId=function(n){var e=document.getElementById(n.startsWith("#")?n.substring(1):n);null!=e&&e.scrollIntoView({behavior:"smooth"})},n}(),rn=t.qb({encapsulation:0,styles:[["@font-face{font-family:Myriad-Pro;src:url(MyriadWebPro.51651b54b06481648127.ttf)}.docs-header-background[_ngcontent-%COMP%]{overflow:hidden}.docs-header-section[_ngcontent-%COMP%]{text-align:center;align-items:center;display:flex;flex-direction:column;padding-top:60px}.docs-header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:40px}.docs-header-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:1000px;font-size:16px;font-weight:400;line-height:28px;margin:0;padding:0}.docs-header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:56px;font-weight:300;line-height:56px;margin:15px 5px}.docs-header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:300;line-height:28px;margin:15px 0 25px}.docs-homepage-promo[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;padding:16px}.docs-homepage-promo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px;font-weight:400;margin:0 0 16px;padding:0}.docs-homepage-promo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:28px;margin:0 0 24px;padding:0}.docs-homepage-row[_ngcontent-%COMP%]{display:flex;max-width:920px;margin:60px 0}.docs-homepage-row[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{max-width:30%}.docs-homepage-reverse-row[_ngcontent-%COMP%]{flex-direction:row-reverse}.docs-header-start[_ngcontent-%COMP%], .docs-homepage-bottom-start[_ngcontent-%COMP%]{text-align:center;margin:60px 0}.docs-button[_ngcontent-%COMP%]{margin:0 20px 20px 0}.docs-homepage-promo-desc[_ngcontent-%COMP%], .docs-homepage-promo-img[_ngcontent-%COMP%]{width:50%}.docs-homepage-promo-img[_ngcontent-%COMP%]{text-align:center}.docs-homepage-promo-desc[_ngcontent-%COMP%]{line-height:2;display:flex;flex-direction:column;justify-content:center}@media (max-width:720px){.docs-header-section[_ngcontent-%COMP%]{padding-top:15px}.docs-header-start[_ngcontent-%COMP%], .docs-homepage-bottom-start[_ngcontent-%COMP%], .docs-homepage-row[_ngcontent-%COMP%]{margin:15px 0}}mat-selection-list[_ngcontent-%COMP%]   mat-list-base[_ngcontent-%COMP%]{background-color:orange!important}"]],data:{}});function an(n){return t.Kb(0,[(n()(),t.sb(0,0,null,null,20,"header",[["class","docs-header-background"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,19,"div",[["class","docs-header-section"]],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,5,"div",[["class","docs-header-headline"]],null,null,null,null,null)),(n()(),t.sb(3,0,null,null,1,"h1",[["class","mat-h1"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Fantom Developer Ecosystem"])),(n()(),t.sb(5,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.sb(6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["The Fantom framework is a high transaction throughput decentralised applications platform that can host performance sensitive applications at a low cost. The performance of the Fantom platform and the LLVM-IR based virtual machine makes distributed app development as easy as developing conventional applications. Read below to learn about the technology and research projects that makes the Fantom network fast and developer friendly. "])),(n()(),t.sb(8,0,null,null,12,"div",[["class","docs-header-start"]],null,null,null,null,null)),(n()(),t.sb(9,0,null,null,3,"a",[["class","docs-button"],["mat-raised-button",""],["routerLink","/guide/getting-started"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t.Cb(n,10).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&i),"click"===e&&(i=!1!==t.Cb(n,11)._haltDisabledEvents(l)&&i),i},$.c,$.a)),t.rb(10,671744,null,0,tn.p,[tn.n,tn.a,s.h],{routerLink:[0,"routerLink"]},null),t.rb(11,180224,null,0,U.a,[V.a,q.d,t.k,[2,H.a]],null,null),(n()(),t.Ib(-1,0,["Get started"])),(n()(),t.sb(13,0,null,null,3,"a",[["class","docs-button"],["mat-raised-button",""],["routerLink","/wiki"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t.Cb(n,14).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&i),"click"===e&&(i=!1!==t.Cb(n,15)._haltDisabledEvents(l)&&i),i},$.c,$.a)),t.rb(14,671744,null,0,tn.p,[tn.n,tn.a,s.h],{routerLink:[0,"routerLink"]},null),t.rb(15,180224,null,0,U.a,[V.a,q.d,t.k,[2,H.a]],null,null),(n()(),t.Ib(-1,0,["Wiki"])),(n()(),t.sb(17,0,null,null,3,"a",[["class","docs-button"],["mat-raised-button",""],["routerLink","/rfc"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t.Cb(n,18).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&i),"click"===e&&(i=!1!==t.Cb(n,19)._haltDisabledEvents(l)&&i),i},$.c,$.a)),t.rb(18,671744,null,0,tn.p,[tn.n,tn.a,s.h],{routerLink:[0,"routerLink"]},null),t.rb(19,180224,null,0,U.a,[V.a,q.d,t.k,[2,H.a]],null,null),(n()(),t.Ib(-1,0,["Specification"])),(n()(),t.sb(21,0,null,null,31,"div",[["class","docs-homepage-promo"]],null,null,null,null,null)),(n()(),t.sb(22,0,null,null,7,"div",[["class","docs-homepage-row"]],null,null,null,null,null)),(n()(),t.sb(23,0,null,null,1,"div",[["class","docs-homepage-promo-img"]],null,null,null,null,null)),(n()(),t.sb(24,0,null,null,0,"img",[["src","../assets/img/homepage/lachesis-consensus.jpg"]],null,null,null,null,null)),(n()(),t.sb(25,0,null,null,4,"div",[["class","docs-homepage-promo-desc"]],null,null,null,null,null)),(n()(),t.sb(26,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Asynchronous BFT Consensus"])),(n()(),t.sb(28,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,[" The Fantom network uses a directed acyclic graph based consensus algorithm that appends transactions asynchronously. Unlike other blockchains, the Fantom network improves transaction throughput as more participants join the network. Transactions have instant finality and fast confirmation times making Fantom applications responsive and easier to develop. "])),(n()(),t.sb(30,0,null,null,7,"div",[["class","docs-homepage-row docs-homepage-reverse-row"]],null,null,null,null,null)),(n()(),t.sb(31,0,null,null,1,"div",[["class","docs-homepage-promo-img"]],null,null,null,null,null)),(n()(),t.sb(32,0,null,null,0,"img",[["src","../assets/img/homepage/virtual-machine.jpg"]],null,null,null,null,null)),(n()(),t.sb(33,0,null,null,4,"div",[["class","docs-homepage-promo-desc"]],null,null,null,null,null)),(n()(),t.sb(34,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["LLVM-IR based Virtual Machine"])),(n()(),t.sb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,[" Fantom applications run on a high performance register-based virtual machine that consumers LLVM-IR. Using LLVM-IR providers developers a wide variety of languages to choose from including C/C++, Swift, Kotlin and Rust. "])),(n()(),t.sb(38,0,null,null,7,"div",[["class","docs-homepage-row"]],null,null,null,null,null)),(n()(),t.sb(39,0,null,null,1,"div",[["class","docs-homepage-promo-img"]],null,null,null,null,null)),(n()(),t.sb(40,0,null,null,0,"img",[["src","../assets/img/homepage/wallet.jpg"]],null,null,null,null,null)),(n()(),t.sb(41,0,null,null,4,"div",[["class","docs-homepage-promo-desc"]],null,null,null,null,null)),(n()(),t.sb(42,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Cross Platform Wallet"])),(n()(),t.sb(44,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,[" Download the Fantom wallet and connect to the testnet. Available on iOS, Android, Web, Windows and Mac. "])),(n()(),t.sb(46,0,null,null,6,"div",[["class","docs-homepage-row docs-homepage-reverse-row"]],null,null,null,null,null)),(n()(),t.sb(47,0,null,null,0,"div",[["class","docs-homepage-promo-img"]],null,null,null,null,null)),(n()(),t.sb(48,0,null,null,4,"div",[["class","docs-homepage-promo-desc"]],null,null,null,null,null)),(n()(),t.sb(49,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Verifiable Computation"])),(n()(),t.sb(51,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,[" In conjuction with the University of Sydney, Fantom is developing a verifiable computation extensions to the LLVM-IR virtual machine. Verifiable computations allow the network to verify the result of a smart contract transaction without having to perform the computation improving performance and effeciency. "]))],function(n,e){n(e,10,0,"/guide/getting-started"),n(e,14,0,"/wiki"),n(e,18,0,"/rfc")},function(n,e){n(e,9,0,t.Cb(e,10).target,t.Cb(e,10).href,t.Cb(e,11).disabled?-1:t.Cb(e,11).tabIndex||0,t.Cb(e,11).disabled||null,t.Cb(e,11).disabled.toString(),"NoopAnimations"===t.Cb(e,11)._animationMode),n(e,13,0,t.Cb(e,14).target,t.Cb(e,14).href,t.Cb(e,15).disabled?-1:t.Cb(e,15).tabIndex||0,t.Cb(e,15).disabled||null,t.Cb(e,15).disabled.toString(),"NoopAnimations"===t.Cb(e,15)._animationMode),n(e,17,0,t.Cb(e,18).target,t.Cb(e,18).href,t.Cb(e,19).disabled?-1:t.Cb(e,19).tabIndex||0,t.Cb(e,19).disabled||null,t.Cb(e,19).disabled.toString(),"NoopAnimations"===t.Cb(e,19)._animationMode)})}function un(n){return t.Kb(0,[(n()(),t.sb(0,0,null,null,1,"app-root",[],null,null,null,an,rn)),t.rb(1,49152,null,0,on,[],null,null)],null,null)}var sn=t.ob("app-root",on,un,{},{},[]),cn=l("t/Na"),dn=function(){return function(){}}(),pn=l("hXKo");l.d(e,"RootModuleNgFactory",function(){return bn});var bn=t.pb(i,[],function(n){return t.zb([t.Ab(512,t.j,t.db,[[8,[o.a,ln,sn]],[3,t.j],t.x]),t.Ab(4608,s.m,s.l,[t.u,[2,s.y]]),t.Ab(5120,t.b,function(n,e){return[(l=n,t=e,function(){if(Object(s.v)(t)){var n=Array.from(l.querySelectorAll("[class*=flex-layout-]")),e=/\bflex-layout-.+?\b/g;n.forEach(function(n){n.classList.contains("flex-layout-ssr")&&n.parentNode?n.parentNode.removeChild(n):n.className.replace(e,"")})}})];var l,t},[s.d,t.B]),t.Ab(4608,Q,L,[P,T]),t.Ab(4608,c.i,c.i,[]),t.Ab(4608,cn.h,cn.n,[s.d,t.B,cn.l]),t.Ab(4608,cn.o,cn.o,[cn.h,cn.m]),t.Ab(5120,cn.a,function(n){return[n]},[cn.o]),t.Ab(4608,cn.k,cn.k,[]),t.Ab(6144,cn.i,null,[cn.k]),t.Ab(4608,cn.g,cn.g,[cn.i]),t.Ab(6144,cn.b,null,[cn.g]),t.Ab(4608,cn.f,cn.j,[cn.b,t.q]),t.Ab(4608,cn.c,cn.c,[cn.f]),t.Ab(4608,r,r,[]),t.Ab(1073742336,s.c,s.c,[]),t.Ab(1073742336,tn.q,tn.q,[[2,tn.w],[2,tn.n]]),t.Ab(1073742336,E,E,[]),t.Ab(1073742336,S.a,S.a,[]),t.Ab(1073742336,N,N,[]),t.Ab(1073742336,R,R,[]),t.Ab(1073742336,D,D,[]),t.Ab(1073742336,F,F,[[2,B],t.B]),t.Ab(1073742336,K.l,K.l,[[2,K.d],[2,W.g]]),t.Ab(1073742336,V.b,V.b,[]),t.Ab(1073742336,K.u,K.u,[]),t.Ab(1073742336,U.c,U.c,[]),t.Ab(1073742336,K.m,K.m,[]),t.Ab(1073742336,dn,dn,[]),t.Ab(1073742336,c.h,c.h,[]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,K.s,K.s,[]),t.Ab(1073742336,Y,Y,[]),t.Ab(1073742336,z,z,[]),t.Ab(1073742336,u,u,[]),t.Ab(1073742336,cn.e,cn.e,[]),t.Ab(1073742336,cn.d,cn.d,[]),t.Ab(1073742336,pn.a,pn.a,[]),t.Ab(1073742336,i,i,[]),t.Ab(256,cn.l,"XSRF-TOKEN",[]),t.Ab(256,cn.m,"X-XSRF-TOKEN",[]),t.Ab(1024,tn.l,function(){return[[{path:"",component:on}]]},[])])})}}]);