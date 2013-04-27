define("seajq/popover/1.0.0/popover",["gallery/jquery/1.8.3/jquery","seajq/tooltip/1.0.0/tooltip"],function(a){var d=window.$||a("gallery/jquery/1.8.3/jquery"),e=a("seajq/tooltip/1.0.0/tooltip"),f=function(a,b){this.init("popover",a,b)};f.prototype=d.extend({},e.prototype,{constructor:f,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=("function"==typeof c.content?c.content.call(b[0]):c.content)||b.attr("data-content")},tip:function(){return this.$tip||(this.$tip=d(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var g=d.fn.popover;d.fn.popover=function(a){return this.each(function(){var b=d(this),c=b.data("popover"),e="object"==typeof a&&a;c||b.data("popover",c=new f(this,e)),"string"==typeof a&&c[a]()})},d.fn.popover.Constructor=f,d.fn.popover.defaults=d.extend({},d.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),d.fn.popover.noConflict=function(){return d.fn.popover=g,this}});