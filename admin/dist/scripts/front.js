function _gambit_microtime(){return(new Date).getTime()/1e3}if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){var i,a=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(a)}function i(e){return this.each(function(){var i=t(this),r=i.data("bs.collapse"),n=t.extend({},a.DEFAULTS,i.data(),"object"==typeof e&&e);!r&&n.toggle&&"show"==e&&(n.toggle=!1),r||i.data("bs.collapse",r=new a(this,n)),"string"==typeof e&&r[e]()})}var a=function(e,i){this.$element=t(e),this.options=t.extend({},a.DEFAULTS,i),this.$trigger=t(this.options.trigger).filter('[href="#'+e.id+'"], [data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};a.VERSION="3.3.2",a.TRANSITION_DURATION=350,a.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},a.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},a.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,r=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(r&&r.length&&(e=r.data("bs.collapse"),e&&e.transitioning))){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){r&&r.length&&(i.call(r,"hide"),e||r.data("bs.collapse",null));var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return o.call(this);var d=t.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(a.TRANSITION_DURATION)[s](this.$element[0][d])}}}},a.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var r=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(a.TRANSITION_DURATION):r.call(this)}}},a.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},a.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,a){var r=t(a);this.addAriaAndCollapsedClass(e(r),r)},this)).end()},a.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var r=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=a,t.fn.collapse.noConflict=function(){return t.fn.collapse=r,this},t(document).on("click.bs.collapse.data-api",'.wizhi [data-toggle="collapse"]',function(a){var r=t(this);r.attr("data-target")||a.preventDefault();var n=e(r),s=n.data("bs.collapse"),o=s?"toggle":t.extend({},r.data(),{trigger:this});i.call(n,o)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,a=this;t(this).one("bsTransitionEnd",function(){i=!0});var r=function(){i||t(a).trigger(t.support.transition.end)};return setTimeout(r,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),jQuery(document).ready(function(t){jQuery(".wizhi_column [class*=col-]").fitVids()}),jQuery(document).ready(function(t){var e=function(){"use strict";var t=jQuery;t(".wizhi_column[data-break-out]").each(function(){var e=t(this);if(0!=e.length&&"undefined"!=typeof t(this).attr("data-break-out")){var i=parseInt(t(this).attr("data-break-out"));if(!isNaN(i)){for(var a=e.parent(),r=0;i>r&&!a.is("html");r++)a=a.parent();"undefined"==typeof e.attr("data-orig-margin-left")?(e.attr("data-orig-margin-left",e.css("marginLeft")),e.attr("data-orig-padding-left",e.css("paddingLeft")),e.attr("data-orig-margin-right",e.css("marginRight")),e.attr("data-orig-padding-right",e.css("paddingRight"))):(e[0].style.removeProperty("margin-left"),e[0].style.removeProperty("padding-left"),e[0].style.removeProperty("margin-right"),e[0].style.removeProperty("padding-right"),e[0].style.setProperty("margin-left",e.attr("data-orig-margin-left"),"important"),e[0].style.setProperty("padding-left",e.attr("data-orig-padding-left"),"important"),e[0].style.setProperty("margin-right",e.attr("data-orig-margin-right"),"important"),e[0].style.setProperty("padding-right",e.attr("data-orig-padding-right"),"important"));var n=a.width()+parseInt(a.css("paddingLeft"))+parseInt(a.css("paddingRight")),s=e.width()+parseInt(e.css("paddingLeft"))+parseInt(e.css("paddingRight")),o=e.offset().left-a.offset().left,d=a.offset().left+n-(e.offset().left+s),l=parseFloat(e.css("marginLeft")),p=parseFloat(e.css("marginRight")),h=parseFloat(e.css("paddingLeft")),g=parseFloat(e.css("paddingRight"));l-=o,h+=o,p-=d,g+=d,e[0].style.removeProperty("margin-left"),e[0].style.removeProperty("padding-left"),e[0].style.removeProperty("margin-right"),e[0].style.removeProperty("padding-right"),e[0].style.setProperty("margin-left",l+"px","important"),e[0].style.setProperty("padding-left",h+"px","important"),e[0].style.setProperty("margin-right",p+"px","important"),e[0].style.setProperty("padding-right",g+"px","important"),e.addClass("broke-out broke-out-"+i)}}})};t(window).resize(e),e()}),function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var a=document.head||document.getElementsByTagName("head")[0],r=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">'+r+"</style>",a.appendChild(n.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var a=".fitvidsignore";i.ignore&&(a=a+", "+i.ignore);var r=t(this).find(e.join(","));r=r.not("object object"),r=r.not(a),r.each(function(e){var i=t(this);if(!(i.parents(a).length>0||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length)){i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16));var r="object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height(),n=isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10),s=r/n;if(!i.attr("id")){var o="fitvid"+e;i.attr("id",o)}i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),i.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),jQuery(document).ready(function(t){t(document).on("click",".jlk",function(e){e.preventDefault();var i=t(this).attr("data-task"),a=t(this).attr("data-post_id"),r=t(this).attr("data-nonce");t(".status-"+a).html("&nbsp;&nbsp;").addClass("loading-img").show(),t.ajax({type:"post",async:!1,dataType:"json",url:"/like/",data:{task:i,post_id:a,nonce:r},success:function(e){t(".lc-"+a).html(e.like),t(".unlc-"+a).html(e.unlike),t(".status-"+a).removeClass("loading-img").empty().html(e.msg),t(".watch-action").addClass("voted")}})})});
//# sourceMappingURL=front.js.map