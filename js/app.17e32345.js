(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"65ec038b"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"723d29d9"}[t]+".css",i=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],m.parentNode.removeChild(m),a(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}i[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0367":function(t,e,a){},"074d":function(t,e){t.exports="data:image/png;base64,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"},"07af":function(t,e,a){},"07f5":function(t,e,a){t.exports=a.p+"img/img13.c285d863.png"},"083e":function(t,e,a){},"107b":function(t,e,a){t.exports=a.p+"img/img1.7a130f37.png"},"2aa7":function(t,e,a){},3361:function(t,e,a){t.exports=a.p+"img/img11.94e523c7.png"},"371a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact",attrs:{id:"about"}},[s("h1",{staticClass:"black"},[t._v("I'm Andrés Quintero...")]),s("h2",{staticClass:"black"},[t._v("From Venezuela, I am a young born in 2001. I am currently studying Computing Science, studying 4 semester and with a view to finishing the degree. I'm also looking to study web design and multimedia animation.")]),s("br"),s("div",{staticClass:"images"},[s("img",{attrs:{src:a("790d"),alt:""}})]),s("br"),s("h2",[t._v("I'm very passionate about video and animation and how this can convey feelings and messages in a very artistic, subtle and beautiful way. I think that what defines me the most would be that ability of ingenuity that many times we all need to be able to send the message we want to the listeners.")]),s("br"),s("div",{staticClass:"images"},[s("iframe",{attrs:{width:"900px",height:"100%",src:"https://www.youtube.com/embed/1up3HuLQxPc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),s("br"),s("h2",[t._v("I want everyone around the world to see my work, that some feel identified or not, but that anyone can see it. And that is something that most people who love this world have inside us. That's why I think it's important to put this here.")]),s("br"),s("div",{staticClass:"images"},[s("img",{attrs:{src:a("c42a"),alt:""}})]),s("br"),s("h2",[t._v("Besides all this, I am a sports fan; especially football. I love strategy and analysis in everything that can be implemented (Everything can be analyzed xD).")]),s("br"),s("div",{staticClass:"images"},[s("img",{attrs:{src:a("ae43"),alt:""}})]),s("br"),s("h2",[t._v("I also like music of all genres. I love hearing the sound of the melody of a music combined with the human voice that shapes a structured message with lyrics.")]),s("br"),s("div",{staticClass:"images"},[s("img",{attrs:{src:a("c115"),alt:""}})]),s("br"),s("h2",[t._v("And of course, I love video games. Since I was a kid I use the computer, and since I was a kid I use games as a way of distraction, learning and socialization.")]),s("br"),s("div",{staticClass:"images"},[s("img",{attrs:{src:a("4026"),alt:""}})]),s("br")])}],i={name:"Contact"},r=i,o=(a("610c"),a("2877")),c=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},4026:function(t,e,a){t.exports=a.p+"img/img22.3c73f5b0.jpg"},"4f01":function(t,e,a){t.exports=a.p+"img/img9.164421d2.png"},5127:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=a("2877"),o={},c=Object(r["a"])(o,n,i,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Load"),a("Cover",{attrs:{message:"#drawing"}}),a("Shadow"),a("Spaces"),a("Carousel",{attrs:{title:"DRAWING",man:"drawing"}}),a("Spaces"),a("Carousel",{attrs:{title:"WEB DESIGN",man:"web"}}),a("Spaces"),a("Carousel",{attrs:{title:"BRANDING",man:"branding"}}),a("Spaces"),a("Carousel",{attrs:{title:"EDITS",man:"edits"}}),a("Spaces"),a("Contact"),a("Footer")],1)},m=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover"},[s("Nav"),s("NavMobile"),s("div",{staticClass:"wrap"},[s("div",{staticClass:"text1"},[t._v("DISCOVER")]),s("div",{staticClass:"text2"},[t._v("MY WORK")]),s("div",{staticClass:"arrow"},[s("a",{attrs:{href:t.identifier}},[s("img",{attrs:{src:a("074d"),alt:"down"}})])])]),s("div",{staticClass:"shadowa",attrs:{id:"hh"}})],1)},g=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"landscape"},[t.barra?s("div",{staticClass:"logo activ",on:{click:function(e){t.show=!t.show,t.barra=!t.barra}}},[s("img",{attrs:{src:a("db3f"),alt:""}})]):t._e(),t.barra?t._e():s("div",{staticClass:"logo disabl",on:{click:function(e){t.show=!t.show,t.barra=!t.barra}}},[s("img",{attrs:{src:a("db3f"),alt:""}})]),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInLeft","leave-active-class":"animated slideOutLeft"}},[t.show?s("nav",{staticClass:"one"},[s("div",{staticClass:"menua"},[s("ul",[s("div",{staticClass:"linkst"},[s("li",[s("a",{attrs:{href:"#drawing"}},[t._v("GALLERY")])]),s("li",[s("a",{attrs:{href:"#about"}},[t._v("ABOUT")])])]),s("div",{staticClass:"linksi"},[s("li",[s("a",{staticClass:"facebook rrss",attrs:{href:"https://www.facebook.com/quand.mind/",target:"blank"}})]),s("li",[s("a",{staticClass:"instagram rrss",attrs:{href:"https://www.instagram.com/quand_mind/",target:"blank"}})]),s("li",[s("a",{staticClass:"twitter rrss",attrs:{href:"https://twitter.com/Quand_Mind",target:"blank"}})])])])])]):t._e()])],1)},h=[],A={name:"Nav",data:function(){return{show:!1,barra:!0}}},v=A,b=(a("5b49"),Object(r["a"])(v,p,h,!1,null,null,null)),C=b.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"portrait"},[s("div",{attrs:{id:"l_container"}},[t.bar?s("div",{staticClass:" activ",attrs:{id:"logo_m"},on:{click:t.clickLogo}},[s("img",{attrs:{src:a("db3f"),alt:""}})]):t._e(),t.bar?t._e():s("div",{staticClass:" disabl",attrs:{id:"logo_m"},on:{click:t.clickLogo}},[s("img",{attrs:{src:a("db3f"),alt:""}})])]),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInDown","leave-active-class":"animated slideOutUp"}},[t.show?s("nav",{staticClass:"two"},[s("div",{staticClass:"menub"},[s("ul",[s("div",{staticClass:"linkst"},[s("li",[s("a",{attrs:{href:"#drawing"}},[t._v("GALLERY")])]),s("li",[s("a",{attrs:{href:"#about"}},[t._v("ABOUT")])])]),s("div",{staticClass:"linksi"},[s("li",[s("a",{staticClass:"facebook rrss",attrs:{href:"https://www.facebook.com/quand.mind/",target:"blank"}})]),s("li",[s("a",{staticClass:"instagram rrss",attrs:{href:"https://www.instagram.com/quand_mind/",target:"blank"}})]),s("li",[s("a",{staticClass:"twitter rrss",attrs:{href:"https://twitter.com/Quand_Mind",target:"blank"}})])])])])]):t._e()])],1)},y=[],k={name:"NavMobile",data:function(){return{show:!1,bar:!0}},methods:{clickLogo:function(){var t=this,e=document.getElementById("l_container");setTimeout((function(){!1===t.bar?e.style="background: white;":e.style="background: none;"}),200),this.show=!this.show,this.bar=!this.bar}}},E=k,O=(a("ef87"),Object(r["a"])(E,w,y,!1,null,null,null)),S=O.exports,x={name:"Cover",components:{NavMobile:S,Nav:C},data:function(){return{identifier:this.message}},methods:{mesageAn:function(){return console.log("holis")}},props:{message:String}},I=x,B=(a("e028"),Object(r["a"])(I,f,g,!1,null,null,null)),D=B.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow"},[a("div",{staticClass:"shadowb"})])}],U={name:"Shadow"},Q=U,L=(a("e3c0"),Object(r["a"])(Q,R,N,!1,null,null,null)),_=L.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all",attrs:{id:[t.carousel]}},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"content"},["drawing"===t.carousel?a("div",{staticClass:"back",class:t.carousel,on:{click:function(e){return t.backImage(t.carousel)}}},[a("img",{attrs:{src:t.back,alt:""}})]):t._e(),"web"===t.carousel?a("div",{staticClass:"back",class:t.carousel,on:{click:function(e){return t.backImage(t.carousel)}}},[a("img",{attrs:{src:t.back,alt:""}})]):t._e(),"branding"===t.carousel?a("div",{staticClass:"back",class:t.carousel,on:{click:function(e){return t.backImage(t.carousel)}}},[a("img",{attrs:{src:t.back,alt:""}})]):t._e(),"edits"===t.carousel?a("div",{staticClass:"back",class:t.carousel,on:{click:function(e){return t.backImage(t.carousel)}}},[a("img",{attrs:{src:t.back,alt:""}})]):t._e(),"drawing"===t.carousel?a("div",{staticClass:"carousel"},t._l(t.drawing,(function(e,s){return a("div",{key:s,staticClass:"section",class:[t.carousel+"ex"]},[a("div",{staticClass:"description"},[a("h1",[t._v(t._s(e.name))]),a("h4",[t._v(t._s(e.description))])]),a("div",{staticClass:"wrapin"},[a("img",{attrs:{src:e.url,alt:""}})])])})),0):t._e(),"web"===t.carousel?a("div",{staticClass:"carousel"},t._l(t.web,(function(e,s){return a("div",{key:s,staticClass:"section",class:[t.carousel+"ex"]},[a("div",{staticClass:"description"},[a("h1",[t._v(t._s(e.name))]),a("h4",[t._v(t._s(e.description))])]),a("div",{staticClass:"wrapin"},[a("img",{attrs:{src:e.url,alt:""}})])])})),0):t._e(),"branding"===t.carousel?a("div",{staticClass:"carousel"},t._l(t.branding,(function(e,s){return a("div",{key:s,staticClass:"section",class:[t.carousel+"ex"]},[a("div",{staticClass:"description"},[a("h1",[t._v(t._s(e.name))]),a("h4",[t._v(t._s(e.description))])]),a("div",{staticClass:"wrapin"},[a("img",{attrs:{src:e.url,alt:""}})])])})),0):t._e(),"edits"===t.carousel?a("div",{staticClass:"carousel"},t._l(t.edits,(function(e,s){return a("div",{key:s,staticClass:"section",class:[t.carousel+"ex"]},[a("div",{staticClass:"description"},[a("h1",[t._v(t._s(e.name))]),a("h4",[t._v(t._s(e.description))])]),a("div",{staticClass:"wrapin"},[a("img",{attrs:{src:e.url,alt:""}})])])})),0):t._e(),"drawing"===t.carousel?a("div",{staticClass:"next",attrs:{id:t.carousel},on:{click:function(e){return t.nextImage(t.carousel)}}},[a("img",{attrs:{src:t.next,alt:""}})]):t._e(),"web"===t.carousel?a("div",{staticClass:"next",attrs:{id:t.carousel},on:{click:function(e){return t.nextImage(t.carousel)}}},[a("img",{attrs:{src:t.next,alt:""}})]):t._e(),"branding"===t.carousel?a("div",{staticClass:"next",attrs:{id:t.carousel},on:{click:function(e){return t.nextImage(t.carousel)}}},[a("img",{attrs:{src:t.next,alt:""}})]):t._e(),"edits"===t.carousel?a("div",{staticClass:"next",attrs:{id:t.carousel},on:{click:function(e){return t.nextImage(t.carousel)}}},[a("img",{attrs:{src:t.next,alt:""}})]):t._e()])])},z=[],G={name:"Carousel",data:function(){return{drawing:[{name:"BACKGROUND COVER #1",description:"April, 2019",url:a("71cf")},{name:"ANIME DRAW",description:"May, 2019",url:a("107b")},{name:"DRAW DIGITALIZATION #1",description:"June, 2019",url:a("6bba")},{name:"DRAW DIGITALIZATION #2",description:"Jule, 2019",url:a("fbf3")},{name:"BACKGROUND COVER #2",description:"Jule, 2019",url:a("7a58")},{name:"PHOTO DIGITALIZATION",description:"2019",url:a("b71a")}],web:[{name:"GROWPAD WEB DESIGN",description:"May, 2019",url:a("8cf3")},{name:"3DIMENSIONAL CONTACT WEB DESIGN",description:"September, 2019",url:a("ff38")},{name:"IUJO WEB DESIGN",description:"December, 2019",url:a("94e7")}],branding:[{name:"ORIANA'S BRANDING",description:"May, 2019",url:a("4f01")},{name:"PULLCRO LOGO",description:"December, 2019",url:a("8c60")},{name:"QUAND LOGO",description:"March, 2019",url:a("3361")}],edits:[{name:"QUAND COVER",description:"January, 2020",url:a("9bbe")},{name:"VIDEO COVER #1",description:"January, 2020",url:a("07f5")},{name:"VIDEO COVER #2",description:"December, 2018",url:a("e394")},{name:"VIDEO COVER #3",description:"June, 2018",url:a("b477")}],carousel:this.man,back:a("8714"),next:a("dde2"),y:0}},props:{title:String,man:String},methods:{backImage:function(t,e){var a=document.getElementsByClassName([t]+"ex");for(e in this.y=this.y-100,this.y<0&&(this.y=100*(a.length-1)),a)a[e].style="transform :translate(".concat(-this.y,"%);");return console.log(this.y)},nextImage:function(t){var e,a=document.getElementsByClassName([t]+"ex");this.y;for(e in this.y=this.y+100,this.y>100*(a.length-1)&&(this.y=0),a)a[e].style="transform :translate(".concat(-this.y,"%);");return console.log(this.y)}}},q=G,j=(a("88bf"),Object(r["a"])(q,Z,z,!1,null,null,null)),J=j.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space"})},T=[],W={name:"Spaces"},K=W,M=(a("ea5c"),Object(r["a"])(K,H,T,!1,null,null,null)),P=M.exports,V=a("fd2d"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.show?a("div",{staticClass:"preloader"},[a("div",{staticClass:"load"}),a("div",{staticClass:"points"},[a("div"),a("div"),a("div")])]):t._e()])},Y=[],X={name:"Load",data:function(){return{show:!0}},mounted:function(){this.showToggle()},methods:{showToggle:function(){var t=this;setTimeout((function(){t.show=!1;var e=document.querySelector("html");e.style="overflow:auto;"}),3e3)}}},$=X,tt=(a("7e0b"),Object(r["a"])($,F,Y,!1,null,null,null)),et=tt.exports,at=a("371a"),st={name:"home",components:{Cover:D,Shadow:_,Carousel:J,Spaces:P,Footer:V["a"],Contact:at["a"],Load:et}},nt=st,it=(a("cccb"),Object(r["a"])(nt,d,m,!1,null,null,null)),rt=it.exports;s["a"].use(u["a"]);var ot=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ct=new u["a"]({mode:"history",base:"/",routes:ot}),lt=ct,ut=a("2f62");s["a"].use(ut["a"]);var dt=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}}),mt=a("d973");a("77ed");s["a"].use(mt["a"]),s["a"].config.productionTip=!1,new s["a"]({router:lt,store:dt,render:function(t){return t(l)}}).$mount("#app")},"58de":function(t,e,a){},"5b49":function(t,e,a){"use strict";var s=a("58de"),n=a.n(s);n.a},"5ced":function(t,e,a){},"610c":function(t,e,a){"use strict";var s=a("0367"),n=a.n(s);n.a},"6bba":function(t,e,a){t.exports=a.p+"img/img2.7039b906.png"},"71cf":function(t,e,a){t.exports=a.p+"img/img-c.34400cc1.png"},"760c":function(t,e,a){"use strict";var s=a("c3f5"),n=a.n(s);n.a},"790d":function(t,e,a){t.exports=a.p+"img/img17.1c773975.png"},"7a58":function(t,e,a){t.exports=a.p+"img/img4.9f848acf.png"},"7e0b":function(t,e,a){"use strict";var s=a("07af"),n=a.n(s);n.a},8334:function(t,e,a){},8714:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABpCAYAAACZHWXUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMDowMTozMCAxNDo0MTo0NUC0QaIAAALaSURBVHhe7Zttbd1AEEWjIgiEQiiEQgiEQiiEQngQCiEQAiEQAiEM2rnpm2i62h2N7V3L83GkK2X/WC8T74mv/fxQDHmk3L78+7lo+EZ5obx9rIr/+EF5pzx/rIpPsKUwlD8UnDlYF3ewpTAUDAfBurjzk8KDQbAuCLmlOOWdO98pELEcDtblHeIXRQ6Gg6Gl5isF1za94WBoqXmitFuKg6Gl5kbpDQZJ7R1cy7xSeoPhpPUO14XeUDgpvYPt8pvSG4hMSu+0dWGUlN5p64KWVN7p1QUtqbzTqwtaUnlnVBdGSeMdrS5oSeEdrS5oSeEdrS5oCe8dS10YJbx3LHVBS1jvWOuClrDesdYFLWG9s6UujBLSO1vrgpZw3sEvdHRLccJ5Z2td0BLKO9hSe+rCKPAOKkgI9tYFLThmCPbWBS04pntw+u+tC1pwTPccrQujuPfOjLqgxbV3jjRwS1x7Z0Zd0OLWOzPrwihuvTOzLmhx6Z2ZdUGLO+/Mrgta3HlnRV0YxZ13VtQFLW68s6ouaHHjnVV1QYsL76yuC6O48M7quqDl8t5BXTh7S3Eu7Z0z6oKWS3tnxgO7I7m0d/DBeh/6zFz+kU2dQQbKQUbqv5iBug4yUFfSRqqLGcBf9Owt5+4uIqj7QQbqjqKBuidtpJ5qGKjnYgbOqClufSSpZ/MG6tsdBlbXFNc+ktQ3zAysqikhfCRZUVNC+EiyoqaE8REzu6aE8pGk3tUwUG/7GJhZU8K9LyapNw4NzHiAGdZHzIyaEtZHknpv3sCROwPhfSTZW1PC+0iyt6ak8BGDSrGnpqTwkWRrTUnlIwZnxZYtl8pHzNaakspHki01JZ2PGGtNSekjxlpTUvpIYqkpaX3EWGpKWh9JtJqS2kcSraak9xGj1ZT0PpKMakr5SNCrKeWjhl5NwbpoaGsK1kVDW1OwLhrklsOwykcDuKaUjxS4ppSPFGiLPdz+As4Fz2dOdn2eAAAAAElFTkSuQmCC"},"88bf":function(t,e,a){"use strict";var s=a("ff6c"),n=a.n(s);n.a},"8c60":function(t,e,a){t.exports=a.p+"img/img10.5a9a7343.png"},"8cf3":function(t,e,a){t.exports=a.p+"img/img6.5a6411e0.png"},"94e7":function(t,e,a){t.exports=a.p+"img/img8.736af88b.png"},"9bbe":function(t,e,a){t.exports=a.p+"img/img12.453f5f25.png"},ae43:function(t,e,a){t.exports=a.p+"img/img16.e875eb2d.jpg"},b477:function(t,e,a){t.exports=a.p+"img/img15.ec70f443.png"},b71a:function(t,e,a){t.exports=a.p+"img/img5.b16accc6.png"},c115:function(t,e,a){t.exports=a.p+"img/img18.165556e7.png"},c3f5:function(t,e,a){},c42a:function(t,e,a){t.exports=a.p+"img/img20.3746d486.png"},cccb:function(t,e,a){"use strict";var s=a("5ced"),n=a.n(s);n.a},db3f:function(t,e,a){t.exports=a.p+"img/resource3.24fe0c1e.png"},dde2:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABpCAYAAACZHWXUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMDowMTozMCAxNDo0MTo0NUC0QaIAAAQDSURBVHhe7ZvdceIwFIU92QKgA+gAOoDHvFFCSqAEtgNKoAToADogHUAHKYHd40HhJsiypStd/aBv5jyQYXaHb+2zHDtu1uv17evr61bR8zadTpvlctl8fn42FQ2wtFqtbqPR6Lbb7VprlQetIJxik8nkBl+QVU+5B60gcD6fW0EIZOF1hQgC2+32WxKC16/OD0EApxiV9Oqn3JMgyEBhU0l4fTwe7+94LZ4EAcigglQ2m839Ha+DVhCADJ2kxWJxu1wu93eVT6cgABk6STjl9vv9/V1lYxSk6yMazJTSMQoCXX2kMpvNiv7O1CsIdPWRSskzZZAg0NVHNB8fH8V9ZxosqK+PVEqbKYMFgb4+oillplgJAn19RFPCTLEWBIb0kUruM8VJ0NA+osl1pjgJAjZ9pJLjTHEWBGz6SAVHXk4zhSUI2PQRTS4zhS3IpY9UcpgpbEHApY9UIDflmeJFEHDpI5pUZ4o3QcC1j1RSnCleBXH6iCalmeJVEOD0EU0qM8W7IMDtIxWccrFnShBBgNtHNDFnSjBBmBQ++kgFwmOccsEEAUwK3Yd1TYyZElQQwKTQfVhOJGdKcEEAk0L3QTnBnylxZUBEkO8+UpGYKSKCgO8+ogk5U8QEgRB9pBLqyoCoIBCij2h8zxRxQaH6iMbnTBEXBEL2kYqvmRJFEAjZRzTcmRJNEAjdRyqcmRJVkEQfqbjOlKiCgEQf0djOlOiCgFQfqdjMlCQEAak+Uhk6U5IRJNlHNH0zJRlBQLqPVEwzJSlBQLqPVHD06mZKcoKAdB/R/J4pSQqK1Ucq9AZmkoKAr1tHnOAfqh5BmiR/BNUOMlD/FzNQvwcZqN+ke6hbzEBd8wbq9SADkr2Dvye7K4pSvZPlNWmp3snyroZE72R7X0yid7K+sxq6d7K+Nx+yd0xzgYOYoJC9k/3vB4XqnaFzgYOIoBC9YzMXOAQXFKJ3bOcCh6CCfPeO61zgEEyQ794p7jft67MaBnzdsinyaZ/6vJgBfCAfvVPsE4fc3qE37FLBmyBu7xT91DOndyTmAge2IE7vhFrgPmELcu0dybnAgSXIpXdizAUOzoJcegdHm8QC94mTIJfeiTkXODgJsukdiIw9FzhYC7LpnVTmAgcrQTa9k9Jc4DBY0NDeSXEucBgsaEjvpDoXOAwS1Nc7OLJSngscegX19U4Oc4GDUVBf7+QyFzgYBXX1DqTlNBc4dArq6p0c5wIHraCu3sl1LnB4EqTrHbzOeS5weBKEeUDllDAXOPwQhHlA5ZQyFzh8C8J3GSWmtLnAoRWEUwhSIOfVT6nftIIgpeS5wOHPeDz+ezqdmsPh0Ly/v/8/iCqUt+v12kDQfD6//6jyoGn+Aaz/ACS0AomRAAAAAElFTkSuQmCC"},e028:function(t,e,a){"use strict";var s=a("2aa7"),n=a.n(s);n.a},e394:function(t,e,a){t.exports=a.p+"img/img14.9750e360.png"},e3c0:function(t,e,a){"use strict";var s=a("083e"),n=a.n(s);n.a},ea5c:function(t,e,a){"use strict";var s=a("5127"),n=a.n(s);n.a},ef87:function(t,e,a){"use strict";var s=a("8334"),n=a.n(s);n.a},fbf3:function(t,e,a){t.exports=a.p+"img/img3.89d737b1.png"},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("h2",{staticClass:"t-behance"},[t._v("Follow me on")]),a("a",{staticClass:"behance",attrs:{target:"blank",href:"https://www.behance.net/quand_mind"}}),a("h2",{staticClass:"t-behance"},[t._v(" to see my work.")])])}],i={name:"Footer"},r=i,o=(a("760c"),a("2877")),c=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},ff38:function(t,e,a){t.exports=a.p+"img/img7.d7502246.png"},ff6c:function(t,e,a){}});
//# sourceMappingURL=app.17e32345.js.map