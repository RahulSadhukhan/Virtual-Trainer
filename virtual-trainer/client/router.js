import { FlowRouter } from 'meteor/kadira:flow-router';

// route defenitions

FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {
    redirect('/dashboard');
  }]
});

FlowRouter.route('/dashboard', {
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: 'navbar',
      main: 'dashboard'
    })
  },
  name: 'dashboard'
});

FlowRouter.route('/signIn', {
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      main: 'login'
    })
  },
  name: 'signIn'
});

FlowRouter.route('/profile', {
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('/signIn');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: 'navbar',
      main: 'profile'
    })
  }
});

FlowRouter.route('/exercise/:id', {
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('/signIn');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: 'navbar',
      main: 'gym'
    })
  }
});

FlowRouter.route('/yoga/:id', {
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('/signIn');
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
          FlowRouter.go('/profile');
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
