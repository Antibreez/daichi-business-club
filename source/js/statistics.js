const $toggleBtn = $(".club-program-statistics__toggle-btn");
const $content = $(".club-program-statistics__content");

$toggleBtn.on("click", function () {
  $content.slideToggle();
  $(this).toggleClass("opened");
});
