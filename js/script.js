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
  const numberCount = 5;
  const maxNumber = 50;
  const additionalNumberRange = 12;
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

  // doplnkové čísla
  let additionalNumbers = [];
  while (additionalNumbers.length < 2) {
    let randomAdditionalNumber =
      Math.floor(Math.random() * additionalNumberRange) + 1;
    if (!additionalNumbers.includes(randomAdditionalNumber)) {
      additionalNumbers.push(randomAdditionalNumber);
    }
  }
  additionalNumbers.sort(function (a, b) {
    return a - b;
  });

  document.querySelector(".numbers").innerText = `${numbers.join(
    ", "
  )} | Doplnkové čísla: ${additionalNumbers.join(", ")}`;
}
