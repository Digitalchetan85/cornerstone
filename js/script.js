jQuery(function ($) {
  "use strict";

  /* ----------------------------------------------------------- */
  /*  Fixed header
	/* ----------------------------------------------------------- */
  $(window).on("scroll", function () {
    // fixedHeader on scroll
    function fixedHeader() {
      var headerTopBar = $(".top-bar").outerHeight();
      var headerOneTopSpace = $(".header-one .logo-area").outerHeight();

      var headerOneELement = $(".header-one .site-navigation");
      var headerTwoELement = $(".header-two .site-navigation");

      if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
        $(headerOneELement).addClass("navbar-fixed");
        $(".header-one").css("margin-bottom", headerOneELement.outerHeight());
      } else {
        $(headerOneELement).removeClass("navbar-fixed");
        $(".header-one").css("margin-bottom", 0);
      }
      if ($(window).scrollTop() > headerTopBar) {
        $(headerTwoELement).addClass("navbar-fixed");
        $(".header-two").css("margin-bottom", headerTwoELement.outerHeight());
      } else {
        $(headerTwoELement).removeClass("navbar-fixed");
        $(".header-two").css("margin-bottom", 0);
      }
    }
    fixedHeader();

    // Count Up
    function counter() {
      var oTop;
      if ($(".counterUp").length !== 0) {
        oTop = $(".counterUp").offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $(".counterUp").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 1000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
      }
    }
    counter();

    // scroll to top btn show/hide
    function scrollTopBtn() {
      var scrollToTop = $("#back-to-top"),
        scroll = $(window).scrollTop();
      if (scroll >= 50) {
        scrollToTop.fadeIn();
      } else {
        scrollToTop.fadeOut();
      }
    }
    scrollTopBtn();
  });

  $(document).ready(function () {
    // navSearch show/hide
    function navSearch() {
      $(".nav-search").on("click", function () {
        $(".search-block").fadeIn(350);
      });
      $(".search-close").on("click", function () {
        $(".search-block").fadeOut(350);
      });
    }
    navSearch();

    // navbarDropdown
    function navbarDropdown() {
      if ($(window).width() < 992) {
        $(".site-navigation .dropdown-toggle").on("click", function () {
          $(this).siblings(".dropdown-menu").animate(
            {
              height: "toggle",
            },
            300
          );
        });

        var navbarHeight = $(".site-navigation").outerHeight();
        $(".site-navigation .navbar-collapse").css(
          "max-height",
          "calc(100vh - " + navbarHeight + "px)"
        );
      }
    }
    navbarDropdown();

    // back to top
    function backToTop() {
      $("#back-to-top").on("click", function () {
        $("#back-to-top").tooltip("hide");
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          800
        );
        return false;
      });
    }
    backToTop();

    // banner-carousel
    function bannerCarouselOne() {
      $(".banner-carousel.banner-carousel-1").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        speed: 600,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
      });
      $(".banner-carousel.banner-carousel-1").slickAnimation();
    }
    bannerCarouselOne();

    // banner Carousel Two
    function bannerCarouselTwo() {
      $(".banner-carousel.banner-carousel-2").slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        speed: 600,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
      });
    }
    bannerCarouselTwo();

    // pageSlider
    function pageSlider() {
      $(".page-slider").slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        speed: 600,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
      });
    }
    pageSlider();

    // Shuffle js filter and masonry
    function projectShuffle() {
      if ($(".shuffle-wrapper").length !== 0) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(
          document.querySelector(".shuffle-wrapper"),
          {
            itemSelector: ".shuffle-item",
            sizer: ".shuffle-sizer",
            buffer: 1,
          }
        );
        $('input[name="shuffle-filter"]').on("change", function (evt) {
          var input = evt.currentTarget;
          if (input.checked) {
            myShuffle.filter(input.value);
          }
        });
        $(".shuffle-btn-group label").on("click", function () {
          $(".shuffle-btn-group label").removeClass("active");
          $(this).addClass("active");
        });
      }
    }
    projectShuffle();

    // testimonial carousel
    function testimonialCarousel() {
      $(".testimonial-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 600,
        arrows: false,
      });
    }
    testimonialCarousel();

    // team carousel
    function teamCarousel() {
      $(".team-slide").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    teamCarousel();

    // media popup
    function mediaPopup() {
      $(".gallery-popup").colorbox({
        rel: "gallery-popup",
        transition: "slideshow",
        innerHeight: "500",
      });
      $(".popup").colorbox({
        iframe: true,
        innerWidth: 600,
        innerHeight: 400,
      });
    }
    mediaPopup();
  });
});

function sendContact() {
  var valid;
  valid = sideContact();

  if (valid) {
    $("#mail-status").html(
      '<div class="text-center pt-3"><div class="spinner-border text-success" role="status"><span class="visually-hidden"></span></div></div>'
    );

    

    jQuery.ajax({
      url: "https://buildeskapi.azurewebsites.net/api/Webhook",
      type: "POST",
      data: {
        apikey: "902cb429-2dcc-4176-9958-a8610a354817",
        firstname: $("#name").val(),
        lastname: "",
        source: "Cornerstone",
        mobile: $("#phone").val(),
        CreatedDate: "20/01/2022",
        email: $("#email").val(),
        Remark: "Brochure Downloaded",
        HasVisitScheduled: "false",
        VisitDate: "null",
      },

      success: function (data) {
        if (data.Success) {
          $("#mail-status").html(
            "<p class='alert alert-success m-2'><strong>Thanks for contacting us. We will reach you soon.</strong></p>"
          );
          dataclear();
          // window.location.href = "./thank-you.html";
		  jQuery.ajax({
			url: "mail.php",
			type: "POST",
			data:
			  "name=" +
			  $("#name").val() +
			  "&email=" +
			  $("#email").val() +
			  "&phone=" +
			  $("#phone").val(),
		  });
        }
      },
    });
  }
}

function dataclear() {
  $("#name").val("");
  $("#email").val("");
  $("#phone").val("");
}

function sideContact() {
  var valid = true;
  //alert("HI");

  $("#name-info").html("");
  $("#name").css("border-color", "#5cb85c");

  $("#email-info").html("");
  $("#email").css("border-color", "#5cb85c");

  $("#phone-info").html("");
  $("#phone").css("border-color", "#5cb85c");

  if (!$("#name").val()) {
    $("#name-info").html("Enter Your Name");
    $("#name").css("border-color", "#dc3545");
    $("#mail-status").html(
      '<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
    );
    valid = false;
  }
  if (!$("#email").val()) {
    $("#email-info").html("Email ID required");
    $("#email").css("border-color", "#dc3545");
    $("#mail-status").html(
      '<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
    );
    valid = false;
  }
  if (
    !$("#email")
      .val()
      .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
  ) {
    $("#email-info").html("Please enter valid Email ID.");
    $("#email").css("border-color", "#dc3545");
    $("#mail-status").html(
      '<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
    );
    valid = false;
  }

  if (!$("#phone").val()) {
    $("#phone-info").html("Provide Contact No.");
    $("#phone").css("border-color", "#dc3545");
    $("#mail-status").html(
      '<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
    );
    valid = false;
  }

  if (
    !$("#phone")
      .val()
      .match(/^[0-9]{10}$/)
  ) {
    $("#phone-info").html("Provide valid contact No.");
    $("#phone").css("border-color", "#dc3545");
    $("#mail-status").html(
      '<p class="alert text-center alert-danger m-2 fw-bold">Please Enter Valid details.</p>'
    );
    valid = false;
  }

  return valid;
}

function SideContact() {
	var valid;
	valid = sideContact1();
  
	if (valid) {
	  $("#side-mail-status").html(
		'<div class="text-center pt-3"><div class="spinner-border text-success" role="status"><span class="visually-hidden"></span></div></div>'
	  );
  
	  
  
	  jQuery.ajax({
		url: "https://buildeskapi.azurewebsites.net/api/Webhook",
		type: "POST",
		data: {
		  apikey: "902cb429-2dcc-4176-9958-a8610a354817",
		  firstname: $("#side-name").val(),
		  lastname: "",
		  source: "Cornerstone",
		  mobile: $("#side-phone").val(),
		  CreatedDate: "20/01/2022",
		  email: $("#side-email").val(),
		  Remark: "Brochure Downloaded",
		  HasVisitScheduled: "false",
		  VisitDate: "null",
		},
  
		success: function (data) {
		  if (data.Success) {
			$("#side-mail-status").html(
			  "<p class='alert alert-success m-2'><strong>Thanks for contacting us. We will reach you soon.</strong></p>"
			);
			dataclear();
			// window.location.href = "./thank-you.html";
			jQuery.ajax({
				url: "side-mail.php",
				type: "POST",
				data:
				  "side-name=" +
				  $("#side-name").val() +
				  "&side-email=" +
				  $("#side-email").val() +
				  "&side-phone=" +
				  $("#side-phone").val() +
				  "&side-msg=" +
				  $("#side-msg").val(),
			  });
		  }
		},
	  });
	}
  }
  
  function dataclear() {
	$("#side-name").val("");
	$("#side-email").val("");
	$("#side-phone").val("");
  }
  
  function sideContact1() {
	var valid = true;
	//alert("HI");
  
	$("#side-name-info").html("");
	$("#side-name").css("border-color", "#5cb85c");
  
	$("#side-email-info").html("");
	$("#side-email").css("border-color", "#5cb85c");
  
	$("#side-phone-info").html("");
	$("#side-phone").css("border-color", "#5cb85c");
  
	if (!$("#side-name").val()) {
	//   $("#side-name-info").html("Enter Your Name");
	  $("#side-name").css("border-color", "#dc3545");
	  $("#side-mail-status").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
	if (!$("#side-email").val()) {
	//   $("#side-email-info").html("Email ID required");
	  $("#side-email").css("border-color", "#dc3545");
	  $("#side-mail-status").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
	if (
	  !$("#side-email")
		.val()
		.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
	) {
	//   $("#side-email-info").html("Please enter valid Email ID.");
	  $("#side-email").css("border-color", "#dc3545");
	  $("#side-mail-status").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
  
	if (!$("#side-phone").val()) {
	//   $("#side-phone-info").html("Provide Contact No.");
	  $("#side-phone").css("border-color", "#dc3545");
	  $("#side-mail-status").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
  
	if (
	  !$("#side-phone")
		.val()
		.match(/^[0-9]{10}$/)
	) {
	//   $("#side-phone-info").html("Provide valid contact No.");
	  $("#side-phone").css("border-color", "#dc3545");
	  $("#side-mail-status").html(
		'<p class="alert text-center alert-danger m-2 fw-bold">Please Enter Valid details.</p>'
	  );
	  valid = false;
	}
  
	return valid;
  }


  function SideContact1() {
	var valid;
	valid = sideContact11();
  
	if (valid) {
	  $("#side-mail-status1").html(
		'<div class="text-center pt-3"><div class="spinner-border text-success" role="status"><span class="visually-hidden"></span></div></div>'
	  );
  
	  jQuery.ajax({
		url: "https://buildeskapi.azurewebsites.net/api/Webhook",
		type: "POST",
		data: {
		  apikey: "902cb429-2dcc-4176-9958-a8610a354817",
		  firstname: $("#side-name1").val(),
		  lastname: "",
		  source: "Cornerstone",
		  mobile: $("#side-phone1").val(),
		  CreatedDate: "20/01/2022",
		  email: $("#side-email1").val(),
		  Remark: "Brochure Downloaded",
		  HasVisitScheduled: "false",
		  VisitDate: "null",
		},
  
		success: function (data) {
		  if (data.Success) {
			$("#side-mail-status1").html(
			  "<p class='alert alert-success m-2'><strong>Thanks for contacting us. We will reach you soon.</strong></p>"
			);
			dataclear();
			// window.location.href = "./thank-you.html";

			jQuery.ajax({
				url: "side-mail1.php",
				type: "POST",
				data:
				  "side-name1=" +
				  $("#side-name1").val() +
				  "&side-email1=" +
				  $("#side-email1").val() +
				  "&side-phon1=" +
				  $("#side-phone1").val() +
				  "&side-msg1=" +
				  $("#side-msg1").val(),
			  });
		  }
		},
	  });
	}
  }
  
  function dataclear() {
	$("#side-name1").val("");
	$("#side-email1").val("");
	$("#side-phone1").val("");
  }
  
  function sideContact11() {
	var valid = true;
	//alert("HI");
  
	$("#side-name-info1").html("");
	$("#side-name1").css("border-color", "#5cb85c");
  
	$("#side-email-info1").html("");
	$("#side-email1").css("border-color", "#5cb85c");
  
	$("#side-phone-info1").html("");
	$("#side-phone1").css("border-color", "#5cb85c");
  
	if (!$("#side-name1").val()) {
	//   $("#side-name-info").html("Enter Your Name");
	  $("#side-name1").css("border-color", "#dc3545");
	  $("#side-mail-status1").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
	if (!$("#side-email1").val()) {
	//   $("#side-email-info").html("Email ID required");
	  $("#side-email1").css("border-color", "#dc3545");
	  $("#side-mail-status1").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
	if (
	  !$("#side-email1")
		.val()
		.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
	) {
	//   $("#side-email-info").html("Please enter valid Email ID.");
	  $("#side-email1").css("border-color", "#dc3545");
	  $("#side-mail-status1").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
  
	if (!$("#side-phone1").val()) {
	//   $("#side-phone-info").html("Provide Contact No.");
	  $("#side-phone1").css("border-color", "#dc3545");
	  $("#side-mail-status1").html(
		'<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>'
	  );
	  valid = false;
	}
  
	if (
	  !$("#side-phone1")
		.val()
		.match(/^[0-9]{10}$/)
	) {
	//   $("#side-phone-info").html("Provide valid contact No.");
	  $("#side-phone1").css("border-color", "#dc3545");
	  $("#side-mail-status1").html(
		'<p class="alert text-center alert-danger m-2 fw-bold">Please Enter Valid details.</p>'
	  );
	  valid = false;
	}
  
	return valid;
  }
