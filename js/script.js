(function ($) {
  $(function () {
    /***** scroll to sections *****/
    $(".jq--scroll-home").click(function () {
      $("html, body").animate({ scrollTop: $(".jq--home").offset().top }, 1300);
    });

    $(".jq--scroll-about").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--about").offset().top },
        1300
      );
    });

    $(".jq--scroll-photogallery").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--photogallery").offset().top },
        1300
      );
    });

    $(".jq--scroll-contact").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--contact").offset().top },
        1300
      );
    });
  });
})(jQuery);
