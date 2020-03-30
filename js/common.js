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
