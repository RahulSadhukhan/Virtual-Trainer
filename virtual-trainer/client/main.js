Meteor.startup(() => {
  BlazeLayout.setRoot('body');
  Avatar.setOptions({
    fallbackType: "default image"
  });
});
