$(document).ready(function() {



    $(".filter-item__show").click(function() {
        $(this).parents(".filter-item").toggleClass("filter-item--active")
    })


    $(".filter-item__variant input").change(function() {
        let parent = $(this).parents(".filter-item")
        let allSelected = isAllSelected($(parent))

        if (allSelected) {
            $(parent).find(".filter-item__variant-all input").prop("checked", true)
        } else {
            $(parent).find(".filter-item__variant-all input").prop("checked", false)
        }

        if ($(parent).hasClass("filter-item--month")) {
            selectMonths(parent)
        } else {
            calcSelectedFilters(parent)
        }
    })

    function isAllSelected(parent) {
        let variants = []

        $(parent).find(".filter-item__variant input").each(function(index, el) {
            let props = $(el).prop("checked")
            variants.push(props)
        });

        if (variants.indexOf(false) === -1) {
            return true
        } else {
            return false
        }

    }

    $(".filter-item__variant-all input").change(function() {
        let parent = $(this).parents(".filter-item")
        let isChecked = $(this).prop("checked")

        $(parent).find(".filter-item__variant input").each(function(index, el) {

            if (isChecked) {
                $(el).prop("checked", true)
            } else {
                $(el).prop("checked", false)
            }
        });

        calcSelectedFilters(parent)
    })

    function calcSelectedFilters(parent) {
        let variants = []

        $(parent).find(".filter-item__variant input").each(function(index, el) {
            let props = $(el).prop("checked")
            if (props) {
                variants.push(props)
            }
        });

        let selectedFiltersCount = variants.length

        if (selectedFiltersCount > 0) {
            $(parent).find(".filter-item__num").html(`(${selectedFiltersCount})`)
        } else {
            $(parent).find(".filter-item__num").html(``)
        }

    }

    function selectMonths(parent) {
        let months = []
        $(parent).find(".filter-item__variant input").each(function(index, el) {
            let props = $(el).prop("checked")
            if (props) {
                months.push($(el).siblings("label").html())
            }
        });

        console.log()
        $(parent).find(".filter-item__title span").html(months.join(", "))
    }

    $(document).mouseup(function(e) {
        var div = $('.filter-item--active');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass("filter-item--active")
        }
    });

    $(".filter-item__regions-arrow").click(function() {
        $(this).parents(".filter-item__regions").toggleClass("filter-item__regions--active")
        $(this).parents(".filter-item__regions").find(".filter-item__regions-hidden").slideToggle()
    })

    $(".filter-item__regions-check input").change(function() {
        let parent = $(this).parents(".filter-item")
        let isChecked = $(this).prop("checked")

        $(this).parents(".filter-item__regions").find(".filter-item__variant input").each(function(index, el) {
            console.log($(el))

            if (isChecked) {
                $(el).prop("checked", true)
            } else {
                $(el).prop("checked", false)
            }
        });

        calcSelectedFilters(parent)
    })

    $(".filter-item__regions .filter-item__variant input").change(function() {
        let parent = $(this).parents(".filter-item__regions")
        let allSelected = isAllSelected($(parent))

        if (allSelected) {
            $(parent).find(".filter-item__regions-check input").prop("checked", true)
        } else {
            $(parent).find(".filter-item__regions-check input").prop("checked", false)
        }

    })

    $(".filter-item__search input").click(function(e) {
        e.stopPropagation()
    })

    $(".config-filter__mob-btn").click(function() {
        $(".config-filter__wrap").addClass("config-filter__wrap--active")
        if (window.innerWidth < 767) {
            $("body").addClass("fixed-body")
        }
    })

    $(".config-filter__close").click(function() {
        $(".config-filter__wrap").removeClass("config-filter__wrap--active")
        $("body").removeClass("fixed-body")
    })
    $(document).mouseup(function(e) {
        var div = $('.config-filter__wrap--active');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(div).removeClass("config-filter__wrap--active")
        }
    });
})