!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=99)}([,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(100),n(101),n(102),n(103),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(32),n(33),n(34),n(35),n(36),t.exports=n(104)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){jQuery(function(t){var e=t(".dtq-news-tricker");e&&e.length>0&&e.each(function(){var e=t(this).find("#parent").width();t(this).get(0).style.setProperty("--width","".concat(e,"px"))});var n=t(".dtq-scroll-image");n&&n.length>0&&n.each(function(){var e=t(this).find(".dtq-scroll-image-el"),n=t(this).data("dir-hover"),i=t(this).data("dir-scroll");if("none"!==n){var o="",a="X"===n[0]?parseInt(e.width())-parseInt(t(this).width()):parseInt(e.height())-parseInt(t(this).height());parseInt(a)<1&&(a=0),"X_rtl"!==n&&"Y_btt"!==n||(o="-"),t(this).on("mouseenter",function(){e.css("transform","translate"+n[0]+"("+o+a+"px)")}),t(this).on("mouseleave",function(){e.css("transform","translate"+n[0]+"(0px)")})}if("none"!==i){var d=t(this).find(".dtq-scroll-image-overlay");"horizontal"===i?d.css({width:e.width(),height:e.height()}):d.css({width:"100%",height:"100%"})}});var i=t(".dtq-popup-yt, .dtq-popup-vm");i&&i.length>0&&i.each(function(){var e=t(this).attr("href"),n=t(this).data("type"),i=(t(this).data("source"),"");if("vm"===n){var o="";o=-1===e.indexOf("?")?"?autoplay=1":"&autoplay=1",i=-1===e.indexOf("player")?"//player.vimeo.com/video/%id%"+o:e+o}t(this).magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:i}}},callbacks:{beforeOpen:function(){var e=t(this.st.el).data("order");t("body").addClass("dtq-video-open dtq-video-popup-".concat(e))},close:function(){var e=t(this.st.el).data("order");t("body").removeClass("dtq-video-open dtq-video-popup-".concat(e))}}})}),t(".dtq-popup-video").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:100,closeOnContentClick:!1,midClick:!1,callbacks:{beforeOpen:function(){t("body").addClass("dtq-modal-open dtq-video-popup")},open:function(){var e=t(this.st.el).data("mfp-src");t(".dtq-modal").addClass("open"),t("".concat(e," video")).trigger("play")},close:function(){var e=t(this.st.el).data("mfp-src");t("".concat(e," video")).trigger("pause"),t("body").removeClass("dtq-modal-open dtq-video-popup"),t(".dtq-modal").removeClass("open")}}}),t(".dtq-image-compare").each(function(){var e=t(this).data("offsetpct"),n=t(this).data("moveonhover"),i=t(this).data("orientation"),o=t(this).data("beforelabel"),a=t(this).data("afterlabel"),d=t(this).data("overlay");t(this).find(".dtq-image-compare-container").twentytwenty({default_offset_pct:e,move_slider_on_hover:"on"===n,orientation:i,before_label:o,after_label:a,no_overlay:"on"!==d,move_with_handle_only:!1,click_to_move:!0})});var o=t(".dtq-tooltip");o&&o.length>0&&tippy(".dtq-tooltip",{trigger:"mouseenter"}),"undefined"!==typeof et_link_options_data&&et_link_options_data.forEach(function(e,n){t(document).on("click",".".concat(et_link_options_data[n].class),function(){window.open(et_link_options_data[n].url,et_link_options_data[n].target)})}),t(".dtq-animated-text").each(function(){var e=this,n=t(this).data("settings"),i=t(this).attr("id"),o=t(this).data("type");"typed"===o?new Typed("#".concat(i," .dtq-typed-text"),n):"tilt"===o?(t(this).find(".dtq-animated-text-tilt").textillate(n),console.log(n)):"slide"===o&&(t(this).find(".dtq-animated-text-slide").addClass("slide-initialized"),t(this).find(".dtq-animated-text-slide li").removeClass("text-in"),t(this).find(".dtq-animated-text-slide li").first().addClass("text-in"),setInterval(function(){var n=t(e).find(".dtq-animated-text-slide .text-in");n.addClass("text-out"),n.removeClass("text-in"),n.next().is("li")?(n.next().removeClass("text-out"),n.next().addClass("text-in")):(t(e).find(".dtq-animated-text-slide li").first().addClass("text-in"),t(e).find(".dtq-animated-text-slide li").first().removeClass("text-out"))},parseInt(n.slide_gap)))}),t(".dtq-popup-front-mode").each(function(){var e=t(this),n=e.data("settings");new window.baPopup(e,n).init()}),t(".dtq-alert-dismiss").each(function(){t(this).on("click",function(){t(this).parents(".ba_alert").fadeOut(400)})}),t(".dtq-counter .dtq-number-text").each(function(e,n){var i=window.counterUp.default;new Waypoint({element:t(this),handler:function(){i(n,{duration:1e3,delay:16}),this.destroy()},offset:"bottom-in-view"})})})}]);