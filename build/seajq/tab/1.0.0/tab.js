define("seajq/tab/1.0.0/tab",["gallery/jquery/1.8.3/jquery"],function(a,b,c){var d=window.$||a("gallery/jquery/1.8.3/jquery"),e=function(a,b){this.options=b,this.element=d(a),this.options.remote&&this.reload()};e.prototype={constructor:e,show:function(){var c,e,f,g,a=this.element,b=a.closest("ul:not(.ailk-dropdown-menu)");a.parent("li").hasClass("ailk-active")||(f=b.find(".ailk-active:last a")[0],g=d.Event("show",{relatedTarget:f}),a.trigger(g),g.isDefaultPrevented()||(e=a.attr("data-target"),e||(e=a.attr("href"),e&&e.replace(/.*(?=#[^\s]*$)/,"")),c=d(e),this.activate(a.parent("li"),b),this.activate(c,c.parent(),function(){a.trigger({type:"shown",relatedTarget:f})})))},activate:function(a,b,c){function g(){e.removeClass("ailk-active").find("> .ailk-dropdown-menu > .ailk-active").removeClass("ailk-active"),a.addClass("ailk-active"),f?(a[0].offsetWidth,a.addClass("ailk-open")):a.removeClass("fade"),a.parent(".ailk-dropdown-menu")&&a.closest("li.ailk-dropdown").addClass("ailk-active"),c&&c()}var e=b.find("> .ailk-active"),f=c&&d.support.transition&&e.hasClass("fade");f?e.one(d.support.transition.end,g):g(),e.removeClass("ailk-open")},reload:function(){if(this.options.remote){var a=this.element,b=d(a.attr("data-target")),c=a.closet("ul").find(".active:last a")[0];a.trigger(d.Event("reloading")),b.empty().load(this.options.remote,function(){a.trigger(d.Event({type:"loaded",relatedTarget:c}))}),this.show()}}};var f=d.fn.tab;d.fn.tab=function(a){return this.each(function(){var b=d(this),c=b.data("tab"),f=d.extend({},d.fn.tab.defaults,b.data(),"object"==typeof a&&a);c||b.data("tab",c=new e(this,f)),"string"==typeof a&&c[a]()})},d.fn.tab.defauts={remote:!1},d.fn.tab.Constructor=e,d.fn.tab.noConflict=function(){return d.fn.tab=f,this},e.autoinit=function(){d(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){var b=d(this),c=b.attr("href"),e=b.data("tab")?"show":d.extend({remote:!/#/.test(c)&&c},b.data());a.preventDefault(),d(this).tab(e)})},c.exports=e});