import { UserInfo } from './collections/collection';

Meteor.methods({
  'save-profile'({ data }) {
    new SimpleSchema({
      data: { type: Object, blackbox: true }
    }).validate({ data });

    if(!this.userId) {
      return throw new Meteor.Error('Not Authorised', 'cannot add profile user does not exist');
    }
    return UserInfo.insert({ fname: data.fname, lname: data.lname, age: data.age, height: data.height, weight: data.weight });
  }

});
