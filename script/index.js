document.addEventListener('DOMContentLoaded', init)

  function init() {
    console.log('hello world')
    Auth.getCurrentUser()
    loadContentContainer()
  }

  function loadContentContainer() {
    const contentContainer = document.querySelector('#content-container')
    contentContainer.innerHTML = `<h1>Hello World</h1>`
  }
  const mainContainer = document.querySelector('#main-container')
  const errorsContainer = document.querySelector('#errors-container')
  const formsContainer = document.querySelector('#forms-container')
  const soundContainer = document.querySelector('#sound-editor-container')
