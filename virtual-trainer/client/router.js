import { FlowRouter } from 'meteor/kadira:flow-router';

// route defenitions

FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {
    if (Meteor.userId())
    {
      redirect('/dashboard');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      main: 'home'
    });
  },
  name: 'home'
});

FlowRouter.route('/dashboard', {
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('/');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: 'navbar',
      main: 'dashboard'
    })
  },
  name: 'dashboard'
});
