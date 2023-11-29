$(function () {
  $('.fadeUpTrigger').on('inview', function (event, isInView) {
      if (isInView) {
          $(this).addClass('fadeUp');
      }
  });
});

// function fadeAnime() {
//   $('.fadeUpTrigger').each(function() { 
//       var elemPos = $(this).offset().top - $(window).scrollTop();
//       var windowHeight = $(window).height();
//       // 画像が500px画面内に入ったタイミングで開始
//       if (elemPos < windowHeight - 500) {
//           $(this).addClass('fadeUp');
//       }
//   });
// }
// $(window).scroll(function() {
//   fadeAnime();
// });
