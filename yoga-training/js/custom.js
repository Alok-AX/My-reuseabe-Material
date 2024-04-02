
//Sticky header script
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("stickyHeader");
    } else {
        $("header").removeClass("stickyHeader");
    }
});

// Changing logo url in sticky header
$(document).ready(function() {
    var templateUrl = theme_vars.templateUrl;
    var initialSrc =  templateUrl + "images/png/logo.png";
    var scrollSrc =  templateUrl + "images/png/white-logo.png";

    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 50)
            $(".logo").attr("src", scrollSrc);
        else
            $(".logo").attr("src", initialSrc);
    });
});

// //yoga-trainer-videos-slider
$(document).ready(function() {
    $('.yoga-trainer-videos-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        arrows: true,
        dots:false,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    centerMode: false,
                    
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                    centerMode: false,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
        ],
        prevArrow: $('.yoga-trainer-arrow-left'),
        nextArrow: $('.yoga-trainer-arrow-right')
    });
});

// //yoga-trainer-main-slider-slider
$(document).ready(function() {
    $('.yoga-trainer-main-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: true,
        arrows: true,
        dots:false,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
        ],
        prevArrow: $('.yoga-trainer-arrow-left'),
        nextArrow: $('.yoga-trainer-arrow-right')
    });
});




// check box js

$(document).ready(function() {
function check() {
    var checkBox = $("#checkbox");
    var text1 = $(".text1");
    var text2 = $(".text2");
    text1.each(function(i) {
    if (checkBox.prop("checked")) {
        $(this).css("display", "block");
        text2.eq(i).css("display", "none");
    } else {
        $(this).css("display", "none");
        text2.eq(i).css("display", "block");
    }
    });
}
check();
$("#checkbox").on("click", check);
});
// check box js

//scrolling nav
$(document).ready(function() {
    // Add scrollspy to <body>
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarText a, .quick-links-layout a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.replace = hash;
            });
        } // End if
    });
});

// counter js start here
function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 3000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }

}

//When the document is ready
$(function() {
    $(window).scroll(function() {
        $("h2[data-max]").each(function() {
            inVisible($(this));
        });
    })
});
// counter js end here

// Initiate animation the wowjs
new WOW().init();


  //fancy popup
  $(document).ready(function() {
    // add all to same gallery
    $(".gallery a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $(".gallery a").each(function(){
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $(".gallery a").fancybox();
    });
  //fancy popup