
class User {
  constructor(attributes) {
    this.id = attributes.id
    this.username = attributes.username
    this.children = attributes.children
  }

  static renderSignupForm() {
    return `
    <form class='auth-form' id='signup-form' action="#" method="post">
      <input id='signup-form-username-input' name='username' type="text" autocomplete="username" placeholder='username'>
      <input id='signup-form-password-input' name='password' type="password" autocomplete="current-password" placeholder='password'>
      <input class='auth-form' id="signup-form-submit" type='submit' value='Sign Up' >
    </form>
    `
  }

}