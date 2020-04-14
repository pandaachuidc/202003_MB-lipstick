// slick slider

if ($(window).width() <= 767) {
  $(document).ready(function() {
    var $slider = $(".MB-listick-color__slider");
    var $progressBar = $(".MB-listick-color__progress");
    var $progressBarLabel = $(".slider__label");

    $slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      var calc = (nextSlide / (slick.slideCount - 1)) * 100;

      $progressBar
        .css("background-size", calc + "% 100%")
        .attr("aria-valuenow", calc);

      $progressBarLabel.text(calc + "% completed");
    });

    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800
    });
  });
}

//animation-active

var controller = new ScrollMagic.Controller();

$(".MB-listick-intro__text-wrap").each(function() {
  var introTitle = $(this).find(".MB-listick-intro__tit");
  var introText = $(this).find(".MB-listick-intro__text");

  var animateIn = new TimelineMax();

  animateIn

    .from(
      introTitle,
      { opacity: 0, y: 100, duration: 1, ease: Power4.easeOut },
      "-=1.5"
    )
    .from(
      introText,
      { opacity: 0, y: 100, duration: 1, ease: Power4.easeOut },
      "-=1.5"
    );

  // Make a scrollMagic Scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })

    // .addIndicators()
    .setTween(animateIn)
    .addTo(controller);
});

if ($(window).width() >= 767) {
  $(".MB-listick-color__slider").each(function() {
    var sliderItem = $(this).find(".MB-listick-color__item");
    var animateIn = new TimelineMax();

    animateIn.from(sliderItem, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.5
    });

    // Make a scrollMagic Scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this
    })

      // .addIndicators()
      .setTween(animateIn)
      .addTo(controller);
  });
}



var controller = new ScrollMagic.Controller();
var wrapBox = new TimelineMax().add([
  TweenMax.to(".layer1", 1, { y: 360, ease: Linear.easeNone }),
  TweenMax.to(".layer2", 1.2, { y: 280, ease: Linear.easeNone }),
  TweenMax.to(".layer3", 0.8, { y: 180, ease: Linear.easeNone }),
]);
var scene = new ScrollMagic.Scene({
  triggerElement: ".wrap-box",
  duration: "150%",
})
  .setTween(wrapBox)
  .addTo(controller);   

// var controller = new ScrollMagic.Controller();

// // Create scenes in jQuery each() loop
// $(".content").each(function(i) {
//   var introTitle = $(this).find(".MB-listick-intro__tit");
//   var introText = $(this).find(".MB-listick-intro__text");
//   var sliderItem = $(this).find(".MB-listick-color__item");
//   var tl = new TimelineMax();

//   tl.from(introTitle, { scaleX: 0, duration: 0.25 });
//   tl.from(introText, { yPercent: 100, duration: 0.65, ease: Back.easeOut });
//   tl.from(sliderItem, { opacity: 0, y: 100, duration: 0.85, stagger: 0.5 });

//   new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 0.65
//   })
//     .setTween(tl)
//     .addIndicators({
//       colorTrigger: "black",
//       colorStart: "black",
//       colorEnd: "black",
//       indent: 40
//     })
//     .addTo(controller);
// });

//   新建ScrollMagic場景對象

// 說明：

// triggerElement：觸發元素，即當滾動條Trigger滾動到該元素時，觸發動畫

// offset：用於設置Trigger與TriggerElement的距離，正值在下，負值在上。比如：offset:100 指的是Tigger在該觸發元素的下面100px的位置

// triggerHook（0~1）：用於設置實際觸發元素的位置，默認是0，即與實際元素頂端重合，若為1，則與實際元素底端重合。

// addIndicators：用於調試使用。

// 最後一定要加入我們創建的ScrollMagic控制器：

// addTo(scrollMagicController);
