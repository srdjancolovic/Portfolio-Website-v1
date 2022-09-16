/*Close nav links on click & Toggle menu START*/

$(document).ready(function () {
  $(".button").click(function () {
    $(".overlay").fadeToggle(200);
    $(".button .btn-open").toggleClass("open").toggleClass("btn-close");
  });
});
$(".overlay").on("click", function () {
  $(".overlay").fadeToggle(200);
  $(".button .btn-open").toggleClass("open").toggleClass("btn-close");
  open = false;
});

/*Close nav links on click & Toggle menu END*/

/*Progress bar START*/

window.onscroll = function () {
  let pos = document.documentElement.scrollTop;
  let calc_height =
    document.body.scrollHeight - document.documentElement.clientHeight;
  let scroll = (pos * 100) / calc_height;
  document.getElementById("progress").style.width = scroll + "%";
};

/*Progress bar END*/

/*Preloader START*/

$(window).on("load", function () {
  $(".preloader").fadeOut();
});

/*Preloader END*/
