/** ==========================================================
 * 
 * 按钮 模块
 * $ Pluto <mengjq08@163.com> 2013-3-21 17:22:20 $
 * 
 * ========================================================== */
define("seajq/button/1.0.0/button-debug", [ "gallery/jquery/1.8.3/jquery-debug" ], function(require, exports, module) {
    var $ = window.$ || require("gallery/jquery/1.8.3/jquery-debug");
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.button.defaults, options);
    };
    Button.prototype.setState = function(state) {
        var d = "disabled", $el = this.$element, data = $el.data(), val = $el.is("input") ? "val" : "html";
        state = state + "Text";
        data.resetText || $el.data("resetText", $el[val]());
        $el[val](data[state] || this.options[state]);
        // push to event loop to allow forms to submit
        setTimeout(function() {
            state == "loadingText" ? $el.addClass(d).attr(d, d) : $el.removeClass(d).removeAttr(d);
        }, 0);
    };
    Button.prototype.toggle = function() {
        var $parent = this.$element.closest('[data-toggle="buttons-radio"]');
        $parent && $parent.find(".active").removeClass("active");
        this.$element.toggleClass("active");
    };
    /* BUTTON PLUGIN DEFINITION
  * ======================== */
    var old = $.fn.button;
    $.fn.button = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("button"), options = typeof option == "object" && option;
            if (!data) $this.data("button", data = new Button(this, options));
            if (option == "toggle") data.toggle(); else if (option) data.setState(option);
        });
    };
    $.fn.button.defaults = {
        loadingText: "loading..."
    };
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function() {
        $.fn.button = old;
        return this;
    };
    Button.autoinit = function() {
        $(document).on("click.button.data-api", "[data-toggle^=button]", function(e) {
            var $btn = $(e.target);
            if (!$btn.hasClass("btn")) $btn = $btn.closest(".btn");
            $btn.button("toggle");
        });
    };
    module.exports = Button;
});