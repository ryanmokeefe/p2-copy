// document.getElementsByClassName(".button-collapse")[0].sideNav();


$(".button-collapse").sideNav();


// $('.carousel').carousel();

// $('.carousel').carousel({
//     padding: 200    
// });
$('.carousel.carousel-slider').carousel({fullWidth: true});


autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
// $('#grid .row:nth-child(odd)').addClass('alternate');

$(".dropdown-button").dropdown();
