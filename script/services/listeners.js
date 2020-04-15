class Listeners {

  static grabContainers() {
    const mainContainer = document.querySelector('#main-container')
    const errorsContainer = document.querySelector('#errors-container')
    const contentContainer = document.querySelector('#content-container')
    const formsContainer = document.querySelector('#forms-container')
    const soundContainer = document.querySelector('#sound-editor-container')
  }

  static attachListeners() {
    mainContainer.addEventListener('click', e => console.log(e.target))
  }

}