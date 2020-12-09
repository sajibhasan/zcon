$(document).ready(function () {
    $(".slider_carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        nav: true
    })

    $(".menu_collapse").click(function () {
        console.log('click')
        $('.site_navbar-desktop').slideToggle()
    })

    $('#systemCarousel').owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})

window.addEventListener('resize', function (e) {
    if (this.outerWidth > 767) {
        $(".site_navbar-desktop").show()
    } else {
        $(".site_navbar-desktop").hide()
    }

    console.log(this.outerWidth)
})