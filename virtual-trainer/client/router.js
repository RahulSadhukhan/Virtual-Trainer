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
      main: 'login'
    });
  },
  name: 'LogIn'
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

FlowRouter.route('/yoga:id', {
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('/');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: 'navbar',
      main: 'yoga'
    })
  }

});

// AccountsTemplates.configureRoute('changePwd');
// AccountsTemplates.configureRoute('forgotPwd');
// AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn', {
  redirect: function(){
        var user = Meteor.user();
        if (user) {
          FlowRouter.go('/dashboard');
        }
    },
});

AccountsTemplates.configure({
  homeRoutePath: '/dashboard',
  redirectTimeout: 4000,
  onLogoutHook: function(){
      //example redirect after logout
      Router.go('/');
  },
});
