document.addEventListener("touchstart", function() {}, false);

$(".bin").fadeTo(600, 1);

$(document).on("scroll", function() {
  var y = $(this).scrollTop();
  var h = $(".bin").height();
  if (y > (h / 2)) {
    $(".scrlbtn").fadeIn(300);
  } else {
    $(".scrlbtn").fadeOut(500);
  }
});

$(".scrlbtn").on("click", function () {
  $("html, body").animate({scrollTop:"0"}, "1200");
});
