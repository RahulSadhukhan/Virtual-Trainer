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

FlowRouter.route('/sign-in', {
  triggersEnter: [function(context, redirect) {
    if(Meteor.userId()) {
      redirect('/dashboard');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      main: 'login'
    })
  },
  name: 'sign-in'
});

FlowRouter.route('/profile', {
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('/sign-in');
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
      redirect('/sign-in');
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
      redirect('/sign-in');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: 'navbar',
      main: 'yoga'
    })
  }

});

FlowRouter.route('/signOut', {
  triggersEnter: [function(context, redirect) {
    Meteor.logout();
    redirect('/sign-in');
  }]
});

FlowRouter.route('/signUp', {
  triggersEnter: [function(context, redirect) {
    Meteor.logout();
    redirect('/profile');
  }]
})



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
