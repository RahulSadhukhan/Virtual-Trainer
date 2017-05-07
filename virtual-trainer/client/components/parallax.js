import './parallax.html';

Template.parallax.onRendered(() => {
  $(document).ready(function(){
      $('.parallax').parallax();
    });
});
