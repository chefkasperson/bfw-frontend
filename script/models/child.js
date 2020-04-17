class Child {
  // constructor(attributes) {
  //   this.id = attributes.id
  //   this.name = attributes.name
  //   this.gender = attributes.gender
  //   this.birthday = attributes.birthday
  //   this.childWords = attributes.child_words
  //   this.wordString = attributes.word_string
  // }
  static currentChild = {}

  static setCurrentChild(child) {
    this.currentChild = child
  }

  static getChildren() {
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
    this.setCurrentChild(child)
    DOM.renderChild(child)
  }
  
  static renderUserChildren() {
    Child.getChildren()
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
  
  static listChildWords(child) {
    let words = child.child_words
    words.forEach(w => Child.renderWord(w))
  }

  static renderWord(word) {
    const listDiv = document.querySelector('#list-div')
    let h4 = document.createElement('h4')
    h4.innerText = word.word_string
    
    
    let p2 = document.createElement('p')
    p2.innerText = 'baby says: ' + word.baby_says + ' --learned at ' + word.age_learned + ' months -- notes: ' + word.notes 

    let btn = document.createElement('button')
    btn.setAttribute('class', 'word-button')
    btn.setAttribute('id', `${word.id}`)
    btn.innerText = 'edit'
    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'word-div')
    divCard.setAttribute('id', `word-div-${word.id}`)
    divCard.append(h4, p2, btn)
    listDiv.append(divCard)
  }

  static renderWordForm() {
    let child = this.currentChild
    return `
    <form class='new-word-form' id='word-form' action="#" method="post">
      <label for='word'>Word:</label>
      <input id='word-form-string-input' name='word' type="text" required><br>
      <label for='baby_says'>Baby says:</label>
      <input id='word-form-baby_says-input' name='baby_says' type="text"><br>
      <label for="notes">Notes: </label>
      <input id='word-form-notes-input' name='notes' type="text"><br>
      <input id='word-form-child-id' name='child_id' type="hidden" value=${child.id}><br>
      <input class='new-word-form' id="word-form-submit" type='submit' value='Create Word' >
    </form>
    `
  }

  static handleNewWord() {
    const word = document.querySelector('#word-form-string-input').value
    const babySays = document.querySelector('#word-form-baby_says-input').value
    const notes = document.querySelector('#word-form-notes-input').value
    const childId = document.querySelector('#word-form-child-id').value
    
    this.sendWordToDB(word, babySays, notes, childId)
  }

  static sendWordToDB(word, baby_says, notes, child_id) {

    const wordInfo = {
      word: {
        word,
        baby_says,
        notes,
        child_id,
      }
    }
    if (word) {
      API.post('/new_word', wordInfo)
      .then(this.handleWordResponse.bind(this))
      // .catch(alert)
    } else {
      alert('You must provide both a word')
    }
  }

  static handleWordResponse(r) {
    this.renderWord(r.word)
  }
}