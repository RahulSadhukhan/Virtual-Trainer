const mySubmitFunc = (error,state) => {
    if(state === signIn) {
      console.log("Hello there logged in");
    }
}

AccountsTemplate.configure({
  enablePasswordChange: true,
  showForgotPasswordLink: true,
  showResendVerificationEmailLink: true,
  continuousValidation: true,
  negativeValidation: true,
  showValidating: true,
  onSubmitHook: mySubmitFunc,
})
