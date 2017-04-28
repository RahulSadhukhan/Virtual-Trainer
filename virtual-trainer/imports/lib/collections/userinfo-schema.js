// Defining the Schema

import SimpleSchema from 'simpl-schema';

export const userinfo = new SimpleSchema({
	fname: {
		type: String,
		label: "First Name",
		optional: true
	},
  lname: {
    type: String,
    label: "Last Name",
		optional: true
  },
	age: {
		type: Number,
		label: "Age",
		optional: true
	},
  height: {
    type: Number,
    label: "Height",
		optional: true
  },
  weight: {
    type: Number,
    label: "Weight",
		optional: true
  },
	phone: {
		type: Number,
		label: "Phone No.",
		optional: true
	},
	bmi: {
		type: Number,
		label: "BMI",
		optional: true
	},
	subcutaneousFat: {
		type: Number,
		label: "subcutaneousFat",
		optional: true
	},
	viseralFat: {
		type: Number,
		label: "viseralFat",
		optional: true
	}
});
