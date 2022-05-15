$(document).ready(function() {

    $(".promo-card__more").click(function() {
        $(this).toggleClass("promo-card__more--active")
        $(this).siblings(".promo-card__info").slideToggle()
    })

    $(".news-nav__toggler").click(function() {
        $(this).toggleClass("news-nav__toggler--active")
        $(".news-nav").toggleClass("news-nav--active")
        if (window.innerWidth > 768) {
            $(".news-nav__hidden").slideToggle()
        }
    })

    $(".requirements__subtitle").click(function() {
        $(this).toggleClass("requirements__subtitle--active")
        $(this).siblings(".requirements__list").slideToggle()
    })

    $(".cases-nav").click(function() {
        $(this).toggleClass("cases-nav--active")
    })

    $(".article-nav__toggler").click(function() {
        $(this).toggleClass("article-nav__toggler--active")
        $(this).siblings(".article-nav__list").slideToggle()
    })

})