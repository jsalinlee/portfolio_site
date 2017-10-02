// $(".home").click(function() {
//     $("html, body").animate({
//         scrollTop: 0
//     }, 0);
//     location.reload();
// });
//
// $(".quicklink").hover(function() {
//     $(this).stop(true, true).animate({
//         color: "#a6b0bf",
//         backgroundColor: "#5c5072"
//     }, 300);
// }, function() {
//     $(this).stop(true, true).animate({
//         color: "#5c5072",
//         backgroundColor: "#8f97a3"
//     }, 300);
// });
//
// $(".quickmenulink").hover(function() {
//     $(this).stop(true, true).animate({
//         color: "#a6b0bf",
//         backgroundColor: "#5c5072"
//     }, 300);
// }, function() {
//     $(this).stop(true, true).animate({
//         color: "#5c5072",
//         backgroundColor: "#8f97a3"
//     }, 300);
// });
//
// $(".quickmenu-options").hide();
// $(".quickmenulink").hide();
//
// $(window).on("resize", function() {
//     if($(window).width() < 900) {
//         $(".quicklinks").hide();
//         $(".quickmenu-options").show();
//         $(".profilepicture").css("display", "block");
//         $(".aboutdesc").css("width", "80%");
//     } else {
//         $(".quicklinks").show();
//         $(".profilepicture").css("display", "inline-block");
//         $(".aboutdesc").css("width", "30%");
//         $(".quickmenu-options").hide();
//         $(".quickmenulink").hide();
//     }
// }).resize();
//
// $(".quickmenu").click(function() {
//     $(".quickmenulink").toggle();
// });
//
// $("a").click(function() {
//     var target = this.hash,
//     $target = $(target);
//     $("html, body").stop().animate({
//         scrollTop: $target.offset().top - 60
//     }, "slow", "swing");
// });
