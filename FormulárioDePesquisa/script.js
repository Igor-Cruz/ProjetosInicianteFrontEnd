let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function (evento) {
  let temErro = false

  evento.preventDefault()
  let inputNome = document.forms['formCadastro']['nome']

  // Verificar se o campo está vazio
  if (!inputNome.value) {
    temErro = true
    inputNome.classList.add('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = 'DIGITE O NOME CORRETAMENTE'
  } else {
    inputNome.classList.remove('inputError')
    let span = inputNome.nextSibling.nextSibling
    span.innerText = ''
  }

  let inputEmail = document.forms['formCadastro']['email']

  // Verificar se o campo está vazio
  if (!inputEmail.value) {
    temErro = true
    inputEmail.classList.add('inputError')

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = 'DIGITE O SEU EMAIL CORRETAMENTE'
  } else {
    inputEmail.classList.remove('inputError')
    let span = inputEmail.nextSibling.nextSibling
    span.innerText = ''
  }

  let inputIdade = document.forms['formCadastro']['idade']

  // Verificar se o campo está vazio
  if (!inputEmail.value) {
    temErro = true
    inputIdade.classList.add('inputError')

    let span = inputIdade.nextSibling.nextSibling
    span.innerText = 'DIGITE A SUA IDADE CORRETAMENTE'
  } else {
    inputIdade.classList.remove('inputError')
    let span = inputIdade.nextSibling.nextSibling
    span.innerText = ''
  }
  if (temErro) {
    formulario.submit()
  }
}
