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
}