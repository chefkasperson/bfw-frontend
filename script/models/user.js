
class User {
  static all = []
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.save()
  }
  

  save() {
    User.all.push(this)
  }

  renderLogInForm() {

  }

  renderNewUserForm() {
    
  }
}