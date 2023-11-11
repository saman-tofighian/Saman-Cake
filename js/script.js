let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 540) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $("#to-top").addClass("show");
    } else {
      $("#to-top").removeClass("show");
    }
  });
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 7300,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() - 200 > 0) {
      $("#to-top").stop().slideDown("fast"); // show the button
    } else {
      $("#to-top").stop().slideUp("fast"); // hide the button
    }
  });
});
$(function () {
  $("#to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
});
(function ($) {
  "use strict";
  $(window).on("load", function () {
    $(".preloader").fadeOut(700);
  });
})(jQuery);

var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

Notification.requestPermission().then(function showNotification() {
  var mynotif = new Notification("خیلی  خوش اومدین", {
    body: "ما اینجا بهترین قهوه ها رو بهتون می دیم",
    icon: "images/logo2.svg",
  });
});

var message = "** You can not use left click **";

function rtclickcheck(keyp) {
  if (navigator.appName == "Netscape" && keyp.which == 3) {
    alert(message);
    return false;
  }

  if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
    alert(message);
    return false;
  }
}

document.onmousedown = rtclickcheck;

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-parallax").forEach((elm) => {
    let speed = elm.getAttribute("data-speed");

    let x = (window.innerWidth - e.pageX * speed) / 100;
    let y = (window.innerHeight - e.pageY * speed) / 100;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".home-parallax").forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

window.addEventListener("focus", () => {
  document.title = "CoffeeShop | Saman Tofighian";
});

window.addEventListener("blur", () => {
  document.title = "Come Back Baby 😉😂";
});
