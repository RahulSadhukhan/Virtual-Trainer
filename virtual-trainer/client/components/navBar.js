import './navBar.html';

Template.navbar.onRendered(function() {
  $(".dropdown-button").dropdown();
  $('.button-collapse').sideNav();
});
