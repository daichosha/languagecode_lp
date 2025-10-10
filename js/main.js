
//ハンバーガーメニュー
$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('on');
    $('.header-nav__menu').toggleClass('on');
    $('.header-menu').toggleClass('on');
    $('.floating__line').toggleClass('on');
  });
});

//headerの位置調整
$(function () {
  const $title = $('.header-title');
  const $nav = $('.header-nav__inner');

  $(window).on('scroll', function () {
    const titleBottom = $title.offset().top + $title.outerHeight();
    const scrollTop = $(window).scrollTop();

    if (scrollTop > titleBottom) {
      $nav.addClass('on');
    } else {
      $nav.removeClass('on');
    }
  });
});


// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);

  // スクロール位置に余白を追加（マイナスで上に余白を残す）
  let headerHeight = 80; // ←ヘッダーの高さに合わせて調整
  let position = target.offset().top - headerHeight;

  if ($(this).closest('.story__nav').length > 0) {
    // story__nav 内のリンクは余白なし
    position = target.offset().top;
  } else {
    // 通常はヘッダー分だけ引く
    position = target.offset().top - headerHeight;
  }

  $("body,html").animate({ scrollTop: position }, speed, "swing");

  // ハンバーガーを閉じる
  $('.hamburger').removeClass('on');
  $('.header-nav__menu').removeClass('on');
  $('.header-menu').removeClass('on');
  $('.floating__line').removeClass('on');

  return false;
});

new Vivus('mv', { // svgに指定するid名
  duration: 150, // アニメーションの長さ
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

//mvアニメーション(PC)
$(function () {
  var done = false;
  $(window).on('scroll load', function () {
    // 画面幅が830px以下なら処理しない
    if ($(window).width() <= 830) return;

    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).height();
    var elTop = $('.mv').offset().top;

    if (!done && elTop < winBottom) {
      done = true;

      setTimeout(function () {
        $('.mv__img').addClass('on');
      }, 2000); // 2秒後

      setTimeout(function () {
        $('.mv__text li').each(function (i) {
          var $li = $(this);
          setTimeout(function () {
            $li.addClass('on');
          }, i * 500); // 0.5秒ごとに次の li に on
        });
      }, 2500); // 開始を2秒遅らせる
    }
  });
});

//mvアニメーション(sp)
$(function () {
  if ($(window).width() <= 830) {
    const $items = $('.mv__text-inner li');
    let index = 0;
    const duration = 5000; // 4秒
    setTimeout(function () {
      $('.mv__img').addClass('on');
    }, 2000); // 2秒後


    // 最初の要素を表示
    $items.eq(index).addClass('sp-on');

    // 次の要素に切り替え続けるループ
    setInterval(function () {
      const nextIndex = (index + 1) % $items.length;

      // 現在→次を一度に切り替え（同時にクラス更新）
      $items.removeClass('sp-on').eq(nextIndex).addClass('sp-on');

      // インデックス更新
      index = nextIndex;
    }, duration);
  }
});

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

$(function () {
  $(".scene-ttl__img, .scene-ttl__img2").on("inview", function () {
    $(this).addClass("on");
  });
});

$(function () {
  $(".holl__point").on("inview", function () {
    $(this).addClass("on");
  });
});

setTimeout(function () {
  $(function () {
    $(".holl-bottom__bk").on("inview", function () {
      $(this).addClass("on");
    });
  });
}, 1500); // 開始を2秒遅らせる

setTimeout(function () {
  $(function () {
    $(".story-list__about").on("inview", function () {
      $(this).addClass("on");
    });
  });
}, 500); // 開始を2秒遅らせる



setTimeout(function () {
  $(function () {
    $(".story-list__caption").on("inview", function () {
      $(this).addClass("on");
    });
  });
}, 1000); // 開始を2秒遅らせる



$(function () {
  $(".campaign-item__graph").on("inview", function () {
    $(this).addClass("on");
  });
});

setTimeout(function () {
  $(function () {
    $(".campaign-lower").on("inview", function () {
      $(this).addClass("on");
    });
  });
}, 1800); // 開始を2秒遅らせる



$(function () {
  $(".link__img").on("inview", function () {
    $(this).addClass("on");
  });
});


$(function () {
  var $wraps = $('.story-list__wrap');
  var $storyList = $('.story-list');
  var windowHeight = $(window).height();

  function updateActive() {
    // 830px以下なら実行しない
    if (window.innerWidth <= 830) return;

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
  $(window).on('scroll resize', function () {
    windowHeight = $(window).height();
    updateActive();
  });
});


// ======================
// 1つ目の Swiper（.swiper）
// ======================
let mySwiper = null;

function initSwiperMain() {
  const winW = window.innerWidth;

  if (winW <= 830) {
    if (!mySwiper) {
      mySwiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 'auto', // センター寄せ
        centeredSlides: true,
        spaceBetween: -10,     // 左右10pxかぶせる
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  }
}


// ======================
// 2つ目の Swiper（.points-swiper）
// ======================
let mySwiper2 = null;

function initSwiperPoints() {
  const winW2 = window.innerWidth;

  if (winW2 <= 830) {
    if (!mySwiper2) {
      mySwiper2 = new Swiper('.points-swiper', {
        // loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: -10,
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.points-pagination', // ← 同名のpaginationが複数ある場合は明示的に指定
          clickable: true,
        },
      });
    }
  } else {
    if (mySwiper2) {
      mySwiper2.destroy(true, true);
      mySwiper2 = null;
    }
  }
}


// ======================
// イベント登録（両方実行）
// ======================
window.addEventListener('load', () => {
  initSwiperMain();
  initSwiperPoints();
});
window.addEventListener('resize', () => {
  initSwiperMain();
  initSwiperPoints();
});
