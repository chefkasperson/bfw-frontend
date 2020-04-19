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
    case 'home-link':
      DOM.loadMainContainer()
      break
    default:
  }
}

function handleMainClick(e) {
  switch (e.target.className) {
    case 'auth-form':
      e.preventDefault()
      handleAuthFormClick(e)
      break
    case 'add-child-form':
      DOM.loadChildForm()
      break
    case 'add-word-form':
      DOM.loadWordForm()
      break
    case 'new-word-form':
      e.preventDefault()
      Child.handleNewWord()
      break
    case 'child-button':
      Child.getChildById(e.target.id)
      break
    case 'new-child-form':
      e.preventDefault()
      Child.handleNewForm()
      break
    default: 
  
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
    

  }
}
