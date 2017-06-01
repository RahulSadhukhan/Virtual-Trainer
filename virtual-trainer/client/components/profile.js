import { Session } from 'meteor/session';
import './profile.html';


Template.profile.helpers({
  errorName() {
    return Session.get('errorText');
  },
  deactivated() {

  }
})

Template.profile.onRendered(function(){

  $(document).ready(function(){

    $(".modal").modal();

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

  });

});

const validateName = (value) => {
  console.log("The first name is : ", value);
  if(value.length <= 0) {
      Session.set('errorText','Wrong Name');
      Session.set('validate','disabled');
      $('#save').prop('disabled', true);
  }
  else {
    Session.set('errorText','');
    Session.set('validate','disabled');
  }
}

Template.profile.events({
  'click #save': (event) => {
    event.preventDefault();
  },
  'keyup .fName': (event) => {
    validateName(event.currentTarget.value);
  },
  'click #imgTrigger': (event) => {
    swal({ title: "Upload Profile picture!",
            text: "Choose a Profile picture",
            type: "input",
            inputType: "file",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "File" },
            function(inputValue){
            if (inputValue === false)
              return false;
            if (inputValue === "") {
              swal.showInputError("You need to choose a file");
              return false
            }
               swal("Nice!", "You choose: " + inputValue, "success");
          });
  }
});
