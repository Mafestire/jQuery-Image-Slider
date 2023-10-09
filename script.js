// $(document).ready(function(){
//     $('.next').on('click', function(){
//         console.log(clicked);
//     });
// });

$(document).ready(function() {
    const $images = $('.images');
    // const $prevBtn = $('#prevBtn');
    const $nextBtn = $('#next');
    const slideWidth = $('.slide').width();
    let currentIndex = 0;

    // $prevBtn.on('click', function() {
    //     currentIndex = (currentIndex - 1 + $sliderWrapper.children().length) % $sliderWrapper.children().length;
    //     updateSlider();
    // });

    $nextBtn.on('click', function() {
        currentIndex = (currentIndex + 1) % $images.children().length;
        updateSlider();
    });

    function updateSlider() {
        const translateX = -currentIndex * slideWidth;
        $images.css('transform', `translateX(${translateX}px)`);
    }
});