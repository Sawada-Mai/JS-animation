
document.addEventListener('DOMContentLoaded', function () {

  // 全てのボタン要素と画像要素を取得
  const btns = document.querySelectorAll('.product__btn');
  const figs = document.querySelectorAll('.product__fig');

  // ボタン要素ごとにクリックイベントを追加
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // 全てのボタンと画像から active クラスを削除
      btns.forEach((el) => {
        el.classList.remove('active');
      });
      figs.forEach((el) => {
        el.classList.remove('active');
      });

      // クリックされたボタンと画像に active クラスを追加
      btn.classList.add('active');
      figs[index].classList.add('active');
    });
  });

});
