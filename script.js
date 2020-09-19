document.addEventListener("touchstart", function() {}, false);

$(".bin").fadeTo(1200, 1);

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

$(".scrlbtn").on("click", function () {
  $("html, body").animate({scrollTop:"0"}, "1200");
});
