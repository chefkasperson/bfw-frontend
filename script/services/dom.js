class DOM {
  static resetNav() {
    const navDiv = document.querySelector('#nav')
    navDiv.innerHTML = Navbar.render()
  }

  static loadLoginForm() {
    const main = document.querySelector('#main-container')
    main.innerHTML = Auth.renderLoginForm()
  }

  static loadSignupForm() {
    const main = document.querySelector('#main-container')
    main.innerHTML = User.renderSignupForm()
  }

  static loadMainContainer() {
    this.resetNav()
    if (Auth.isSignedIn) {
      this.loadUserDashboard()
    } else {
      this.loadLoginForm()
    }
  }

  static loadUserDashboard() {
    const main = document.querySelector('#main-container')
    main.innerHTML = `<h1> Display some rilly coo stuff </h1>`
  }
}