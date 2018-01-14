// document.getElementsByClassName(".button-collapse")[0].sideNav();


$(".button-collapse").sideNav();


autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
// $('#grid .row:nth-child(odd)').addClass('alternate');

$('.dropdown-button').dropdown();


$(document).ready(function(){
    $('.materialboxed').materialbox();
  });



// switch fullscreen and mobile views

if ($(window).width() < 600) {
    $('.fullscreen').addClass('hidden')
    $('.showMobile').removeClass('hidden')
} else if ($(window).width() > 599) {
    $('.fullscreen').removeClass('hidden')
    $('.showMobile').addClass('hidden')

}

$(window).resize(function() {
/*If browser resized, check width again */
    if ($(window).width() < 600) {
        $('.fullscreen').addClass('hidden')
        $('.showMobile').removeClass('hidden')    }
    else if ($(window).width() > 599) {
        $('.fullscreen').removeClass('hidden')
        $('.showMobile').addClass('hidden')    }
});

/////////

// $('.voteButton').hover(() => {
//     $(this).toggleClass('z-depth-5')
// } )

// $('#voteUp').on('click', () => {
//     var resource = $('resource.votes')
// })
var resource = $('resource.votes')
console.log(resource)
