import '../imports/startup';
import '../imports/api/email.js';

Meteor.startup(function() {
  Accounts.config({
    sendVerificationEmail: true,
  })

  // process.env.MAIL_URL="smtp://postmaster@sandboxb8062fbace8643f1ac8e8c01921ee929.mailgun.org:b8bef1057c19fe7a864dd5dd70658ffd@smtp.mailgun.org:587";
});
