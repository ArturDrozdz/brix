KISSY.add("brix/gallery/sidenav/index",function(e,t){return t.extend({initializer:function(){},bindUI:function(){var t=this,i=this.get("el");this.sidebar=i,this.main=e.all(this.get("inmain")),this.allLinks=this.sidebar.all("a"),this.nav=i.all(".nav"),this.subNav=i.all(".sub-nav"),this.subNavWrap=i.all(".sub-nav-wrap"),this.subNavHandle=i.all(".subnav-handle"),this.pathMap=this.get("pathMap"),this.subNavView=e.all('<div class="sub-nav-view"></div>').appendTo("body"),this.localStorage=window.localStorage,this.isFullSubNav=this.localStorage&&this.localStorage.isFullSubNav||"1","0"===this.isFullSubNav&&this.subNavHandle.replaceClass("icon-expand","icon-collapse"),this.index=this.get("index"),this.duration=this.get("duration"),this.isHandleClick=!1,t.navTop=this.get("navTop")||t.nav.offset().top,this._pathname2sidebar()},destructor:function(){this.subNavView.remove()},_getPathname:function(e){var t,i=/(^#!\/[^\?]+)\??[^\/]*$/.exec(e);return t=i&&i[1]||""},_pathname2sidebar:function(){var t=this,i=this._getPathname(location.hash)||this.index;return e.each(this.pathMap,function(e,t){return i===t?(i=e,!1):void 0}),""===i?(this._setNoSelectedNav(),void 0):(this.sidebar.all("a").each(function(e){var a=e.attr("href");return a=a.replace(/^.*?#/g,"#"),a=t._getPathname(a),a.slice(a.indexOf("#"))===i?(t.navclick(e,i),!1):void 0}),this.isNavClick=!1,void 0)},_setNoSelectedNav:function(){this.sidebar.all("a").removeClass("on"),this._collapseNav()},navclick:function(e,t){var i=this;t=t||this._getPathname(location.hash);var a,n=!1;if(this.nav.all("a").each(function(e){a=e.attr("href"),a=a.slice(a.indexOf("#")),a=i._getPathname(a),a===t&&(n=!0)}),n)i._expandCollapseNav(e);else{var r=e.parent("ul[data-sub]");if(!r)return;var s=i.nav.all("a[data-sub="+r.attr("data-sub")+"]");i._expandCollapseNav(s),i.subNav.all("a").removeClass("on"),i.subNav.all("a").each(function(e){return e.attr("href").replace(/^.*?#/g,"#")===t?(e.addClass("on"),!1):void 0})}i.isHandleClick=!1,i.nowNav=e,i.isNavClick=!0},_fixedStatic:function(){var t=this,i=Math.max(document.body.scrollTop,document.documentElement.scrollTop),a=i>t.navTop;a?(t.sidebar.addClass("sidebar-fixed"),6===e.UA.ie&&t.sidebar.css({position:"absolute",top:i+10})):(t.sidebar.removeClass("sidebar-fixed"),6===e.UA.ie&&t.sidebar.css({position:"static"}))},_timer:function(e,t){clearTimeout(this.itv),this.itv=setTimeout(e,t)},_setSubNavOn:function(e){var t=e.closest(".sub-nav-third");this.subNav.all("a, .icon-font").removeClass("on"),this.subNavView.all("a, .icon-font").removeClass("on"),e.addClass("on"),"0"===this.isFullSubNav&&t&&t.prev().addClass("on")},_expandCollapseNav:function(e){var t,i=this,a=e.attr("data-sub"),n=e.attr("href");if(n=n.slice(n.indexOf("#")),a){if(i.currentNav&&i.currentNav.hide(),i.currentNav=i.subNav.one('[data-sub="'+a+'"]'),i.currentNav.all("a").each(function(e){var i=e.attr("href");return i.slice(i.indexOf("#"))===n?(t=e,!1):void 0}),!t)return;i.currentSubNav=t,i._setSubNavOn(t),i.currentNav.show(),i._expandNav()}else i._collapseNav();i.nav.all("a").removeClass("on"),e.addClass("on")},_switchTrigger:function(){"1"===this.isFullSubNav?this.subNavHandle.replaceClass("icon-collapse","icon-expand"):"0"===this.isFullSubNav&&this.subNavHandle.replaceClass("icon-expand","icon-collapse")},_expandCollapseSubNav:function(){function e(){var e="1"===this.isFullSubNav;this.isFullSubNav=e?"0":"1",this.localStorage&&(this.localStorage.isFullSubNav=e?"0":"1")}var t=this,i=t.currentSubNav,a=i&&("LI"===i.prop("nodeName")?i.one("ul"):i.closest("ul")),n=a&&a.hasClass("sub-nav-third");"0"===t.isFullSubNav?(e.call(t),t._expandSubNav(),t._switchTrigger(),n&&a.prev()&&a.prev().removeClass("on")):"1"===t.isFullSubNav&&(t._collapseSubNav(function(){e.call(t),t._switchTrigger()}),n&&a.prev()&&a.prev().addClass("on"))},_collapseSubNav:function(e){this.subNav.animate({width:"16px","padding-top":"42px"},this.duration,"easeOut",e),this.main.animate({"margin-left":"116px"},this.duration,"easeOut"),this._collapseThirdNav()},_expandSubNav:function(e){this.subNav.animate({width:"140px","padding-top":"0px"},this.duration,"easeOut",e),this.main.animate({"margin-left":"240px"},this.duration,"easeOut"),this._expandThirdNav(),this.subNavView.css("left","-10000px")},_expandThirdNav:function(t){var i=this;if(i.nowNav){var a=i.nowNav.attr("data-sub");!a||a===i.currentNav.attr("data-sub")&&!i.isHandleClick?e.all(".sub-nav-third").css("height","auto"):e.all(".sub-nav-third").each(function(e){var a=e.css("height","auto").height();e.css("height",0),e.animate({height:a},i.duration,"easeOut",t)})}},_collapseThirdNav:function(t){e.all(".sub-nav-third").animate({height:0},this.duration,"easeOut",t)},_expandNav:function(e,t){this.subNav.show(),this.subNav.animate({width:"1"===this.isFullSubNav?"140px":"16px","padding-top":"1"===this.isFullSubNav?"0":"42px"},this.duration,"easeOut",t),this.subNavWrap.animate({"margin-left":"0"},this.duration,"easeOut",t),this.main.animate({"margin-left":"1"===this.isFullSubNav?"240px":"116px"},this.duration,"easeOut"),"1"===this.isFullSubNav?this._expandThirdNav():this._collapseThirdNav()},_collapseNav:function(e,t){var i=this;this.subNav.animate({width:"1px"},this.duration,"easeOut",function(){i.subNav.hide()}),this.subNavWrap.animate({"margin-left":"1"===this.isFullSubNav?"-140px":"-16px"},this.duration,"easeOut",t),this.main.animate({"margin-left":"100px"},this.duration,"easeOut")}},{ATTRS:{inmain:{value:"#inmain"},navTop:{value:null},index:{value:"#!/home"},duration:{value:.25},pathMap:{value:{}}},EVENTS:{".subnav-handle":{click:function(){this.isHandleClick=!0,this._expandCollapseSubNav()}},".sub-nav a":{click:function(t){var i=e.all(t.target).closest("a"),a=this,n=i.closest(".sub-nav-ul"),r=n.attr("data-sub");a.isHandleClick=!1,a.nowNav=a.nav.all("a[data-sub="+r+"]"),a.navclick(a.nowNav),a.currentSubNav=i.closest(".sub"),a._setSubNavOn(i),a.isNavClick=!0}},".sub-nav .sub-title":{click:function(t){var i=e.all(t.currentTarget),a=i.next(".sub-nav-third"),n=this;if("0px"===a.css("height")){var r=a.css("height","auto").height();a.css("height",0),a.animate({height:r},n.duration,"easeOut")}else a.animate({height:0},n.duration,"easeOut")}},".sub-nav .sub":{mouseenter:function(t){var i=this;if("0"===i.isFullSubNav){var a=e.all(t.target).closest(".sub"),n=a.offset();i.currentLi=a,i.subNavView.html(a.html()),i.subNavView.all(".sub-nav-third").css("height","auto"),i.subNavView.css(n)}}},".nav a":{click:function(t){this.navclick(e.all(t.target))}}},DOCEVENTS:{".sub-nav-view a":{click:function(t){var i=e.all(t.target).closest("a"),a=this;a._setSubNavOn(i),a.currentSubNav=a.currentLi,a.isNavClick=!0}},".sub-nav-view":{mouseleave:function(){var e=this;e.subNavView.css("left","-10000px"),e.subNavView.all(".sub-nav-third").css("height",0),e.currentLi.html(e.subNavView.html())}}},WINEVENTS:{scroll:function(){var e=this;e._timer(function(){e._fixedStatic()},10)},hashchange:function(){this.isNavClick||this._pathname2sidebar(),this.isNavClick=!1}},RENDERERS:{}},"sidenav")},{requires:["brix/core/brick"]});