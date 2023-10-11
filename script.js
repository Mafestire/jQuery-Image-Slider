// $(document).ready(function(){
//         const $nextBtn = $('#next');

//     $nextBtn.on('click', function(){
//         const display = $('.active');
//         const nextDisplay = display.next();

        // if (nextDisplay.length) {
        //     display.removeClass('active').css('z-index', -10);
        //     nextDisplay.addClass('active'.css('z-index', 10))
        // }
//     });
// });


$(document).ready(function() {

    const $images = $('.slide');
    const $image = $('.slide-mobile');
    const $nextBtn = $('#next');
    const $nextBtns = $('#next-mobile');
    const slideWidth = $('.image').width();
    const slideHight = $('.slide').height();
    const slideHights = $('.slide-mobile').height();
    let currentIndex = 0;

    // $nextBtn.on('click', function() {
    //     currentIndex = (currentIndex + 1) % $images.children().length;
    //     updateSlider();
    // });

    $nextBtn.on('click', function() {
        console.log('Next button clicked'); // Add this line for debugging
        currentIndex = (currentIndex + 1) % $images.children().length;
        updateSlider();
    });

    $nextBtns.on('click', function() {
        console.log('Next button clicked'); // Add this line for debugging
        currentIndex = (currentIndex + 1) % $image.children().length;
        updateSliders();
    });

    // function updateSlider() {
    //     const translateY = -currentIndex * slideWidth;
    //     $images.css('transform', `translateY(${translateY}px)`);
    // }

    function updateSlider() {
        const translateY = -currentIndex * slideHight;
        $images.css('transform', `translateY(${translateY}px)`);
    }

    function updateSliders() {
        const translateYs = -currentIndex * slideHights;
        $image.css('transform', `translateY(${translateYs}px)`);
    }
});