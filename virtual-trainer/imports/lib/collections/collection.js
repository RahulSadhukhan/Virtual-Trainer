import { userinfo } from './userinfo-schema.js';


// defining a new collection for userinfo
const export UserInfo = new Mongo.Collection("userinfo");

// attaching collection to it's schema
UserInfo.attachSchema(userinfo);
