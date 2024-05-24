import $ from 'jquery'
import { gl_main } from './webgl';
import 'slick-carousel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(window).on('load', () => {

    $('.project_image').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
    });
    
    
    $('.initiative_button').on('click', () => {
        $('html, body').animate({
            scrollTop: $('.initiative').offset()?.top
        }, 300);
    });
    
    gl_main();

});