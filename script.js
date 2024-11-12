const email = "teste@teste.com"
const senha = "123456"
localStorage.setItem(email, senha)

const emailInput = document.getElementById("email")
const senhaInput = document.getElementById("senha")
const formulario = document.getElementById("formulario_login")

// Quando o formulário for submetido
// Ele envia e atualiza a pagina
// Esse é o evento padrao ("Default") do html para a tag <form>
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailDigitado = emailInput.value
    const senhaDigitada = senhaInput.value

    console.log(emailDigitado)
    console.log(senhaDigitada)

})
