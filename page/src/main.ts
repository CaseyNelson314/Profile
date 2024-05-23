import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gl_main } from './webgl';

$('.project_image').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
});

gl_main();

$('.initiative_button').on('click', () => {
    $('html, body').animate({
        scrollTop: $('.initiative').offset()?.top
    }, 1000);
});