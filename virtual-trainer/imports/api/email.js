// import { Accounts } from 'meteor/accounts-base';
//
// Accounts.onEmailVerificationLink((token,done) => {
//   Accounts.verifyEmail(token,(error) => {
//     console.log("mail dlkfjlkadf lksjdlfkozdhj");
//     if(error) {
//       console.log(error);
//     }
//     else {
//       done();
//     }
//   })
// });
//
// Accounts.emailTemplates.siteName = "Virtual Trainer";
// Accounts.emailTemplates.from = "from this kjd ";
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
