
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

// new fullpage('#fullpage', {
//   autoScrolling: true,         // スクロールを1画面ごとに
//   scrollHorizontally: false,   // 横スクロール不要なら false
//   navigation: true,            // ドットナビ表示（必要なら）
//   normalScrollElements: '.story, .header, .footer',
//   // ↑ fullPageを効かせたくない要素を指定
//   fitToSection: true,
//   scrollingSpeed: 800
// });

/* 1. アドレスバー・ツールバーを除いた100vhの高さを取得 */
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeight();
window.addEventListener("resize", setHeight);

const swiper = new Swiper('.vertical-slider', {
  direction: 'vertical',
  slidesPerView: 1,
mousewheel: {
  releaseOnEdges: true,
},
  keyboard: { enabled: true },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 800,
});