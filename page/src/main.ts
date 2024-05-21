import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.project_image').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
});