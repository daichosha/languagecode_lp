
//ハンバーガーメニュー
$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('on');
    $('.header-nav__menu').toggleClass('on');
    if (!$('.floating').hasClass('on')) {
      $('.floating').toggleClass('on');
    }
  });
});

new Vivus( 'mv', { // svgに指定するid名
    duration: 120, // アニメーションの長さ
    forceRender: false, //パスが更新で再レンダリングさせない
});