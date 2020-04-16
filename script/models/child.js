class Child {
  constructor(attributes) {
    this.id = attributes.id
    this.name = attributes.name
    this.gender = attributes.gender
    this.birthday = attributes.birthday
    this.childWords = attributes.child_words
  }

  static getChildren() {
    console.log(Auth.currentUser)
    Auth.currentUser.children.forEach(child => Child.renderChild(child))
  }

  static renderChild(child) {
    console.log(child)
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
  
  static renderUserChildren() {
    Child.getChildren()
  }
  
}