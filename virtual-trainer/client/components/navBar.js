import './navBar.html';

Template.navbar.onRendered(function() {
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown();
});
