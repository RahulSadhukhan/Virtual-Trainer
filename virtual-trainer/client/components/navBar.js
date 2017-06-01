import './navBar.html';

Template.navbar.onRendered(function() {

  $('document').ready(function(){
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown();
  })
});

Template.navbar.helpers({

})

Template.navbar.events({
  'click #login'(event){
    console.log("The event has been called : ",event);
    console.log("the state is ",  AccountsTemplates.getState())
    FlowRouter.go('/login');
  },
  'click #buttonDashboard'(event){
    console.log("The event has beeb called : ", event);
    FlowRouter.go('/dashboard');
  }
})
//
// <ul id="dropdown1" class="dropdown-content">
//   <li><a href="#!">one</a></li>
//   <li><a href="#!">two</a></li>
//   <li class="divider"></li>
//   <li><a href="#!">three</a></li>
// </ul>
// <nav>
//   <div class="nav-wrapper">
//     <a href="/dashboard" class="brand-logo"><img src="/logo.png" height="70" width="70"></a>
//     <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
//       <ul class="right hide-on-med-and-down">
//         <li><a href="/yoga/list">Yoga</a></li>
//         <li><a href="/exercise/list">Exercise</a></li>
//         {{#if currentUser}}
//         <li><a class="dropdown-button" href="#!" data-activates="dropdown1">More<i class="material-icons right">arrow_drop_down</i></a></li>
//         {{else}}
//         <li><a href="/signIn" class="waves-effect waves-light btn">Sign In</a></li>
//         {{/if}}
//       </ul>
//       <ul class="side-nav" id="mobile-demo">
//         <li>
//           <a href="#" class="dropdown-button" style="" data-activates="profile-options">
//             <div>
//               <!-- {{repName currentUser.fname currentUser.lname}}&nbsp;&nbsp; -->
//               <div class="right circle responsive-img" style="border: 3px solid white;">
//                 {{> avatar user=currentUser shape="circle"}}
//               </div>
//             </div>
//           </a>
//         </li>
//         <li><a href="/yoga/list">Yoga</a></li>
//         <li><a href="/exercise/list">Exercise</a></li>
//       </ul>
//       <ul id="profile-options" class="dropdown-content">
//         <li><a href="/profile">Edit Profile</a></li>
//         <li class="divider"></li>
//         <li><a href="/signout">Sign out</a></li>
//       </ul>
//     </div>
//   </nav>
