$("#loading").delay(1000).fadeOut("");
$(document).ready(function () {
    var wWindown = $(window).width();

    /*Action Close Menu*/
    $(document).on("click", ".-close-menu", function () {
        $(".block-header__menu").removeClass("-show-menu");
    });

    /*Action Show Menu*/
    $(document).on("click", ".block-header__right a", function () {
        $(".block-header__menu").addClass("-show-menu");
    });


    $("#menu-bar-show").click(function () {
        $(".menu-mobile").css("transform", "translateY(0)")
    })
    $("#menu-bar-hide").click(function () {
        $(".menu-mobile").css("transform", "translateY(100%)")
    })

    /*Action Scroll*/
    $(".tab-scroll a").click(function () {
        var id = $(this).attr("href");
        var heightHeader = 78;
        if (wWindown >= 768) {
            heightHeader = 125;
        }
        $("html, body").animate({scrollTop: $(id).offset().top - heightHeader}, 1000);
    })


    /*Action View Detail*/
    $(".block-stay-plan__button.-view-menu a").click(function () {
        // $(".block-stay-plan__button.-view-menu").toggleClass("-show-description");
        $(this).parent().toggleClass("-show-description");
    });

    $(".block-stay-plan__close-description").click(function () {
        $(".block-stay-plan__button.-view-menu").removeClass("-show-description");
    });

    /*Action Play Video*/
    $(".play").click(function () {
        $(this).parent().find("video").trigger('play');
        $(this).hide();
    })

    $("video").click(function () {
        $(this).trigger('pause');
        $(this).parent().find(".play").show();
    })


    $("#scroll-element").click(function () {
        $("html, body").animate({scrollTop: $("#block-home-why").offset().top}, "slow");
        return false;
    });

    if (window.location.hash) {
        var heightHeader = 78;
        if (wWindown >= 768) {
            heightHeader = 125;
        }
        $("html, body").scrollTop($(window.location.hash).offset().top - heightHeader);
    }


    $(".home-content__tab-header a").click(function () {
        var id = $(this).attr("data-href");
        $(".home-content__tab-header a").removeClass("-active");
        $(this).addClass("-active");
        $(".home-content__tab1-content").hide();
        $(id).show();
    })

    $('.slider-store').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $(".box-thumbnail img").click(function () {
        var index = $(this).attr("data-index");
        console.log(index)
        $(this).closest(".slide-img").find(".slider-store").trigger("to.owl.carousel", [parseInt(index), 500, true]);
    });

});

function scrollID(id) {
    $("html, body").animate({scrollTop: $(id).offset().top}, "slow");
}

$(document).on("click", ".navbar-toggler-mobile .icon-open", function () {
    $("#menu").show("collapse-mobile");
    // $("#menu").addClass("collapsed");
    $("body").addClass("hidden-scroll");
    $(".navbar-toggler-mobile").removeClass("collapsed-mobile")
});

$(document).on("click", ".navbar-toggler-mobile .icon-close", function () {
    // $("#menu").removeClass("collapsed");
    $("#menu").hide("collapse-mobile");
    $("body").removeClass("hidden-scroll");
    $(".navbar-toggler-mobile").addClass("collapsed-mobile")
});

$(document).ready(function () {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


$(".btn-close").click(function () {
    setTimeout(function () {
        $("#navbarNavDropdown").removeClass("show");
    }, 500)
});
$('a[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('.navbar-collapse').each(function () {
            if (!$('.navbar-collapse').hasClass('show')) {
                // $('body').addClass('stop-scroll');
            } else {
                // $('body').removeClass('stop-scroll');
                $('body').removeClass('stop-scroll');
                $(this).removeClass('show');
            }
        })
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        return false;
    }
});


$(".auto-submit input, .auto-submit select").change(function () {
    $(this).closest("form").submit()
})

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                    $('.slide-top').owlCarousel({
                        loop: true,
                        margin: 33,
                        nav: true,
                        responsive: {
                            0: {
                                items: 1,
                                margin: 20,
                                nav: true, dots: false

                            },
                            600: {
                                items: 2,
                                nav: true,
                                dots: false
                            },
                            1000: {
                                items: 3,
                                nav: true,
                                dots: false
                            }
                        }
                    })
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
    let hiddenPath = document.getElementById('hiddenPath')
    let imgs = document.getElementsByTagName('img')
    if (hiddenPath) {
        for (i = 0; i < imgs.length; i++) {
            imgs[i].attributes.src.value = hiddenPath.value + imgs[i].attributes.src.value
        }
    }
};
includeHTML();

var heroSlidesIndex = 0
if ($('.block-banner .slides').length) {
    initSlide(heroSlidesIndex);
}

function initSlide(num) {
    var elem = $('.block-banner .slides li');
    for (var i = elem.length - 1; i >= 0; i--) {
        if (i === num) {
            elem.eq(i).addClass('js__on');
        } else {
            elem.eq(i).removeClass('js__on');
        }
    }

    var elem2 = $('.thumbnails a');
    for (var i = elem2.length - 1; i >= 0; i--) {
        if (i === num) {
            elem2.eq(i).addClass('js__on');
        } else {
            elem2.eq(i).removeClass('js__on');
        }
    }
    setTimeout(function () {
        if (elem.length - 1 === heroSlidesIndex) {
            heroSlidesIndex = 0;
        } else {
            heroSlidesIndex++;
        }
        initSlide(heroSlidesIndex);
    }, 4000);
}

//逕ｻ蜒上�遘ｻ蜍募�逅�
function loopslider() {
    var cnt = 0;
    setInterval(function () {
        cnt++;
        $(".block-transition").css({
            left: (cnt * -0.1) + 'px'
        });

        if (cnt == $(".block-transition-ctn").width()) {
            cnt = 0;
            $(".block-transition").css({
                left: 0
            });
        }
    }, 0);
}

function changeImageRenovationDetail(src, order, total) {
    document.getElementById('renovation-detail-img').src = src
    let carouselCtn = document.getElementById('carousel-ctn')
    var images = carouselCtn.getElementsByTagName("img");
    var imagesDiv = carouselCtn.getElementsByClassName("item");
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
        imagesDiv[i].classList.remove("active");
    }
    let imageToAddClass = document.getElementsByClassName('img-car-' + order)
    for (let j = 0; j < imageToAddClass.length; j++) {
        imageToAddClass[j].classList.add("active");
    }
    let imageDivToAddClass = document.getElementsByClassName('img-item-car-' + order)
    for (let j = 0; j < imageToAddClass.length; j++) {
        imageDivToAddClass[j].classList.add("active");
    }
}

function checkBackUrl() {
    let urlPath = document.referrer.split('/')
    if (urlPath.length === 6 && urlPath[3] === 'renovation' && isNaN(parseInt(urlPath[4]))) {
        let url = document.getElementById('site-url');
        window.location.href = `${url.value}/renovation/${urlPath[4]}`;
    } else {
        let url = document.getElementById('site-url');
        window.location.href = `${url.value}/renovation`;
    }
}

// Play / pause.
// $("#play_video").click(function () {
//     var videoObject = $(this).closest(".video").find("video")[0];
//     if (videoObject.paused == true) {
//         videoObject.play();
//         $(this).closest(".video").addClass("playing").removeClass("paused");
//     } else {
//         videoObject.pause();
//         $(this).closest(".video").addClass("paused").removeClass("playing");
//     }
// })
// var pdfList = $(".pdf-preview");
// var pdfjsLib = window['pdfjs-dist/build/pdf'];
// pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
// if (pdfList.length > 0) {
//     for (var i = 0; i < pdfList.length; i++) {
//         if (!pdfList[i]) {
//             continue;
//         }
//         myFunc(pdfList[i], i)
//         setTimeout(function () {
//             $(".block-place-club-content .owl-carousel").owlCarousel({
//                 loop: true,
//                 nav: true,
//                 dots: false,
//                 items: 1,
//                 navText: ["<svg width=\"32\" height=\"16\" viewBox=\"0 0 32 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
//                 "<path opacity=\"1\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.3574 0.0836225C8.49044 0.138829 8.61129 0.21974 8.71301 0.321722C8.81499 0.423446 8.8959 0.54429 8.95111 0.677332C9.00632 0.810374 9.03473 0.953001 9.03473 1.09704C9.03473 1.24108 9.00632 1.38371 8.95111 1.51675C8.8959 1.6498 8.81499 1.77064 8.71301 1.87236L4.01133 6.57227H30.9049C31.1953 6.57227 31.4739 6.68764 31.6793 6.89301C31.8846 7.09838 32 7.37692 32 7.66735C32 7.95779 31.8846 8.23633 31.6793 8.44169C31.4739 8.64706 31.1953 8.76244 30.9049 8.76244H4.01093L8.71301 13.4627C8.91864 13.6684 9.03416 13.9473 9.03416 14.2381C9.03416 14.5289 8.91864 14.8078 8.71301 15.0134C8.50739 15.219 8.22849 15.3345 7.93769 15.3345C7.64689 15.3345 7.368 15.219 7.16237 15.0134L0.591858 8.44288C0.489878 8.34115 0.408966 8.22031 0.35376 8.08727C0.298553 7.95422 0.270136 7.8116 0.270136 7.66756C0.270136 7.52351 0.298553 7.38089 0.35376 7.24785C0.408966 7.1148 0.489878 6.99396 0.591858 6.89223L7.16237 0.321722C7.2641 0.21974 7.38494 0.138829 7.51798 0.0836225C7.65102 0.0284161 7.79365 0 7.93769 0C8.08173 0 8.22436 0.0284161 8.3574 0.0836225Z\" fill=\"black\"/>\n" +
//                 "</svg>", "<svg width=\"32\" height=\"16\" viewBox=\"0 0 51 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
//                 "<path opacity=\"1\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.0011 0.13633C37.7873 0.226334 37.5931 0.358244 37.4296 0.524505C37.2656 0.690347 37.1356 0.887359 37.0469 1.10426C36.9581 1.32116 36.9124 1.55368 36.9124 1.78852C36.9124 2.02335 36.9581 2.25587 37.0469 2.47277C37.1356 2.68967 37.2656 2.88669 37.4296 3.05253L44.9867 10.7148H1.76016C1.29333 10.7148 0.845632 10.9029 0.515539 11.2378C0.185445 11.5726 0 12.0267 0 12.5002C0 12.9737 0.185445 13.4278 0.515539 13.7626C0.845632 14.0974 1.29333 14.2855 1.76016 14.2855H44.9873L37.4296 21.9484C37.099 22.2836 36.9134 22.7383 36.9134 23.2124C36.9134 23.6865 37.099 24.1412 37.4296 24.4764C37.7601 24.8117 38.2083 25 38.6758 25C39.1432 25 39.5914 24.8117 39.9219 24.4764L50.4829 13.7645C50.6468 13.5986 50.7769 13.4016 50.8656 13.1847C50.9543 12.9678 51 12.7353 51 12.5005C51 12.2656 50.9543 12.0331 50.8656 11.8162C50.7769 11.5993 50.6468 11.4023 50.4829 11.2365L39.9219 0.524505C39.7584 0.358244 39.5642 0.226334 39.3504 0.13633C39.1365 0.046327 38.9073 0 38.6758 0C38.4442 0 38.215 0.046327 38.0011 0.13633Z\" fill=\"black\"/>\n" +
//                 "</svg>"]
//             });
//         }, 2000)
//     }
// } else {
//     $(".block-place-club-content .owl-carousel").owlCarousel({
//         loop: true,
//         nav: true,
//         dots: false,
//         items: 1,
//         navText: ["<svg width=\"32\" height=\"16\" viewBox=\"0 0 32 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
//         "<path opacity=\"1\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.3574 0.0836225C8.49044 0.138829 8.61129 0.21974 8.71301 0.321722C8.81499 0.423446 8.8959 0.54429 8.95111 0.677332C9.00632 0.810374 9.03473 0.953001 9.03473 1.09704C9.03473 1.24108 9.00632 1.38371 8.95111 1.51675C8.8959 1.6498 8.81499 1.77064 8.71301 1.87236L4.01133 6.57227H30.9049C31.1953 6.57227 31.4739 6.68764 31.6793 6.89301C31.8846 7.09838 32 7.37692 32 7.66735C32 7.95779 31.8846 8.23633 31.6793 8.44169C31.4739 8.64706 31.1953 8.76244 30.9049 8.76244H4.01093L8.71301 13.4627C8.91864 13.6684 9.03416 13.9473 9.03416 14.2381C9.03416 14.5289 8.91864 14.8078 8.71301 15.0134C8.50739 15.219 8.22849 15.3345 7.93769 15.3345C7.64689 15.3345 7.368 15.219 7.16237 15.0134L0.591858 8.44288C0.489878 8.34115 0.408966 8.22031 0.35376 8.08727C0.298553 7.95422 0.270136 7.8116 0.270136 7.66756C0.270136 7.52351 0.298553 7.38089 0.35376 7.24785C0.408966 7.1148 0.489878 6.99396 0.591858 6.89223L7.16237 0.321722C7.2641 0.21974 7.38494 0.138829 7.51798 0.0836225C7.65102 0.0284161 7.79365 0 7.93769 0C8.08173 0 8.22436 0.0284161 8.3574 0.0836225Z\" fill=\"black\"/>\n" +
//         "</svg>", "<svg width=\"32\" height=\"16\" viewBox=\"0 0 51 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
//         "<path opacity=\"1\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.0011 0.13633C37.7873 0.226334 37.5931 0.358244 37.4296 0.524505C37.2656 0.690347 37.1356 0.887359 37.0469 1.10426C36.9581 1.32116 36.9124 1.55368 36.9124 1.78852C36.9124 2.02335 36.9581 2.25587 37.0469 2.47277C37.1356 2.68967 37.2656 2.88669 37.4296 3.05253L44.9867 10.7148H1.76016C1.29333 10.7148 0.845632 10.9029 0.515539 11.2378C0.185445 11.5726 0 12.0267 0 12.5002C0 12.9737 0.185445 13.4278 0.515539 13.7626C0.845632 14.0974 1.29333 14.2855 1.76016 14.2855H44.9873L37.4296 21.9484C37.099 22.2836 36.9134 22.7383 36.9134 23.2124C36.9134 23.6865 37.099 24.1412 37.4296 24.4764C37.7601 24.8117 38.2083 25 38.6758 25C39.1432 25 39.5914 24.8117 39.9219 24.4764L50.4829 13.7645C50.6468 13.5986 50.7769 13.4016 50.8656 13.1847C50.9543 12.9678 51 12.7353 51 12.5005C51 12.2656 50.9543 12.0331 50.8656 11.8162C50.7769 11.5993 50.6468 11.4023 50.4829 11.2365L39.9219 0.524505C39.7584 0.358244 39.5642 0.226334 39.3504 0.13633C39.1365 0.046327 38.9073 0 38.6758 0C38.4442 0 38.215 0.046327 38.0011 0.13633Z\" fill=\"black\"/>\n" +
//         "</svg>"]
//     });
// }

function myFunc(object, i) {

    object.innerHTML +=
        '<canvas id="the-canvas' + i + '"></canvas>';
    var url = $(pdfList[i]).attr("href");
    console.log(url)
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function (pdf) {
        console.log('PDF loaded');

        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function (page) {
            console.log('Page loaded');

            var scale = 1.1;
            var viewport = page.getViewport({scale: scale});

            var canvas = document.getElementById("the-canvas" + i);
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
                console.log('Page rendered');
            });
        });
    }, function (reason) {
        console.error(reason);
    });
}

var widthBanner = document.querySelector("body").offsetWidth;
if (widthBanner >= 768) {
    var heightBanner = widthBanner * 576 / 1280;
} else {
    var heightBanner = widthBanner * 270 / 375;
}
$(".block-banner .slides ul").css("height", heightBanner);

$(document).ready(function () {
    var headNav = $(".header");
    $(window).on('load scroll', function () {
        if ($(this).scrollTop() > 10 && headNav.hasClass('fixed') == false) {
            headNav.addClass('fixed');
        } else if ($(this).scrollTop() < 10 && headNav.hasClass('fixed') == true) {
            headNav.removeClass('fixed');
        }
    });
});

setTimeout(function () {
    $('.menu-trigger').on('click', function () {
        $('.menu-trigger').toggleClass('active');
        $('.collapse').toggleClass('show');
    })
}, 500)

$(document).ready(function () {
    $(".case-carousel").owlCarousel({
        nav: true,
        dots: false,
        margin: 60,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            }
        },
        navText: [
            '<img src="http://localhost:8089/company-site/wp-content/uploads/2022/03/prev01.png" alt="">',
            '<img src="http://localhost:8089/company-site/wp-content/uploads/2022/03/next01.png" alt"">']
    }).on('changed.owl.carousel', syncPosition);
});
