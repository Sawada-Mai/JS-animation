$(function () {
  // FadeIn
  $('.js-fade').on('inview', function (event, isInView) {
      if (isInView) {
          // element is now visible in the viewport
          $(this).addClass('is-active');
      }
  });
  //FadeIn - wave01
  $('.js-wave01 span').on('inview', function (event, isInView) {
      if (isInView) {
          // element is now visible in the viewport
          $(this).addClass('is-show');
      }
  });
  //FadeIn - wave02
  $('.js-wave02 span').on('inview', function (event, isInView) {
      if (isInView) {
          // element is now visible in the viewport
          $(this).addClass('is-show');
      }
  });
  //FadeIn - wave03
  $('.js-wave03 span').on('inview', function (event, isInView) {
      if (isInView) {
          // element is now visible in the viewport
          $(this).addClass('is-show');
      }
  });
  //FadeIn - wave04
  $('.js-wave04 span').on('inview', function (event, isInView) {
      if (isInView) {
          // element is now visible in the viewport
          $(this).addClass('is-show');
      }
  });
});
