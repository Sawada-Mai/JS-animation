$(document).ready(function() {
  // モーダルを開くためのリンクをクリックしたときの処理
  $('[data-modal="modal"]').on('click', function(e) {
    e.preventDefault();
    $('.modal').addClass('active');
  });

  // モーダルを閉じるためのボタンをクリックしたときの処理
  $('[data-modal="close"]').on('click', function(e) {
    e.preventDefault();
    $('.modal').removeClass('active');
  });
});
