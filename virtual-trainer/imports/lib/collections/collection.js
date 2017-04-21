import { userinfo } from './userinfo-schema.js';
import { Mongo } from 'meteor/mongo';
// defining new collection
export const UserInfo = new Mongo.Collection("userinfo");

export const Yoga = new Mongo.Collection("yoga");

export const Gym = new Mongo.Collection("gym");
// attaching collection to it's schema
UserInfo.attachSchema(userinfo);


if (Meteor.isServer) {
  Meteor.publish('yoga', function () {
    if (this.userId)
    {
      return Yoga.find({});
    }
    return null;
  });

  Meteor.publish('Gym', function () {
    if (this.userId)
    {
      return Gym.find({});
    }
    return null;
  });
}
