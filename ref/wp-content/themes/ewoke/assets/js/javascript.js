$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $("header").addClass("fix");
    } else {
      $("header").removeClass("fix");
    }
  });

  $(".menu-icon-wrapper").click(function () {
    $(".main-menu").toggleClass("open");
    $(this).toggleClass("open");
  });

  /* smooth scroll */
  SmoothScroll({ stepSize: 30 });

  /* goto top btn */
  $(".goto-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 3000);
  });

  /* goto bottom btn */
  $(".goto-bottom").on("click", function () {
    var data_id = $(this).data("id");
    $("html, body").animate(
      {
        scrollTop: $("#" + data_id).offset().top,
      },
      "slow"
    );
  });

  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress_bar").style.height = scrolled + "%";
  }

  const results = Splitting();
  const elems = document.querySelectorAll(".char");
  observer = new IntersectionObserver((entries) => {
    // console.log(entries[0]);
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `fadeInRight 0.3s calc(0.3s + (0.1s * var(--char-index))) forwards ease-in-out`;
      }
      // else{
      //     entry.target.style.animation = 'none';
      // }
    });
  });
  elems.forEach((elem) => {
    observer.observe(elem);
  });

  /* preloader */
  // $(document).ready(function() {
  //     $('.preloader').fadeOut();
  // });
  window.setTimeout(function () {
    $(".preloader").fadeOut();
  }, 1000);
});

$(document).ready(function () {
  $("#banner").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    mouseDrag: false,
    touchDrag: false,
    dots: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

/*$(document).ready(function () {

            $(document).mousemove(function(e) {
                $('.cursor').eq(0).css({
                    left: e.clientX - 7+'px',
                    top: e.clientY - 7+'px'
                });
                $('a, .btn, .menu-btn, button').hover(function () {
                    $('.cursor').eq(0).css({
                        left: e.clientX - 15+'px',
                        top: e.clientY - 15+'px',
                        width: 30+'px',
                        height: 30+'px',
                        opacity: 0.5
                    });
                },function () {
                    $('.cursor').eq(0).css({
                        left: e.clientX - 7+'px',
                        top: e.clientY - 7+'px',
                        width: 15+'px',
                        height: 15+'px',
                        opacity: 1
                    });
                })
            });
        });*/
