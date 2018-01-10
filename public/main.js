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

/////////

// $('#voteUp').on('click', () => {
//     var resource = $('resource.votes')
// })
var resource = $('resource.votes')
console.log(resource)
