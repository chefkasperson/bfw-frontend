class Child {
  constructor(attributes) {
    this.id = attributes.id
    this.name = attributes.name
    this.gender = attributes.gender
    this.birthday = attributes.birthday
    this.childWords = attributes.child_words
    this.wordString = attributes.word_string
  }

  static getChildren() {
    console.log(Auth.currentUser)
    Auth.currentUser.children.forEach(child => Child.renderChild(child))
  }

  static renderChild(child) {
    const listDiv = document.querySelector('#list-div')
    let h3 = document.createElement('h3')
    h3.innerText = child.name

    let btn = document.createElement('button')
    btn.setAttribute('class', 'child-button')
    btn.setAttribute('id', `${child.id}`)
    btn.innerText = 'Add Words'
    
    let divCard = document.createElement('div')
    divCard.setAttribute('id', `child-div-${child.id}`)
    divCard.append(h3, btn)
    listDiv.append(divCard)
  }

  static getChildById(id) {
    let child = Auth.currentUser.children.find(c => (c.id == id))
    DOM.renderChild(child)
  }
  
  static renderUserChildren() {
    Child.getChildren()
  }

  static renderWordForm(child) {
    return `<h3> HI THERE ${child.name}</h3>`
  }

  static renderNewChildForm() {
    return `
      <h4>Add a child</h4>
      <form class='new-child-form' id='child-form' action="#" method="post">
        <label for='name'>name:</label>
        <input id='child-form-name-input' name='name' type="text" required><br>
        <label for='birthday'>birthday:</label>
        <input id='child-form-birthday-input' name='birthday' type="date" required><br>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
        <input id='child-form-user-id' name='user_id' type="hidden" value=${Auth.currentUser.id}>
        <input class='new-child-form' id="child-form-submit" type='submit' value='Create Child' >
      </form>
    `
  }
  static handleNewForm() {
    const name = document.querySelector('#child-form-name-input').value
    const birthday = document.querySelector('#child-form-birthday-input').value
    const male = document.querySelector('#male')
    const female = document.querySelector('#female')
    const userId = document.querySelector('#child-form-user-id').value
    console.log(male.checked, female.checked)
    const gender = (male.checked ? male.value : female.value)
    Child.sendNewChildInfo('/children', name, birthday, userId, gender)
  }
  
  static sendNewChildInfo(url, name, birthday, userId, gender) {
    console.log(url, name, birthday, userId, gender)
    const childInfo = {
      child: {
        name,
        birthday,
        gender,
        user_id: userId,
      }
    }
    if (name && birthday && gender) {
      console.log('sending child to database')
      API.post(url, childInfo)
      .then(this.handleChildResponse.bind(this))
      // .catch(alert)
    } else {
      alert('You must provide all the info')
    }
  }
  
  static handleChildResponse(r) {
    Child.renderChild(r.child)
  }

}