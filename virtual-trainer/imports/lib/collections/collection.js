import { userinfo } from './userinfo-schema.js';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
// defining new collection
export const UserInfo = new Mongo.Collection("userinfo");

export const Yoga = new Mongo.Collection("yoga");

export const Gym = new Mongo.Collection("gym");
// attaching collection to it's schema


if (this.userId)
{
  Meteor.users.attachSchema(userinfo);
}


if (Meteor.isServer) {
  Meteor.publish('yoga', function () {
    if (this.userId)
    {
      return Yoga.find({});
    }
    return null;
  });

  Meteor.publish('gym', function () {
    if (this.userId)
    {
      return Gym.find({});
    }
    return null;
  });
}
