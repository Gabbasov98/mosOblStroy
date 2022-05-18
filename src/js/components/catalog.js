$(document).ready(function() {

    $(".month").click(function() {
        $(this).toggleClass("month--added")
    })

    $(".favourite-btn").click(function() {
        $(this).toggleClass("favourite-btn--active")

        if ($(this).hasClass("favourite-btn--active")) {
            $(".favourite-modal").addClass("favourite-modal--active")
            setTimeout(() => {
                closeFavouriteModal()
            }, 5000);
        }
    })

    $(".favourite-modal__close").click(function() {
        closeFavouriteModal()
    })

    function closeFavouriteModal() {
        $(".favourite-modal").removeClass("favourite-modal--active")
    }


    $(".resize-img").click(function() {
        if ($(this).hasClass("resize-img--active")) {
            $(this).removeClass("resize-img--active")
        } else {
            $(".resize-img").removeClass("resize-img--active")
            $(this).addClass("resize-img--active")
        }
    })

    $(document).mouseup(function(e) {
        var div = $('.resize-img--active');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(div).removeClass("resize-img--active")
        }
    });


    $(".catalog-item__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".catalog-item__tab").removeClass("catalog-item__tab--active")
        $(this).addClass("catalog-item__tab--active")
        $(".catalog-item__img").removeClass("catalog-item__img--active")
        $(`.catalog-item__img[data-tab-path="${path}"]`).addClass("catalog-item__img--active")

    })
})