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

$(document).ready(function () {
  var pathA = document.getElementById("pathA"),
    pathC = document.getElementById("pathC"),
    segmentA = new Segment(pathA, 8, 32),
    segmentC = new Segment(pathC, 8, 32);

  // Linear section, with a callback to the next
  function inAC(s) {
    s.draw("80% - 24", "80%", 0.3, {
      delay: 0.1,
      callback: function () {
        inAC2(s);
      },
    });
  }

  // Elastic section, using elastic-out easing function
  function inAC2(s) {
    s.draw("100% - 54.5", "100% - 30.5", 0.6, {
      easing: ease.ease("elastic-out", 1, 0.3),
    });
  }

  // Running the animations
  inAC(segmentA); // top bar
  inAC(segmentC); // bottom bar

  // Initialize
  var pathB = document.getElementById("pathB"),
    segmentB = new Segment(pathB, 8, 32);

  // Expand the bar a bit
  function inB(s) {
    s.draw(8 - 6, 32 + 6, 0.1, {
      callback: function () {
        inB2(s);
      },
    });
  }

  // Reduce with a bounce effect
  function inB2(s) {
    s.draw(8 + 12, 32 - 12, 0.3, { easing: ease.ease("bounce-out", 1, 0.3) });
  }

  // Run the animation
  inB(segmentB);

  function outAC(s) {
    s.draw("90% - 24", "90%", 0.1, {
      easing: ease.ease("elastic-in", 1, 0.3),
      callback: function () {
        outAC2(s);
      },
    });
  }
  function outAC2(s) {
    s.draw("20% - 24", "20%", 0.3, {
      callback: function () {
        outAC3(s);
      },
    });
  }
  function outAC3(s) {
    s.draw(8, 32, 0.7, { easing: ease.ease("elastic-out", 1, 0.3) });
  }

  function outB(s) {
    s.draw(8, 32, 0.7, {
      delay: 0.1,
      easing: ease.ease("elastic-out", 2, 0.4),
    });
  }

  // Run the animations
  outAC(segmentA);
  outB(segmentB);
  outAC(segmentC);

  var trigger = document.getElementById("menu-icon-trigger"),
    toCloseIcon = true;

  trigger.onclick = function () {
    if (toCloseIcon) {
      inAC(segmentA);
      inB(segmentB);
      inAC(segmentC);
    } else {
      outAC(segmentA);
      outB(segmentB);
      outAC(segmentC);
    }
    toCloseIcon = !toCloseIcon;
  };
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
