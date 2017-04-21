import { Gym } from '../../imports/lib/collections/collection';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './exercise.html';

let showGymTemplate = new ReactiveVar(false);

Template.gym.onCreated(function() {
  const _this = this;
  this.id = new ReactiveVar();
  showGymTemplate.set(false);
  let queryParams = FlowRouter.current().queryParams;
  Meteor.subscribe('gym');
});

Template.gym.events({
  'click .detail': function (event) {
    const _this = Template.instance();
    _this.id.set(event.currentTarget.id);
    FlowRouter.setParams({id: event.currentTarget.id});
    showGymTemplate.set(FlowRouter.getParam('id').toLowerCase() != 'list');
  }
});

Template.gym.helpers({
  showdetail: () => true,
  listData: () => Gym.find({}).fetch(),
  content: () => {
    const _this = Template.instance();
    const id = _this.id.get();
    if(id !== 'list') {
      return Gym.findOne({ '_id': id });
    }
  },
  yid: () => Template.instance().id.get(),
  showDetailCard: () => showGymTemplate.get(),

});
