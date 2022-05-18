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
    $(".custom-scroll").mCustomScrollbar()

    if (window.innerWidth < 767) {
        $(".config-filter__scroll").mCustomScrollbar()
        $(".news-nav__scroll").mCustomScrollbar()
    }

    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        if ((window.innerWidth < 1279)) {
            $(this).parents(".nav__item").toggleClass("nav__item--active")
            $(this).siblings(".nav__item-hidden").slideToggle()
        }
    })

    function onIn() {
        if (window.innerWidth > 1279) {
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
        if (window.innerWidth > 1279) {
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

    $(".copy-btn").click(function() {
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(this).attr("data-copy")).select();
        document.execCommand("copy");
        $tmp.remove();


        let info = `
        <span class="copy-btn__copied catalog-nav__copy-info">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0004 21.6004C14.5465 21.6004 16.9883 20.589 18.7886 18.7886C20.589 16.9883 21.6004 14.5465 21.6004 12.0004C21.6004 9.45431 20.589 7.01251 18.7886 5.21217C16.9883 3.41182 14.5465 2.40039 12.0004 2.40039C9.45431 2.40039 7.01251 3.41182 5.21217 5.21217C3.41182 7.01251 2.40039 9.45431 2.40039 12.0004C2.40039 14.5465 3.41182 16.9883 5.21217 18.7886C7.01251 20.589 9.45431 21.6004 12.0004 21.6004ZM16.4488 10.4488C16.6674 10.2225 16.7883 9.91935 16.7856 9.60471C16.7829 9.29007 16.6567 8.9891 16.4342 8.76661C16.2117 8.54412 15.9107 8.41792 15.5961 8.41518C15.2814 8.41245 14.9783 8.5334 14.752 8.75199L10.8004 12.7036L9.24879 11.152C9.02247 10.9334 8.71934 10.8124 8.40471 10.8152C8.09007 10.8179 7.7891 10.9441 7.56661 11.1666C7.34412 11.3891 7.21792 11.6901 7.21518 12.0047C7.21245 12.3193 7.3334 12.6225 7.55199 12.8488L9.95199 15.2488C10.177 15.4738 10.4822 15.6001 10.8004 15.6001C11.1186 15.6001 11.4238 15.4738 11.6488 15.2488L16.4488 10.4488Z" fill="#6FCF97"/>
            </svg>
            Ссылка скопирована в буфер обмена
        </span>
        `

        $(this).append(info)

        setTimeout(() => {
            $(".copy-btn__copied").remove()
        }, 3000);


    })







});