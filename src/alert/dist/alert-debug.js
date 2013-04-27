/** ==========================================================
 * 
 * 自定义警告框 模块
 * $ Pluto <mengjq08@163.com> 2013-3-21 17:22:20 $
 * 
 * ========================================================== */
define("seajq/alert/1.0.0/alert-debug", [ "gallery/jquery/1.8.3/jquery-debug" ], function(require, exports, module) {
    // 定义警告框类
    var dismiss = '[data-dismiss="alert"]', Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.prototype.close = function(e) {
        var $this = $(this), selector = $this.attr("data-target"), $parent;
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        $parent = $(selector);
        e && e.preventDefault();
        $parent.length || ($parent = $this.hasClass("ailk-alert") ? $this : $this.parent());
        $parent.trigger(e = $.Event("close"));
        if (e.isDefaultPrevented()) return;
        $parent.removeClass("in");
        function removeElement() {
            $parent.trigger("closed").remove();
        }
        $.support.transition && $parent.hasClass("fade") ? $parent.on($.support.transition.end, removeElement) : removeElement();
    };
    // 将警告框定义为jquery插件
    var $ = window.$ || require("gallery/jquery/1.8.3/jquery-debug");
    var old = $.fn.alert;
    $.fn.alert = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("alert");
            if (!data) $this.data("alert", data = new Alert(this));
            if (typeof option == "string") data[option].call($this);
        });
    };
    $.fn.alert.Constructor = Alert;
    //解决jquery插件冲突
    $.fn.alert.noConflict = function() {
        $.fn.alert = old;
        return this;
    };
    //默认点击空白处关闭警告框
    Alert.autoinit = function() {
        $(document).on("click.alert.data-api", dismiss, Alert.prototype.close);
    };
    return Alert;
});