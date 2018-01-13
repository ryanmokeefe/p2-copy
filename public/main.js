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

$(".dropdown-button").dropdown();


$(document).ready(function(){
    $('.materialboxed').materialbox();
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
