//ハンバーガーメニュー
$(function () {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("on");
    $(".header-nav__menu").toggleClass("on");
    $(".header-menu").toggleClass("on");
    $(".floating__line").toggleClass("on");
  });
});

//headerの位置調整
$(function () {
  const $title = $(".header-title");
  const $nav = $(".header-nav__inner");

  $(window).on("scroll", function () {
    const titleBottom = $title.offset().top + $title.outerHeight();
    const scrollTop = $(window).scrollTop();

    if (scrollTop > titleBottom) {
      $nav.addClass("on");
    } else {
      $nav.removeClass("on");
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

  if ($(this).closest(".story__nav").length > 0) {
    // story__nav 内のリンクは余白なし
    position = target.offset().top;
  } else {
    // 通常はヘッダー分だけ引く
    position = target.offset().top - headerHeight;
  }

  $("body,html").animate({ scrollTop: position }, speed, "swing");

  // ハンバーガーを閉じる
  $(".hamburger").removeClass("on");
  $(".header-nav__menu").removeClass("on");
  $(".header-menu").removeClass("on");
  $(".floating__line").removeClass("on");

  return false;
});

new Vivus("mv", {
  // svgに指定するid名
  duration: 150, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus("story", {
  // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus("points", {
  // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus("campaign", {
  // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

new Vivus("flow", {
  // svgに指定するid名
  duration: 120, // アニメーションの長さ
  forceRender: false, //パスが更新で再レンダリングさせない
});

//mvアニメーション(PC)
$(function () {
  var done = false;
  $(window).on("scroll load", function () {
    // 画面幅が650px以下なら処理しない
    if ($(window).width() <= 650) return;

    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).height();
    var elTop = $(".mv").offset().top;

    if (!done && elTop < winBottom) {
      done = true;

      setTimeout(function () {
        $(".mv__img").addClass("on");
      }, 2000); // 2秒後

      setTimeout(function () {
        $(".mv__text li").each(function (i) {
          var $li = $(this);
          setTimeout(function () {
            $li.addClass("on");
          }, i * 500); // 0.5秒ごとに次の li に on
        });
      }, 2500); // 開始を2秒遅らせる
    }
  });
});

//mvアニメーション(sp)
$(function () {
  if ($(window).width() <= 650) {
    const $items = $(".mv__text-inner li");
    const $circle = $(".mv__circle");
    let index = 0;
    const duration = 5000; // 5秒
    const animationDuration = 5000; // 円のアニメーション時間

    // 初回表示
    $items.eq(index).addClass("sp-on");
    $circle.addClass("circle-animate");

    setInterval(function () {
      const nextIndex = (index + 1) % $items.length;

      // テキスト切り替え
      $items.removeClass("sp-on").eq(nextIndex).addClass("sp-on");

      // 円アニメーションをリセットして再スタート
      $circle.removeClass("circle-animate");
      void $circle[0].offsetWidth; // 強制リフローで再描画
      $circle.addClass("circle-animate");

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

// ナビリストボタンアニメーションここから
$(function () {
  var $wraps = $(".story-list__wrap");
  var $storyList = $(".story-list");
  var $navLinks = $(".story__nav a");
  var windowHeight = $(window).height();
  var isAnimating = false;

  function getListTop() {
    return $storyList.offset().top;
  }

  function updateActive() {
    // アニメーション中はスキップ
    if (isAnimating) return;

    var scrollTop = $(window).scrollTop();
    var listTop = getListTop();
    var relativeScroll = scrollTop - listTop;

    if (relativeScroll < 0) {
      $wraps.removeClass("active");
      $wraps.eq(0).addClass("active");
      return;
    }

    var index = Math.floor(relativeScroll / windowHeight);
    if (index >= $wraps.length) index = $wraps.length - 1;

    $wraps.removeClass("active");
    $wraps.eq(index).addClass("active");
  }

  updateActive();

  $(window).on("scroll resize", function () {
    windowHeight = $(window).height();
    updateActive();
  });

  // ナビクリック時
  $navLinks.on("click", function (e) {
    e.preventDefault();

    var idx = $navLinks.index(this);
    var listTop = getListTop();
    var targetScrollTop = Math.round(listTop + idx * windowHeight);

    // アニメーション中フラグをオン
    isAnimating = true;

    // 現在の画面幅を取得して、アニメーション速度を条件で分岐
    const duration = window.innerWidth <= 1099 ? 600 : 0;

    // 画面幅によって挙動を分ける
    if (window.innerWidth > 1099) {
      // ----------------------------
      // PC（100vh構成）用の動作
      // ----------------------------
      $("html, body")
        .stop()
        .animate({ scrollTop: targetScrollTop }, duration, function () {
          $wraps.removeClass("active");
          $wraps.eq(idx).addClass("active");
          isAnimating = false;
        });
    } else {
      // ----------------------------
      // スマホ（通常スクロール）用の動作
      // ----------------------------
      var targetId = $(this).attr("href");
      var $target = $(targetId);

      if ($target.length) {
        $("html, body")
          .stop()
          .animate({ scrollTop: $target.offset().top }, duration, function () {
            // active の切り替え
            $wraps.removeClass("active");
            $wraps.eq(idx).addClass("active");
            isAnimating = false;
          });
      } else {
        isAnimating = false;
      }
    }
  });

  // ページロード時にハッシュ指定がある場合も即表示
  if (location.hash) {
    var hashIndex = $navLinks.filter('[href="' + location.hash + '"]').index();
    if (hashIndex >= 0) {
      setTimeout(function () {
        var listTop = getListTop();
        $(window).scrollTop(Math.round(listTop + hashIndex * windowHeight));
        $wraps.removeClass("active").eq(hashIndex).addClass("active");
      }, 50);
    }
  }
});

// ======================
// 1つ目の Swiper（.swiper）
// ======================
let mySwiper = null;

function initSwiperMain() {
  const winW = window.innerWidth;

  if (winW <= 829) {
    if (!mySwiper) {
      mySwiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: "auto", // センター寄せ
        centeredSlides: true,
        spaceBetween: -10, // 左右10pxかぶせる
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
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

  if (winW2 <= 649) {
    if (!mySwiper2) {
      mySwiper2 = new Swiper(".points-swiper", {
        // loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: -10,
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".points-pagination", // ← 同名のpaginationが複数ある場合は明示的に指定
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
window.addEventListener("load", () => {
  initSwiperMain();
  initSwiperPoints();
});
window.addEventListener("resize", () => {
  initSwiperMain();
  initSwiperPoints();
});
