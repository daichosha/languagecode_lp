
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

new Vivus('mv', { // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus('story', { // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus('points', { // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus('campaign', { // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus('flow', { // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});




$(function() {
  var $wraps = $('.story-list__wrap');
  var $storyList = $('.story-list');
  var windowHeight = $(window).height();

  function updateActive() {
    var scrollTop = $(window).scrollTop();
    var listTop = $storyList.offset().top;

    var index = 0; // デフォルトは最初のコンテンツ

    if (scrollTop >= listTop) {
      // story-list内のスクロール量
      var relativeScroll = scrollTop - listTop;

      // 現在のインデックス（100vhごとに切り替え）
      index = Math.floor(relativeScroll / windowHeight);
      if (index >= $wraps.length) index = $wraps.length - 1;
    }

    $wraps.removeClass('active');
    $wraps.eq(index).addClass('active');
  }

  // 初期表示
  updateActive();

  // スクロール・リサイズ監視
  $(window).on('scroll resize', function() {
    windowHeight = $(window).height();
    updateActive();
  });
});