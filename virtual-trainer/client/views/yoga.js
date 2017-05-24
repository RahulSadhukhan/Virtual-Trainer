// import { Yoga } from '../../imports/lib/collections/collection';
// import { ReactiveVar } from 'meteor/reactive-var';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import './yoga.html';
//
// let showYogaTemplate = new ReactiveVar(false);
//
// Template.yoga.onCreated(function() {
//   const _this = this;
//   this.id = new ReactiveVar();
//   showYogaTemplate.set(false);
//   let queryParams = FlowRouter.current().queryParams;
//   Meteor.subscribe('yoga');
// });
//
// Template.yoga.events({
//   'click .detail': function (event) {
//     const _this = Template.instance();
//     _this.id.set(event.currentTarget.id);
//     FlowRouter.setParams({id: event.currentTarget.id});
//     showYogaTemplate.set(FlowRouter.getParam('id').toLowerCase() != 'list');
//   }
// });
//
// Template.yoga.helpers({
//   showdetail: () => true,
//   listData: () => Yoga.find({}).fetch(),
//   content: () => {
//     const _this = Template.instance();
//     const id = _this.id.get();
//     if(id !== 'list') {
//       return Yoga.findOne({ '_id': id });
//     }
//   },
//   yid: () => Template.instance().id.get(),
//   showDetailCard: () => showYogaTemplate.get(),
//   isSelected: (currentId, selectedId) => {
//     if(currentId === selectedId)
//       return 'selected';
//   },
//   showListCard: (showDetailCard) => {
//     return !($(window).width() <= 700 && showDetailCard);
//   },
//
// });
