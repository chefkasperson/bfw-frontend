class Navbar {


  static get loginLink() {
    return `<a class='nav-link' href='#' id='login-link'>Log In</a>`
  }

  static get welcomeMessage() {
    return Auth.isSignedIn  && `<span>Welcome ${Auth.currentUser.username}</span>`
  }

  static get signupLink() {
    return `<a class='nav-link' href='#' id='signup-link'>Sign Up</a>`
  }

  static get logoutLink() {
    return `<a class='nav-link' href='#' id='logout-link'>Log Out</a>`
  }

  static render() {
    return Auth.isSignedIn
    ? `${this.logoutLink} ${this.welcomeMessage}`
    : `${this.loginLink} or ${this.signupLink}`
  }
}