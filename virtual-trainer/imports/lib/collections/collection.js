import { userinfo } from './userinfo-schema.js';
import { Mongo } from 'meteor/mongo';
// defining a new collection for userinfo
export const UserInfo = new Mongo.Collection("userinfo");
// attaching collection to it's schema
UserInfo.attachSchema(userinfo);
