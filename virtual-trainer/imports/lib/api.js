import { UserInfo } from './collections/collection';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.methods({
  'save-profile'({ data }) {
    new SimpleSchema({
      data: { type: Object, blackbox: true }
    }).validate({ data });

    if(!this.userId) {
      throw new Meteor.Error('Not Authorised', 'cannot add profile user does not exist');
    }
    return Meteor.users.update({ _id: this.userId }, { $set: { fname: data.fname, lname: data.lname, age: data.age, height: data.height, weight: data.weight, phone: data.phone, bmi: data.bmi, viseralFat: data.viseralFat, subcutaneousFat: data.subcutaneousFat } });
  }

});
