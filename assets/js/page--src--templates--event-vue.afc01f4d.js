(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1sm3":function(t,e,a){},MGyW:function(t,e,a){},Nz9u:function(t,e,a){},SOsQ:function(t,e,a){"use strict";a.r(e);var n=a("pvRw"),i=a("bPVL"),s=a("ziVZ"),r=(a("MGyW"),Object(n.c)({name:"back-to",props:{to:{type:String,required:!0},label:String}})),o=a("KHd+"),c=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-to"},[e("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}})]),e("g-link",{attrs:{to:this.to}},[this._v("\n    "+this._s(this.label||this.$t("back"))+"\n  ")])],1)}),[],!1,null,null,null).exports,l=a("YqRG"),u=(a("Nz9u"),Object(n.c)({name:"participants",components:{ImageHex:l.a},props:{participants:Array}})),p=Object(o.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"participants"},[a("header",[a("h2",[t._v(t._s(t.$t("participants.title")))])]),a("ul",t._l(t.participants,(function(e){return a("li",{key:e.name,staticClass:"participant"},[a("g-link",{attrs:{to:e.path}},[a("image-hex",{attrs:{src:e.image||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=",width:"120",height:"100",alt:e.name}})],1),a("div",{staticClass:"meta"},[a("h3",[a("g-link",{attrs:{to:e.path}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1),a("p",[t._v("\n          "+t._s(e.excerpt)+" "),a("g-link",{attrs:{to:e.path}},[t._v(t._s(t.$t("view-more")))])],1)])],1)})),0)])}),[],!1,null,null,null).exports,g=a("oXBM"),v=Object(n.c)({name:"event-detail",components:{BackTo:c,Participants:p,ContentExternalLinks:g.a},filters:{formatDate:i.a},setup:function(t,e){var a=Object(n.d)();return{back:Object(n.a)((function(){switch((null==a?void 0:a.proxy).$page.event.type){case"laretas-geek":return"/laretas-geek";case"laretas-ama":return"/laretas-ama";case"laretas-java":return"/laretas-jave"}return"/"})),youtubeEmbedLink:function(t){return s.a.embedLink(t)}}}}),f=null,h=Object(o.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",[a("article",{staticClass:"article laretas-event"},[a("back-to",{attrs:{to:t.back}}),a("header",{staticClass:"article-header"},[a("h4",{staticClass:"article-date"},[t._v("\n        "+t._s(t._f("formatDate")(new Date(t.$page.event.date)))+"\n      ")]),a("h1",{staticClass:"article-title"},[t._v("\n        "+t._s(t.$page.event.title)+"\n      ")])]),t.youtubeEmbedLink(t.$page.event.youtube)?a("div",{staticClass:"article-video responsive-embed-wrapper"},[a("iframe",{attrs:{width:"1440",height:"762",src:t.youtubeEmbedLink(t.$page.event.youtube)+"?showinfo=0",frameborder:"0",allow:"encrypted-media",allowfullscreen:""}})]):t._e(),a("content-external-links",{attrs:{youtube:t.$page.event.youtube,ivoox:t.$page.event.ivoox,spotify:t.$page.event.spotify}}),a("article",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article-content",domProps:{innerHTML:t._s(t.$page.event.content)}}),a("participants",{attrs:{participants:t.$page.event.participants}}),a("back-to",{attrs:{to:t.back}})],1)])}),[],!1,null,null,null);"function"==typeof f&&f(h);e.default=h.exports},YqRG:function(t,e,a){"use strict";var n=a("pvRw"),i=(a("k5EG"),Object(n.c)({name:"image-hex",props:{src:String,alt:String,width:[String,Number],height:[String,Number],fit:String}})),s=a("KHd+"),r=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image-hex"},[e("g-image",{attrs:{src:this.src,width:this.width,alt:this.alt,height:this.height,fit:this.fit}})],1)}),[],!1,null,null,null).exports;e.a=r},bPVL:function(t,e,a){"use strict";var n=a("pvRw"),i=a("sWYD"),s=a("ruW4"),r=a("1UYf");e.a=function(t,e){void 0===e&&(e="E, d LLLL yyyy");var a=Object(n.d)(),o="gl-es"===((null==a?void 0:a.proxy).$i18n.locale||"").toLowerCase()?s.a:r.a;return Object(i.a)(t,e,{locale:o})}},dNPo:function(t,e,a){t.exports=a.p+"assets/img/ivoox.33a2e1ad.svg"},k5EG:function(t,e,a){},l5oZ:function(t,e,a){t.exports=a.p+"assets/img/youtube.c4821792.svg"},oXBM:function(t,e,a){"use strict";var n=a("pvRw"),i=(a("1sm3"),Object(n.c)({name:"content-external-links",props:{youtube:String,ivoox:String,spotify:String},setup:function(t){}})),s=a("KHd+"),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"content-external-links"},[t.youtube?n("a",{ref:"noopener",staticClass:"youtube",attrs:{href:t.youtube,target:"_blank"}},[n("img",{attrs:{src:a("l5oZ"),alt:"Youtube"}})]):t._e(),t.ivoox?n("a",{ref:"noopener",staticClass:"ivoox",attrs:{href:t.ivoox,target:"_blank"}},[n("img",{attrs:{src:a("dNPo"),alt:"ivoox"}})]):t._e(),t.spotify?n("a",{ref:"noopener",staticClass:"sporify",attrs:{href:t.spotify,target:"_blank"}},[n("img",{attrs:{src:a("srjL"),alt:"Spotify"}})]):t._e()])}),[],!1,null,null,null).exports;e.a=r},srjL:function(t,e,a){t.exports=a.p+"assets/img/spotify.a2b010fe.svg"},ziVZ:function(t,e,a){"use strict";var n=function(t){return new URL(t).searchParams.get("v")};e.a={getYTIdFromUrl:n,coverUrl:function(t){if(t){var e=n(t);return e?"https://img.youtube.com/vi/"+e+"/hqdefault.jpg":""}return""},embedLink:function(t){if(t){var e=n(t);return e?"https://www.youtube-nocookie.com/embed/"+e:""}return""}}}}]);