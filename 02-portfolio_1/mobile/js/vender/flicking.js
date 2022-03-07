$(document).ready(function() {
    var iscroll = new iScroll('flicking_wrapper', {
        snap: 'li',
        momentum: false,
        hScrollbar: false,
        vScrollbar: false,
        onScrollEnd: function() {
            $('#indicator li').each(function(i, node) {
                if(i === iscroll.currPageX) {
                    $(node).addClass('active');
                } else {
                    $(node).removeClass('active');
                }
            });
        }
    });
    iscroll.scrollToPage(0);
});