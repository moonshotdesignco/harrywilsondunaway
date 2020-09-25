document.addEventListener("touchstart", function() {}, false);

$(".bin").fadeTo(600, 1);

// $(".next").on("click", function() {
//   $(this).parents(".bin").fadeOut(300, function() {
//     $(this).next(".bin").fadeTo(700, 1);
//   });
// });

// $(".prev").on("click", function() {
//   $(this).parents(".bin").fadeOut(300, function() {
//     $(this).prev(".bin").fadeTo(700, 1);
//   });
// });

// $(".home").on("click", function() {
//   $(this).parents(".bin").fadeOut(300, function() {
//     $("#bin-a").fadeTo(1200, 1);
//   });
// });

$(document).on("scroll", function() {
  var y = $(this).scrollTop();
  var h = $(".bin").height();
  if (y > h) {
    $(".bar").fadeIn();
  } else {
    $(".bar").fadeOut();
  }
});

$(".scrlbtn").on("click", function () {
  $("html, body").animate({scrollTop:"0"}, "1200");
});
