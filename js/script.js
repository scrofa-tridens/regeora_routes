$(function () {

    $(".left-menu-button").click(function () {
        $(this).toggleClass("left-menu-button_open");
        $('.left-menu-button').parent('.left-menu').toggleClass("left-menu_expanded");
    });

    $(window).resize(function() { 
        // Минимальная высота левого меню
        if($(this).height() > 881) {
            $(".left-menu-button").removeClass('left-menu-button_open');
            $('.left-menu-button').parent('.left-menu').removeClass("left-menu_expanded");
        }
    })

    $(".back").click(function () {
        $(this).find('.left-menu__item').toggleClass("sub-menu_open");
    });

    $(".left-menu__item").click(function () {
        $(this).find('.sub-menu').toggleClass("sub-menu_open");
    });

    $(".top-menu ul li").click(function () {
        $(this).find('.top-menu__link_icon_filter').toggleClass("active");
        $(this).find('.filter-menu').toggleClass("open-block");
    });
    // $(".top-menu ul li").click(function () {
    //     $(this).find('.top-menu__link_icon_search').toggleClass("active");
    //     $(this).find('.f-search-posit').toggleClass("open-block");
    // });



    $(".top-menu ul li").click(function () {
        $(this).find('.top-menu__link_icon_search').toggleClass("active");
        $(this).find('.f-search-posit').show();
    });
    $('.f-search__pole').on('blur', function() {
        $(this).parents('.f-search-posit').hide();
    });



    $(".b-table td:nth-child(2)").shorten({
        "showChars" : 80,
        "ellipsesText" : "..."
    });

    $(".b-table td:nth-child(5)").shorten({
        "showChars" : 9,
        "ellipsesText" : "..."
    });

    $(".b-table td:nth-child(11)").shorten({
        "showChars" : 31,
        "ellipsesText" : "..."
    });


    $('.filtration__pole').on('change paste keyup', function () {
        var $this = $(this);
        var input_value = $this.val();

        if (input_value.length === 0) {
            $('.filtration__pole').removeClass('filtration__pole_init');
            $('.filtration__button').removeClass('filtration__button_init');

        } else {
            $('.filtration__pole').addClass('filtration__pole_init');
            $('.filtration__button').addClass('filtration__button_init');
        }

    });






    // $(".b-table__filetr").click(function () {
    //     $(this).find('.b-table__icon-filter').toggleClass("active");
    //     $(this).find('.filtration').show();
    // });
    // $('.filtration__pole').on('blur', function() {
    //     $(this).parents('.filtration').hide();
    // });
    //
    // $('.b-table__icon-filter').click(function () {
    //     $(this).parents().find('.filtration').hide();
    // });




    // $(".b-table__filetr").click(function () {
    //     $(this).toggleClass("active");
    //     $(this).find('.filtration').toggleClass("open-block");
    // });




    // $('.filtration .b-slider__title').on('click', function () {
    //     $('.filtration input[type="checkbox"]').prop('checked', false)
    // })


});

