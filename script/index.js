document.addEventListener('DOMContentLoaded', init)

function init() {
  console.log('hello world')
  // Auth.getCurrentUser()
  loadMainContainer()
  attachListeners()
}

function loadMainContainer() {
  const main = document.querySelector('#main-container')
  main.innerHTML = Auth.renderLoginForm()
}

function attachListeners() {
  const main = document.querySelector('#main-container')
  main.addEventListener('click', handleMainClick)
  const nav = document.querySelector('#nav')
  nav.addEventListener('click', handleNavClick)
}

function handleNavClick(e) {
  console.log("clicked on ", e.target)
}

function handleMainClick(e) {
  event.preventDefault()
  console.log(e.target.className)
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

      default: 
        console.log("clicked on ", e.target)

  }
}
