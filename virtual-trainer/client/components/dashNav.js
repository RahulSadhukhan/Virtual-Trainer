Template.dashNav.onRendered( function() {
   $('document').ready(function(){
     $('.button-collapse').slideNav({
     });
   })
});

Template.dashNav.events({
  'click #buttonProfile': (event) => {
    console.log("Button Has been Clicked");
    FlowRouter.go('/profile');
  },
  'click #gymPlaylist': (event) => {
    FlowRouter.go('/gym-playlist');
  },
  'click #blogWrite': (event) => {
    FlowRouter.go('/blog-write')
  },
})
