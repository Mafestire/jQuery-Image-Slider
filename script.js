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
    const $nextBtn = $('#next');
    const slideWidth = $('.image').width();
    const slideHight = $('.slide').height();
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

    // function updateSlider() {
    //     const translateY = -currentIndex * slideWidth;
    //     $images.css('transform', `translateY(${translateY}px)`);
    // }

    function updateSlider() {
        const translateY = -currentIndex * slideHight;
        $images.css('transform', `translateY(${translateY}px)`);
    }
});