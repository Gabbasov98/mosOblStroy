let portfolioSlidersArray = []

function projectsSliders() {
    $(".projects__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        portfolioSlidersArray[index] = new Swiper(`.projects__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 10,
        })
    })
}



$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });

    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        if ((window.innerWidth < 1220)) {
            $(this).parents(".nav__item").toggleClass("nav__item--active")
            $(this).siblings(".nav__item-hidden").slideToggle()
        }
    })

    function onIn() {
        if (window.innerWidth > 1220) {
            let el = $(this)
            setTimeout(function() {
                if (el.is(':hover')) {
                    console.log(el)
                    el.addClass("nav__item--active")
                }
            }, 200);
        }
    }

    function onOut() {
        if (window.innerWidth > 1220) {
            $(this).removeClass("nav__item--active")
        }
    }




    $(".header__burger").click(function() {
        if ($(".header__burger").hasClass("header__burger--active")) {
            closeMenu()
            return
        }
        $(".header__burger").addClass("header__burger--active")
        $("body").append(`<div class="header-bg"></div> `)
        $("body").addClass("fixed-body")
        $(".header__mob").addClass("header__mob--active")

        $(".header-bg").click(function() {
            closeMenu()
        })
    })

    function closeMenu() {
        $(".header-bg").remove()
        $(".header__mob").removeClass("header__mob--active")
        $(".header__burger").removeClass("header__burger--active")
        $("body").removeClass("fixed-body")
    }


});