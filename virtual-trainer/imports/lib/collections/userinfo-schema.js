// Defining the Schema

import SimpleSchema from 'simpl-schema';

export const userinfo = new SimpleSchema({
	fname: {
		type: String,
		label: "First Name",
	},
  lname: {
    type: String,
    label: "Last Name"
  },
	age: {
		type: Number,
		label: "Age"
	},
  height: {
    type: Number,
    label: "Height"
  },
  weight: {
    type: Number,
    label: "Weight"
  }
});
