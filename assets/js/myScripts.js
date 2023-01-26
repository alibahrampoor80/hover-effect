window.addEventListener("load", (event) => {
    console.log("page is fully loaded");


    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {

            document.querySelector("header#header").classList.add('is-sticky')
            document.querySelector(".box_one_header").classList.add('bg-color-header-sticky')
        } else {

            document.querySelector("header#header").classList.remove('is-sticky')
            document.querySelector(".box_one_header").classList.remove('bg-color-header-sticky')
        }
    });

    let menuToggle = document.querySelector('.toggle')
    menuToggle.onclick = function () {
        menuToggle.classList.toggle('active')
    }


    const toggleMenu = () => {
        var x = document.querySelector("header#header > .box_one_header > ul");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

});


// $(document).ready(function () {

//loading pages
// $(window).on('load', function () {
//     $('#loading').delay('500').fadeOut(2000);
// });


// $(document).scroll(function () {
//     $(this).scrollTop();
//     if ($(this).scrollTop() >= 500) {
//         $('.btn-go-to-top').fadeIn('fast')
//     } else {
//         $('.btn-go-to-top').fadeOut('fast')
//     }
// });

//sticky header fixed top
// $(window).on('scroll', function () {
//     if ($(this).scrollTop() > 30) {
//         $('header#header').addClass("is-sticky");
//         $('.box_one_header').addClass("bg-color-header-sticky");
//
//
//     } else {
//         $('header#header').removeClass("is-sticky");
//         $('.box_one_header').removeClass("bg-color-header-sticky");
//     }
// });

// $('.btn-toggle-menu').click(function () {
//     $('.box-header-width ul').addClass('show-menu').removeClass('hide-menu')
// })
// $('.close-menu-top').click(function () {
//     $('.box-header-width ul').addClass('hide-menu').removeClass('show-menu')
// })
// $('.btn-top-toggle-menu').click(function () {
//     $('header#header .box_one_header >ul').slideToggle(300)
// })
// $('.close-menu-top-header').click(function () {
//     $('header#header .box_one_header> ul').slideUp(300)
// })
//
// $('header#header > .box_one_header >ul>li:has(nav)')
//     .children('a')
//     .append('<i class="fa fa-angle-down"></i>');
//
//
// $('header#header > .box_one_header ul>li:has(nav.megaMenu) i.fa').click(function (e) {
//     e.preventDefault();
//     $('header#header > .box_one_header ul>li:has(ul)').children('nav.megaMenu').slideToggle(300)
// });
//
//
// $(document).on('click', '.header#header > .box_one_header ul > li >a >i.fa-angle-down', function () {
//     $(this).closest('.megaMenu')
//         .siblings().removeClass('active').find('.header#header > .box_one_header > ul > li > ul > li > ul').slideUp(500);
//     $(this).closest('.megaMenu').toggleClass('active').find('.side-sub-menu').slideToggle(500);
//     return false;
// });
//
//
// $(document).on('click', '.bg-color-header > ul > li > a > i.fa-angle-down', function () {
//     $(this).closest('.list-item-header')
//         .siblings().removeClass('active').find('.list-item-header-sub').slideUp(500);
//     $(this).closest('.list-item-header').toggleClass('active').find('.list-item-header-sub').slideToggle(500);
//     return false;
// });
//
// $('header#header > .box_one_header > ul > li').append('<i class="fa fa-angle-down"></i>')

// $('.box-header-width ul li ul li:has(ul)')
//     .children('a')
//     .append('<i class="fa fa-angle-left"></i>');


// $('.slider-special-sale').owlCarousel({
//     rtl: true,
//     items: 3,
//     nav: true,
//     dots: false,
//     navText: ["<i class='fa fa-angle-right'></i>", " <i class='fa fa-angle-left'></i>"],
//     responsive: {
//         // breakpoint from 0 up
//         0: {
//             rtl: true, items: 1, nav: true,
//
//         }, // breakpoint from 480 up
//         480: {
//             rtl: true, items: 1, nav: true,
//         }, // breakpoint from 768 up
//         768: {
//             rtl: true, items: 3, nav: true
//         }
//     }
// });
// $('.carousel-blogs-index').owlCarousel({
//     rtl: true,
//     items: 3,
//     nav: false,
//     dots: false,
//     navText: ["<i class='fa fa-angle-right'></i>", " <i class='fa fa-angle-left'></i>"],
//     responsive: {
//         // breakpoint from 0 up
//         0: {
//             rtl: true, items: 1, nav: false,
//
//         }, // breakpoint from 480 up
//         480: {
//             rtl: true, items: 1, nav: false,
//         }, // breakpoint from 768 up
//         768: {
//             rtl: true, items: 3, nav: false
//         }
//     }
// });
// $('.carousel-our-experts').owlCarousel({
//     rtl: true,
//     items: 3,
//     nav: false,
//     dots: true,
//     navText: ["<i class='fa fa-angle-right'></i>", " <i class='fa fa-angle-left'></i>"],
//     responsive: {
//         // breakpoint from 0 up
//         0: {
//             rtl: true, items: 1, nav: false,
//
//         }, // breakpoint from 480 up
//         480: {
//             rtl: true, items: 1, nav: false,
//         }, // breakpoint from 768 up
//         768: {
//             rtl: true, items: 3, nav: false, dots: true
//         }
//     }
// });


// const myChart = new Chart('ctx', {
//     type: 'line', data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
//             borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
//             borderWidth: 1
//         }]
//     }, options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// })
