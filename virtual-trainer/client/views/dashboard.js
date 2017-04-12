import './dashboard.html';

Template.dashboard.onRendered(function() {
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.carousel').carousel('next');
});
