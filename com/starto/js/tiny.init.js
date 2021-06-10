// tiny.init.js

// client-slider
var slider = tns({
    container: '.testi-slider',
    loop: true,
    navPosition: "bottom",
    controls: false,
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {
        768: {
            gutter: 20,
            items: 1
        }
    }
});