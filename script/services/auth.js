class Auth {
  static currentUser = {}

  static setCurrentUser() {
    this.currentUser = user
    console.log('current user is ', user)
  }

  static getCurrentUser() {
    API.get("/get_current_user")
      .then(resp => {
        if (Response.logged_in) {
          this.setCurrentUser(resp.current_user)
          Navbar.resetNav() 
        } else {
          Error.handleError(resp.message)
        }
      })
  }

  static handleLogin() {
    const username = document.querySelector('#login-form-username-input')
    const password = document.querySelector('#login-form-password-input')

    const userInfo = {
      user: {
        username,
        password,
      }
    }

    API.post('/login', userInfo)
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