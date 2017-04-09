$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.carousel').carousel('next'); // Move
});

Meteor.startup(() => {
  BlazeLayout.setRoot('body');
});
