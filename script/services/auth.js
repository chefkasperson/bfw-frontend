class Auth {
  static currentUser = {}

  static setCurrentUser(user) {
    this.currentUser = user
  }

  static getCurrentUser() {
    DOM.resetDOM()
    console.log(API.get("/get_current_user"))
    API.get("/get_current_user")
      .then(response => {
        if (response.logged_in) {
          this.setCurrentUser(response.current_user)
        } else {
          console.log(response.message)
        }
        DOM.resetNav()
        DOM.loadMainContainer()
      })
  }

  static handleLogin() {
    const username = document.querySelector('#login-form-username-input').value
    const password = document.querySelector('#login-form-password-input').value
    console.log('i am still here')
    this.loginOrSignup('/login', username, password)
  }

  static handleSignup() {
    const username = document.querySelector('#signup-form-username-input').value
    const password = document.querySelector('#signup-form-password-input').value
    this.loginOrSignup('/users', username, password)
  }

  static handleLogout() {
    this.setCurrentUser({})
    API.post("/logout")
    .then(console.log)
    .finally(() => DOM.loadMainContainer())
  }

  static loginOrSignup(url, username, password) {

    const userInfo = {
      user: {
        username,
        password,
      }
    }
    if (username && password) {
      console.log('i am even here')
      API.post(url, userInfo)
      .then(this.handleUserResponse.bind(this))
      // .catch(alert)
    } else {
      alert('You must provide both a username and password')
    }
  }

  static handleUserResponse(r) {
    if (r.error) {
      alert(r.error)
    } else {
      console.log(r.current_user)
      this.setCurrentUser(new User(r.current_user))
      DOM.resetNav()
      DOM.loadMainContainer()
    }
  }
  
  static get isSignedIn() {
    return !!this.currentUser.username
  }

  static renderLoginForm() {
    return `
    <form class='auth-form' id='login-form' action="#" method="post">
      <input id='login-form-username-input' name='username' type="text" autocomplete="username" placeholder='username'>
      <input id='login-form-password-input' name='password' type="password" autocomplete="current-password" placeholder='password'>
      <input class='auth-form' id="login-form-submit" type='submit' value='Log in' >
    </form>
    `
  }
}