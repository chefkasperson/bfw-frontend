class Forms {
static loadForm(form_template) {
  let formDiv = document.querySelector('#form-container')
  formDiv.clear
  formDiv.innerHTML = form_template
}

}