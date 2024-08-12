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

    $(".jq--scroll-lottery").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--lottery").offset().top },
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

    /***** mobile navigation *****/
    $(document).ready(function () {
      $(".menu > li > a").click(function (event) {
        event.preventDefault();

        $(".submenu").slideToggle();
      });
    });
  });
})(jQuery);

function generateNumbers() {
  const numberCount = 6;
  const maxNumber = 27;
  const additionalNumberRange = 4;
  let numbers = [];

  // hlavné čísla
  while (numbers.length < numberCount) {
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  numbers.sort(function (a, b) {
    return a - b;
  });

  // doplnkové číslo
  let additionalNumber = Math.floor(Math.random() * additionalNumberRange) + 1;

  document.querySelector(".numbers").innerText = `${numbers.join(
    ", "
  )} | Doplnkové číslo: ${additionalNumber}`;
}
