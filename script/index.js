document.addEventListener('DOMContentLoaded', init)

function init() {
  Auth.getCurrentUser()
  DOM.loadMainContainer()
  attachListeners()
}


function attachListeners() {
  const main = document.querySelector('#main-container')
  main.addEventListener('click', handleMainClick)
  const nav = document.querySelector('#nav')
  nav.addEventListener('click', handleNavClick)
}

function handleNavClick(e) {
  switch (e.target.id) {
    case 'logout-link':
      Auth.handleLogout()
      break
    case 'login-link':
      DOM.loadLoginForm()
      break
    case 'signup-link':
      DOM.loadSignupForm()
      break
    default:
      console.log("clicked on ", e.target)
  }
}

function handleMainClick(e) {
  switch (e.target.className) {
    case 'auth-form':
      e.preventDefault()
      console.log('clicked on', e.target)
      handleAuthFormClick(e)
      break
    case 'child-button':
      handleChildButtonClick(e)
      break
    case 'new-child-form':
      e.preventDefault()
      Child.handleNewForm()
    default: 
      console.log("clicked on ", e.target)
    }
  }
  
  function handleChildButtonClick(e) {
    Child.getChildById(e.target.id)
  }

  function handleAuthFormClick(e) {
    switch (e.target.id) {
      case 'login-form-submit':
        Auth.handleLogin()
        break
      case 'signup-form-submit':
        Auth.handleSignup()
        break
      
      default: 
        console.log("clicked on ", e.target)

  }
}
