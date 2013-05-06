define(function (require, exports, module) {

    var $ = window.$ || require('gallery/jquery/1.8.3/jquery')

    var Tab = function (element, options) {
        this.options = options
        this.element = $(element)
        this.options.remote && this.reload()
    }

    Tab.prototype = {

        constructor: Tab,
        show: function () {
            var $this = this.element
                , $ul = $this.closest('ul:not(.ailk-dropdown-menu)')
                , $target
                , selector
                , previous
                , e

            if ($this.parent('li').hasClass('ailk-active')) return

            previous = $ul.find('.ailk-active:last a')[0]

            e = $.Event('show', {
                relatedTarget: previous
            })

            $this.trigger(e)

            if (e.isDefaultPrevented()) return

            selector = $this.attr('data-target');
            if(!selector){
                selector = $this.attr('href')
                selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
            }
            $target = $(selector)

            this.activate($this.parent('li'), $ul)
            this.activate($target, $target.parent(), function () {
                $this.trigger({
                    type: 'shown',
                    relatedTarget: previous
                })
            })
        },
        activate: function (element, container, callback) {
            var $active = container.find('> .ailk-active')
                , transition = callback
                    && $.support.transition
                    && $active.hasClass('fade')

            function next() {
                $active
                    .removeClass('ailk-active')
                    .find('> .ailk-dropdown-menu > .ailk-active')
                    .removeClass('ailk-active')

                element.addClass('ailk-active')

                if (transition) {
                    element[0].offsetWidth // reflow for transition
                    element.addClass('ailk-open')
                } else {
                    element.removeClass('fade')
                }

                if (element.parent('.ailk-dropdown-menu')) {
                    element.closest('li.ailk-dropdown').addClass('ailk-active')
                }

                callback && callback()
            }

            transition ?
                $active.one($.support.transition.end, next) :
                next()

            $active.removeClass('ailk-open')
        },
        reload: function(){
	    if(!this.options.remote) return
            var $this = this.element
	      , $target = $($this.attr('data-target'))
	      , previous = $this.closest('ul').find('.active:last a')[0]
            $this.trigger($.Event('reloading'))
            $target.empty().load( this.options.remote, function(){
                $this.trigger($.Event({
                    type : 'loaded',
                    relatedTarget: previous
                }))
            })
	    this.show()
        }
    }


    /* TAB PLUGIN DEFINITION
     * ===================== */

    var old = $.fn.tab

    $.fn.tab = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('tab')
                , options = $.extend({}, $.fn.tab.defaults, $this.data(), typeof option == 'object' && option)
            if (!data) $this.data('tab', (data = new Tab(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.tab.defauts = {
        remote: false
    }
    $.fn.tab.Constructor = Tab


    /* TAB NO CONFLICT
     * =============== */

    $.fn.tab.noConflict = function () {
        $.fn.tab = old
        return this
    }


    /* TAB DATA-API
     * ============ */
    Tab.autoinit = function () {
        $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
            var $this = $(this)
                , href = $this.attr('href')
                , option = $this.data('tab') ? 'show' : $.extend({ remote: !/#/.test(href) && href }, $this.data())
            e.preventDefault()
            $(this).tab( option )
        })
    }

    module.exports = Tab
});
