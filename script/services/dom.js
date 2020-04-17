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
    const formDiv = document.querySelector('#form-div')
    content.innerHTML = `<h4> Your Children </h4>`
    Child.renderUserChildren()
    formDiv.innerHTML = `<button class='add-child-form' id='child-form-button'>Add a child</button>`
  }
  
  static resetDOM() {
    const formDiv = document.querySelector('#form-div')
    const content = document.querySelector('#content')
    const listDiv = document.querySelector('#list-div')
    formDiv.innerHTML = ""
    content.innerHTML = ""
    listDiv.innerHTML = ""
  }
  
  static loadChildForm() {
    const formDiv = document.querySelector('#form-div')
    formDiv.innerHTML = Child.renderNewChildForm()
  }

  static renderChild(child) {
    const content = document.querySelector('#content')
    const formDiv = document.querySelector('#form-div')
    DOM.resetDOM()
    content.innerHTML = `
    <h3>${child.name}<h3>
    <h5>${child.child_words.length} Words Learned</h5>`
    
    Child.listChildWords(child)
    formDiv.innerHTML = `<button class='add-word-form' id='word-form-button'>Add a new word</button>`
  }
  
  static loadWordForm() {
    const formDiv = document.querySelector('#form-div')
    formDiv.innerHTML = Child.renderWordForm()
  }

}