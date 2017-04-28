import './profile.html';

Template.profile.events({
  'click #save' (event,template) {
    event.preventDefault();
    let data = {};
    $('#inseriUserForm').serializeArray().map( function (formData) {
      data[formData.name] = formData.value;
    });
    Meteor.call('save-profile', { data }, (err, res) => {
      if (err)
        Materialize.toast(err.reason.replace('.', "") || 'Unknown error', 4000, 'deep-orange accent-4 toasties');
      else {
        Materialize.toast('Your Profile Saved', 4000, 'teal toasties');
        FlowRouter.go('/dashboard');
      }
    });
  },
});
