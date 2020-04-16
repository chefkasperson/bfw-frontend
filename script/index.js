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
  event.preventDefault()
  switch (e.target.className) {
    case 'auth-form':
      handleAuthFormClick(e)
      break
    default: 
      console.log("clicked on ", e.target)
    }
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
