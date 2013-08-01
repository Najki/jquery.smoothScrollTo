/**
 * jQuery Smooth Scroll To plugin.
 *
 * @author   Nikodem Osmialowski - www.osmialowski.pl
 * @license  GPL v2
 * @version  0.1 2013-08-01
 */
;(function ($, window, document, undefined) {
    var SmoothScrollTo = {
        init: function (options, elem) {
            var base = this;

            base.$element = $(elem);
            base.options = $.extend({}, $.fn.smoothScrollTo.options, options);

            base.bindEvents();
        },

        bindEvents: function () {
            var base = this;

            base.$element.on('click', function (event) {
                base.scroll(event);
            });
        },

        scroll: function (event) {
            var base = this,
                $this = $(event.target),
                $target = $($.trim($this.attr('href')));

            if ($target.length > 0) {
                event.preventDefault();

                if (base.options.onBefore && typeof(base.options.onBefore) === 'function') {
                    base.options.onBefore.call(this);
                }

                $('body').animate({
                    scrollTop: $target.offset().top
                }, base.options.scrollTime, function () {
                    if (base.options.onAfter && typeof(base.options.onAfter) === 'function') {
                        base.options.onAfter.call(this);
                    }
                });
            }
        }
    };

    $.fn.smoothScrollTo = function (options) {
        return this.each(function () {
            var smoothScrollTo = Object.create(SmoothScrollTo);

            smoothScrollTo.init(options, this);
        });
    };

    $.fn.smoothScrollTo.options = {
        scrollTime: 1000,
        onBefore: null,
        onAfter: null
    };
})(jQuery, window, document);
