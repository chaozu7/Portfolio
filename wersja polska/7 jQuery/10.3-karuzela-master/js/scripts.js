(function($){
    $.fn.carousel = function(options) {
        options = $.extend({
            displayLi      : 3,
            animationTime  : 1000,
            pauseTime      : 3000,
            auto            : false,
            onScroll        : function() {}
        }, options);

        return this.each(function() {
            var $t = $(this);

            var $ul = $t.find('ul');
            var $li = $ul.find('li');
            var item_width = $li.first().outerWidth(true);
            var $prev = $t.find('.prev');
            var $next = $t.find('.next');
            var interval = null;

            var scrollPrev = function()
            {
                if (!$ul.is(':animated')) {
                    var $li = $ul.find('li');
                    $ul.css('margin-left',-item_width);
                    $li.first().before($li.last());
                    $ul.animate({'margin-left' : 0}, options.animationTime, function(){
                        options.onScroll();
                    });
                    clearInterval(interval);
                    if (options.auto) {
                        interval = setTimeout(function() {
                            scrollNext()
                        }, options.pauseTime);
                    }
                }
            }

            var scrollNext = function()
            {
                var $li = $ul.find('li');

                $ul.not(':animated').animate({'margin-left' : -item_width}, options.animationTime, function(){
                    $li.last().after($li.first());
                    $ul.css({'margin-left' : 0});
                    options.onScroll();
                });
                clearInterval(interval);
                if (options.auto) {
                    interval = setTimeout(function() {
                        scrollNext()
                    }, options.pauseTime);
                }
            }                

            $prev.on('click', scrollPrev);
            $next.on('click', scrollNext);

            if (options.auto) interval = setTimeout(function() {scrollNext()}, options.pauseTime);
        });
    }
})(jQuery);

$(function(){
    $('.slider').carousel({
        displayLi     : 3,
        animateTime   : 1000,
        pauseTime     : 3000,
        auto           : true,
        onScroll       : function() {}
    });
});




