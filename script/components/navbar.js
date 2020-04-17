class Navbar {


  static get loginLink() {
    return `<a class='nav-link' href='#' id='login-link'> Log In </a>`
  }

  static get welcomeMessage() {
    return Auth.isSignedIn  && `<span>Welcome ${Auth.currentUser.username}</span>`
  }

  static get signupLink() {
    return `<a class='nav-link' href='#' id='signup-link'> Sign Up </a>`
  }

  static get logoutLink() {
    return `<a class='nav-link' href='#' id='logout-link'> Log Out </a>`
  }

  static get homeLink() {
    return `<a class='nav-link' href='#' id='home-link'> Home </a>`
  }

  static render() {
    return Auth.isSignedIn
    ? `${this.logoutLink} ${this.homeLink} ${this.welcomeMessage}`
    : `${this.loginLink}  ${this.signupLink}`
  }
}