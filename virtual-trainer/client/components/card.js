import './card.html';

Template.cardTitle.events({
  'click .js-navigate-back': function (event) {
    event.preventDefault();
    history.go(-1);
  },
});
