webpackJsonp([1],{"/F+2":function(t,e){},"0et5":function(t,e){},"4ZbH":function(t,e){},"6/D1":function(t,e){},"9n10":function(t,e){},AKq8:function(t,e){},M6Sr:function(t,e){},MQk4:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("wmHC")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),u={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n\t\t\t"+this._s(this.city)+"\n\t\t\t"),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n\t\t输入城市/景点/游玩主题\n\t")])}]};var h=i("VU/8")(u,d,!1,function(t){i("T9pl")},"data-v-71e81106",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warpper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(p,m,!1,function(t){i("ciTa")},"data-v-31c68646",null).exports,f={name:"HomeIcons",props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}},data:function(){return{swiperOption:{autoplay:!1}}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var C=i("VU/8")(f,_,!1,function(t){i("wxRm")},"data-v-adb73098",null).exports,y={name:"HomeRecommend",props:{list:Array}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热门推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var g=i("VU/8")(y,w,!1,function(t){i("/F+2")},"data-v-52dd2e67",null).exports,b={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("PhBy")},"data-v-0f3af3aa",null).exports,S=i("mtWM"),$=i.n(S),E={name:"Home",components:{HomeHeader:h,HomeSwiper:v,HomeIcons:C,HomeRecommend:g,HomeWeekend:x},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){$.a.get("https://jueliany.github.io/demo/qunarjson/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var H=i("VU/8")(E,I,!1,function(t){i("U0ch")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])]),this._v("\n\t城市选择\n")],1)},staticRenderFns:[]};var R=i("VU/8")({name:"CityHeader"},L,!1,function(t){i("4ZbH")},"data-v-7a1459b2",null).exports,T=i("GQaK"),F={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new T.a(this.$refs.search)}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var A=i("VU/8")(F,U,!1,function(t){i("ublS")},"data-v-749d9d27",null).exports,N={name:"CityList",props:{hot:Array,cities:Object,letter:String},methods:c()({handleChangeCity:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),computed:c()({},Object(l.c)(["city"])),mounted:function(){this.scroll=new T.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleChangeCity(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleChangeCity(e.name)}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}))])})],2)])},staticRenderFns:[]};var V=i("VU/8")(N,O,!1,function(t){i("6/D1")},"data-v-2903de6b",null).exports,j={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n    "+t._s(e)+"\n  ")])}))},staticRenderFns:[]};var G={name:"City",components:{CityHeader:R,CitySearch:A,CityList:V,CityAlphabet:i("VU/8")(j,D,!1,function(t){i("0et5")},"data-v-eaadb7c6",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){$.a.get("https://jueliany.github.io/demo/qunarjson/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(G,M,!1,function(t){i("MQk4")},"data-v-4b8b5961",null).exports,P={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var W=i("VU/8")(P,q,!1,function(t){i("AKq8")},"data-v-f25fef68",null).exports,Y={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var K=i("VU/8")({name:"FadeAnimation"},Y,!1,function(t){i("wIfK")},"data-v-1d6fcc0a",null).exports,z={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:W,FadeAnimation:K}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-tittle"},[t._v("\n        "+t._s(this.sightName)+"\n      ")]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.bannerImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var Z=i("VU/8")(z,Q,!1,function(t){i("xvR/")},"data-v-0e0768fc",null).exports,J={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var tt=i("VU/8")(J,X,!1,function(t){i("RyyS")},"data-v-79f408d2",null).exports,et={name:"DetailList",props:{list:Array}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var st={name:"Detail",components:{DetailBanner:Z,DetailHeader:tt,DetailList:i("VU/8")(et,it,!1,function(t){i("nE3l")},"data-v-8b9cc096",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){console.log(123),$.a.get("https://jueliany.github.io/demo/qunarjson/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var at=i("VU/8")(st,nt,!1,function(t){i("VaWC")},"data-v-11fda76e",null).exports;s.a.use(r.a);var rt=new r.a({routes:[{path:"/",name:"Home",component:H},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:at}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ot=i("v5o6"),ct=i.n(ot),lt=i("F3EI"),ut=i.n(lt),dt="上海";try{localStorage.city&&(dt=localStorage.city)}catch(t){}var ht={city:dt},pt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var mt=new l.a.Store({state:ht,mutations:pt});i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,ct.a.attach(document.body),s.a.use(ut.a),new s.a({el:"#app",store:mt,router:rt,components:{App:a},template:"<App/>"})},PhBy:function(t,e){},RyyS:function(t,e){},T9pl:function(t,e){},TzC8:function(t,e){},U0ch:function(t,e){},VaWC:function(t,e){},ciTa:function(t,e){},nE3l:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},ublS:function(t,e){},v2ns:function(t,e){},wIfK:function(t,e){},wmHC:function(t,e){},wxRm:function(t,e){},"xvR/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2bfb42daa9d6f49582fd.js.map