"use-strict";

/*Preloader START*/

const preloader = document.querySelector(".preloader");
const loading = document.querySelector(".loading");

$(window).on("load", function () {
  $(".preloader").fadeOut();
  type();
});

/*Preloader END*/

/*Progress bar START*/

window.onscroll = function () {
  let pos = document.documentElement.scrollTop;
  let calc_height =
    document.body.scrollHeight - document.documentElement.clientHeight;
  let scroll = (pos * 100) / calc_height;
  document.getElementById("progress").style.width = scroll + "%";
};

/*Progress bar END*/

/*Text animation START*/

const texts = ["Welcome to my website!", "Scroll down to meet me"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
}

/*Text Animation END*/

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

/*Smooth scroll START*/

$(".navigation-item a, .top-btn a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000
    );
  }
});

/*Smooth scroll END*/

/*Animations for paragraphs  START*/

const screenPosition = window.innerHeight * 0.85;

/*Show About section on scroll*/

function appearOnScrollAboutSection() {
  const aboutInfo = document.querySelector(".about-info");
  const aboutInfoPosition = aboutInfo.getBoundingClientRect().top;
  if (aboutInfoPosition < screenPosition) {
    aboutInfo.classList.add("about-info-show");
  } else {
    aboutInfo.classList.remove("about-info-show");
  }
}

window.addEventListener("scroll", appearOnScrollAboutSection);

/*Portfolio section animations*/

function portforlioSectionAppear() {
  /*Project description*/
  const projectDesc = document.querySelectorAll(".project-description");

  /*For desktop*/
  for (let i = 0; i < projectDesc.length; i++) {
    const projectDescPosition = projectDesc[i].getBoundingClientRect().top;

    if (projectDescPosition < screenPosition) {
      projectDesc[i].classList.add("show-desc");
    } else {
      projectDesc[i].classList.remove("show-desc");
    }

    /*Heading*/
    const heading = document.querySelector(".portfolio .heading");
    const headingPos = heading.getBoundingClientRect().top;
    if (headingPos < screenPosition) {
      heading.classList.add("show-desc");
    } else {
      heading.classList.remove("show-desc");
    }
  }
}
window.addEventListener("scroll", portforlioSectionAppear);

/*Contact animation*/

function contactAnimation() {
  const contact = document.querySelector(".contact");
  const contactHeading = document.querySelector(".contact .heading");
  const contactLinks = document.querySelector(".contact .contact-info");
  const contactPos = contact.getBoundingClientRect().top;
  if (contactPos < screenPosition) {
    contactHeading.classList.add("show-contact");
    contactLinks.classList.add("show-contact");
  } else {
    contactHeading.classList.remove("show-contact");
    contactLinks.classList.remove("show-contact");
  }
}
window.addEventListener("scroll", contactAnimation);

/*Animations for paragraphs END*/

/*Show number and mail on hover and mail on click START*/

$(".phone-show-desk").mouseenter(function () {
  $(".phone").css("opacity", "1");
});
$(".phone-show-desk").mouseleave(function () {
  $(".phone").css("opacity", "0");
});

$(".mail-show").mouseenter(function () {
  $(".email").css("opacity", "1");
});
$(".mail-show").mouseleave(function () {
  $(".email").css("opacity", "0");
});

/*Show number and mail on hover and mail on click END*/

/*Top btn show/hide START*/

$(document).ready(function () {
  checkScroll();
  $(window).scroll(checkScroll);
});

function checkScroll() {
  if ($(window).scrollTop() >= 350) {
    $(".top-btn").removeClass("hide");
  } else {
    $(".top-btn").addClass("hide");
  }
}

/*Top btn show/hide END*/
