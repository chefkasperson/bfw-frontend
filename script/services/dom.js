class DOM {
  static resetNav() {
    const navDiv = document.querySelector('#nav')
    navDiv.innerHTML = Navbar.render()
  }

  static loadLoginForm() {
    const formDiv = document.querySelector('#form-div')
    formDiv.innerHTML = Auth.renderLoginForm()
  }

  static loadSignupForm() {
    const formDiv = document.querySelector('#form-div')
    formDiv.innerHTML = User.renderSignupForm()
  }
  
  static loadWelcome() {
    const content = document.querySelector('#content')
    content.innerHTML = `<h1>Welcome to Baby's First Words</h1>`
  }
  
  static loadMainContainer() {
    this.resetNav()
    this.resetDOM()
    if (Auth.isSignedIn) {
      DOM.loadUserDashboard()
    } else {
      DOM.loadWelcome()
    }
  }
  
  static loadUserDashboard() {
    DOM.resetDOM()
    const content = document.querySelector('#content')
    content.innerHTML = `<h4> Your Children </h4>`
    Child.renderUserChildren()
  }
  
  static resetDOM() {
    const formDiv = document.querySelector('#form-div')
    const content = document.querySelector('#content')
    const listDiv = document.querySelector('#list-div')
    formDiv.innerHTML = ""
    content.innerHTML = ""
    listDiv.innerHTML = ""
  }

  static renderChild(child) {
    console.log(child)
  }

}