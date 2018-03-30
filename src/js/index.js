/**
 * Created by zly on 2018/3/19.
 */
$(function() {
  window.onscroll = function() {
    $(".navbox").addClass("view"),
      $(window).scrollTop() <= 1 && $(".navbox").removeClass("view");
  };
  (document.getElementById("drc-video").playbackRate = 1),
    $(".closebtn").on("click", function() {
      document.getElementById("drc-video").load();
    });
  var navheight = $(".navbox").height();
  $(".menu-list").on("click", "li", function() {
    var liname = $(this).data("href");
    var target = document.querySelector(liname);
    $("html,body")
      .stop()
      .animate({ scrollTop: target.offsetTop - navheight }, 600);
  });
  $(".fa-wechat").hover(
    function() {
      $(".weixin").show();
    },
    function() {
      $(".weixin").hide();
    }
  );
});
