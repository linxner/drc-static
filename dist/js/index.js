$(function () {
    window.onscroll = function () {
        window.onscroll = function () {
            $('.navbox').addClass('view')
            if ($(window).scrollTop() <= 1) {
                $('.navbox').removeClass('view')
            }
        }
        // get the window scroll height
        var nowscrollHeight = $(window).scrollTop();
        if (nowscrollHeight >= 10) {
            $('.navbox').addClass('view')
        } else {
            $('.navbox').removeClass('view')
        }
    }
        document.getElementById("drc-video").playbackRate = 1, $(".closebtn").on("click", function () {
        document.getElementById("drc-video").load()
    });
    var n = $(".navbox").height();
    $(".menu-list").on("click", "li", function () {
        var o = $(this).data("href"), e = document.querySelector(o);
        $("html,body").stop().animate({scrollTop: e.offsetTop - n}, 600)
    })
});