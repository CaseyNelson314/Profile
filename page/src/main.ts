import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.project_image').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
});