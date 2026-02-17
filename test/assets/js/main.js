/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
  'use strict';

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      rtsJs.menuCurrentLink();
      rtsJs.wowActive();
      rtsJs.jaraLux();
      rtsJs.swiperActive();
      rtsJs.counterUp();
      rtsJs.headerSticky();
      rtsJs.vedioActivation();
      rtsJs.backToTopInit();
      rtsJs.countDown();
      rtsJs.sideMenu();
      rtsJs.preloader();
      rtsJs.rtlToggle();
    },

    menuCurrentLink: function () {
      var currentPage = location.pathname.split("/"),
        current = currentPage[currentPage.length - 1];
      $('.parent-nav li > a').each(function () {
        var $this = $(this);
        if ($this.attr('href') === current) {
          $this.addClass('active');
          $this.parents('.has-dropdown').addClass('menu-item-open')
        }
      });
    },
    wowActive: function () {
      new WOW().init();
    },

    jaraLux: function (e) {

      $(document).ready(function () {
        SVGInject(document.querySelectorAll("img.injectable"));
        // Function to detect if the device is mobile
        function isMobileDevice() {
          return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Initialize jarallax only if it's not a mobile device
        if (!isMobileDevice()) {
          $('.jarallax').jarallax();
        } else {
          console.log('Jarallax skipped on mobile devices');
        }
      });

    },
    swiperActive: function (e) {
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-Testimonials", {
          slidesPerView: 2,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          speed: 1000,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 0,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-service-inenr", {
          slidesPerView: 3.8,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3.8,
              spaceBetween: 25,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-case", {
          slidesPerView: 2.2,
          spaceBetween: 30,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 2.2,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 2.2,
              spaceBetween: 25,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-testimonials", {
          slidesPerView: 3.2,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 0,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-testimonials-4", {
          slidesPerView: 2.4,
          spaceBetween: 150,
          loop: true,
          speed: 1000,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            1280: {
              slidesPerView: 2.4,
              spaceBetween: 150,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-testimonials-5", {
          slidesPerView: 3,
          spaceBetween: 18,
          loop: true,
          speed: 700,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          speed: 1000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-project-5", {
          slidesPerView: 3,
          spaceBetween: 48,
          loop: true,
          speed: 1000,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-brand", {
          slidesPerView: 5,
          spaceBetween: 48,
          loop: true,
          speed: 700,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 25,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-brand-2", {
          slidesPerView: 5,
          spaceBetween: 60,
          loop: true,
          speed: 700,
          centeredSlides: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 25,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-case-slider", {
          slidesPerView: 3.5,
          spaceBetween: 48,
          loop: true,
          speed: 700,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            980: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            }
          },
        });
      });

    },
    counterUp: function () {
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');
    },

    headerSticky: function () {
      var header = $('.header--sticky');
      var win = $(window);
      win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 100) {
          header.removeClass("sticky");
        } else {
          header.addClass("sticky");
        }
      });

    },
    vedioActivation: function () {
      $(document).ready(function () {
        $('.popup-youtube, .popup-video').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
    },
    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
          }
        });
        jQuery('.progress-wrap').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        })


      });
    },

    countDown: function () {

      let countDown = document.getElementsByClassName('countdown');
      if (countDown.length) {
        document.addEventListener("DOMContentLoaded", function () {
          // Get the countdown element and the end date from its attribute
          const countdownElement = document.getElementById("countdown");
          const endDate = countdownElement.getAttribute("data-end-date");
          const endTime = new Date(endDate).getTime();

          if (isNaN(endTime)) {
            document.querySelector(".timer-section").innerHTML = "Invalid end date!";
            return;
          }

          // Get references to the time unit elements
          const daysElement = document.getElementById("days");
          const hoursElement = document.getElementById("hours");
          const minutesElement = document.getElementById("minutes");
          const secondsElement = document.getElementById("seconds");

          // Update the countdown every second
          const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDifference = endTime - currentTime;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Update the timer elements
            if (timeDifference > 0) {
              daysElement.textContent = days;
              hoursElement.textContent = hours;
              minutesElement.textContent = minutes;
              secondsElement.textContent = seconds;
            } else {
              // Clear the interval and display "Time's up" when countdown ends
              clearInterval(countdownInterval);
              document.querySelector(".timer-section").innerHTML = "Time's up!";
            }
          }, 1000);
        });
      }





    },
    sideMenu: function () {
      // metismenu active
      $('#mobile-menu-active').metisMenu();

      // collups menu side right
      $(document).on('click', '.menu-btn-toggle', function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '.onepage .mainmenu li a', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },
    preloader: function () {
      window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
      });
    },

    rtlToggle: function () {

      $(document).ready(function () {
        // Retrieve the saved direction from localStorage
        const savedDir = localStorage.getItem("pageDirection") || "ltr"; // Default to "ltr"
        $("body").attr("dir", savedDir);

        // Update button visibility based on saved direction
        if (savedDir === "rtl") {
          $(".rtl").removeClass("show");
          $(".ltr").addClass("show");
        } else {
          $(".rtl").addClass("show");
          $(".ltr").removeClass("show");
        }

        // Toggle direction and save state on button click
        $(".rtl-ltr-switcher-btn").on("click", function () {
          const currentDir = $("body").attr("dir");
          const newDir = currentDir === "rtl" ? "ltr" : "rtl";

          // Update body direction
          $("body").attr("dir", newDir);

          // Toggle button visibility
          $(".rtl").toggleClass("show");
          $(".ltr").toggleClass("show");

          // Save the new direction in localStorage
          localStorage.setItem("pageDirection", newDir);
        });
      });

    },

  }

  rtsJs.m();
})(jQuery, window)







