define("seajq/button/1.0.0/button",["gallery/jquery/1.8.3/jquery"],function(a,b,c){var d=window.$||a("gallery/jquery/1.8.3/jquery"),e=function(a,b){this.$element=d(a),this.options=d.extend({},d.fn.button.defaults,b)};e.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},e.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var f=d.fn.button;d.fn.button=function(a){return this.each(function(){var b=d(this),c=b.data("button"),f="object"==typeof a&&a;c||b.data("button",c=new e(this,f)),"toggle"==a?c.toggle():a&&c.setState(a)})},d.fn.button.defaults={loadingText:"loading..."},d.fn.button.Constructor=e,d.fn.button.noConflict=function(){return d.fn.button=f,this},e.autoinit=function(){d(document).on("click.button.data-api","[data-toggle^=button]",function(a){var b=d(a.target);b.hasClass("btn")||(b=b.closest(".btn")),b.button("toggle")})},c.exports=e});