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
  // var introWrap = $(this).find(".MB-listick-intro__text-wrap");
  // var typoMB = $(this).find(".MB-listick-kv__typo-MB");

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

  // .from(introWrap, { opacity: 0, y: 100, duration: 2, stagger: 1,delay:3})
  // .from(typoMB, { opacity: 0, y: 100, duration: 2 })

  // Make a scrollMagic Scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })

    // .addIndicators()
    .setTween(animateIn)
    .addTo(controller);
});
