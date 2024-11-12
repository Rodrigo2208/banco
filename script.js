const emailInputLogin = document.getElementById("email")
const senhaInputLogin = document.getElementById("senha")
const formularioLogin = document.getElementById("formulario_login")

formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailDigitado = emailInputLogin.value
    const senhaDigitada = senhaInputLogin.value

    const usuarios = JSON.parse(localStorage.getItem("usuarios"))

    const usuarioEncontrado =  usuarios.find((usuario) => {
        return (
            usuario.email == emailDigitado &&
            usuario.senha == senhaDigitada
        
        )
    })

    if (usuarioEncontrado) {
        Swal.fire({
            title: "Parabens!",
            text: "Você é foda.",
            timer:1500,
            showConfirmButton: false,
            icon: "success"
          });
    
    } else {
        Swal.fire({
            icon: "error",
            title: "Algo aconteceu tente novamente.",
            text: "Seu bucetudo!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
})
