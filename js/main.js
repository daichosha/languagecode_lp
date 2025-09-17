
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
