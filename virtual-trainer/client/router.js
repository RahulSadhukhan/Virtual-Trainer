import { FlowRouter } from 'meteor/kadira:flow-router';
import './styles/material.min.css';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {
    redirect('/home');
  }]
});

FlowRouter.route('/home', {
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: 'navbar',
      main: 'carousel',
      about: 'about',
      testimonial: 'testimonial',
      parallax: 'parallax',
      team : 'team',
      footer: 'footer'
    })
  },
  name: 'home'
});

FlowRouter.route('/dashboard', {
  action: function(params, queryParams) {
    BlazeLayout.render('dashboardLayout', {
      nav: 'navbar',
      main: 'dashNav',
      content: 'dashPanel',
    })
  },
  name: 'dashboard',
})

FlowRouter.route('/gym-playlist', {
  action: function(params, queryParams) {
    BlazeLayout.render('dashboardLayout', {
      nav: 'navbar',
      main: 'dashNav',
      content: 'cardVideo',
      rightNav: 'playlist',
    })
  },
  name: 'dashboard',
})

FlowRouter.route('/blog-write', {
  action: function(params, queryParams) {
    BlazeLayout.render('dashboardLayout', {
      nav: 'navbar',
      main: 'dashNav',
      content: 'cardVideo',
      rightNav: 'playlist',
    })
  },
  name: 'dashboard',
})


FlowRouter.route('/profile', {
  action: function(params,queryParams) {
    BlazeLayout.render('dashboardLayout', {
      nav: 'navbar',
      main: 'dashNav',
      content: 'profile',
    })
  },
  name: 'userProfile',
})

FlowRouter.route('/blog',{
  action: function(params,queryParams) {
    BlazeLayout.render('dashboardLayout', {
      nav: 'navbar',
      main: 'dashNav',
      content: 'blog',
    })
  },
  name: 'blog',
})

Accounts.config({
  sendVerificationEmail: true,
})


AccountsTemplates.configure({
 defaultLayout: 'masterLayout',
 defaultLayoutRegions: {},
 defaultContentRegion: 'main',
 showForgotPasswordLink: true,
 overrideLoginErrors: true,
 enablePasswordChange: true,
 forbidClientAccountCreation: false,
 showResendVerificationEmailLink: true,
 negativeValidation: true,
 positiveValidation: true,
 negativeFeedback: true,
 positiveFeedback: true,
 // sendVerificationEmail: true,
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('verifyEmail');






// Accounts.emailTemplates.siteName = "Virtual Trainer";
// Accounts.emailTemplates.from = 'XYZ@noreply.com';
// Accounts.emailTemplates.resetPassword = {
//     subject(user) {
//       return "Reset your password on Meteor Todos";
//     },
//     text(user, url) {
//       return `Hello!
//   Click the link below to reset your password on Meteor Todos.
//   ${url}
//   If you didn't request this email, please ignore it.
//   Thanks,
//   The Meteor Todos team
//   `
//   },
//   html(user, url) {
//     // This is where HTML email content would go.
//     // See the section about html emails below.
//   }
// };
//
// Accounts.emailTemplates.verifyEmail = {
//    subject() {
//       return "Activate your account now!";
//    },
//    text(user, url) {
//       return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
//    }
// };



// Accounts.sendVerificationEmail(Meteor.userId(),Meteor.user().emails[0].address);
//
// Accounts.onEmailVerificationLink((token,done) => {
//   Accounts.verifyEmail(token,(error) => {
//     if(error) {
//       console.log(error);
//     }
//     else {
//       done();
//     }
//   })
// })
//
// Accounts.emailTemplates.siteName = "Virtual Trainer";
// Accounts.emailTemplates.from = "Meteor Todos Accounts <accounts@example.com>";
// Accounts.emailTemplates.resetPassword = {
//     subject(user) {
//       return "Reset your password on Meteor Todos";
//     },
//     text(user, url) {
//       return `Hello!
//   Click the link below to reset your password on Meteor Todos.
//   ${url}
//   If you didn't request this email, please ignore it.
//   Thanks,
//   The Meteor Todos team
//   `
//   },
//   html(user, url) {
//     // This is where HTML email content would go.
//     // See the section about html emails below.
//   }
// };
// Accounts.emailTemplates.verifyEmail = {
//    subject() {
//       return "Activate your account now!";
//    },
//    text(user, url) {
//       return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
//    }
// };
// FlowRouter.route('/signIn', {
//   action: function(params, queryParams) {
//     BlazeLayout.render('masterLayout', {
//       main: 'login'
//     })
//   },
//   name: 'signIn'
// });
//
// FlowRouter.route('/profile', {
//   triggersEnter: [function(context, redirect) {
//     if(!Meteor.userId()) {
//       redirect('/signIn');
//     }
//   }],
//   action: function(params, queryParams) {
//     BlazeLayout.render('masterLayout', {
//       nav: 'navbar',
//       main: 'profile'
//     })
//   }
// });
//
// FlowRouter.route('/exercise/:id', {
//   triggersEnter: [function(context, redirect) {
//     if(!Meteor.userId()) {
//       redirect('/signIn');
//     }
//   }],
//   action: function(params, queryParams) {
//     BlazeLayout.render('masterLayout', {
//       nav: 'navbar',
//       main: 'gym'
//     })
//   }
// });
//
// FlowRouter.route('/yoga/:id', {
//   triggersEnter: [function(context, redirect) {
//     if(!Meteor.userId()) {
//       redirect('/signIn');
//     }
//   }],
//   action: function(params, queryParams) {
//     BlazeLayout.render('masterLayout', {
//       nav: 'navbar',
//       main: 'yoga'
//     })
//   }
//
// });
//
// FlowRouter.route('/signOut', {
//   triggersEnter: [function(context, redirect) {
//     AccountsTemplates.logout();
//     redirect('/signIn');
//   }]
// })
//
//
// // AccountsTemplates.configureRoute('changePwd');
// // AccountsTemplates.configureRoute('forgotPwd');
// // AccountsTemplates.configureRoute('resetPwd');
// AccountsTemplates.configureRoute('signIn', {
//   redirect: function(){
//         var user = Meteor.user();
//         if (user) {
//           FlowRouter.go('/profile');
//         }
//     },
// });
//
// AccountsTemplates.configure({
//   homeRoutePath: '/dashboard',
//   redirectTimeout: 4000,
//   onLogoutHook: function(){
//       //example redirect after logout
//       Router.go('/');
//   },
// });
