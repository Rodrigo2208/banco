constusuarios = JSON.parse(localStorage.getItem("usuarios"))
const tabela = document.getElementById("tabela-usuarios")

const usuarios = JSON.parse(localStorage.getItem("usuarios"))

for (let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];
    console.log(usuario.id, usuario.email, usuario.senha)

    const linha = `
        <tr>
            <th>${usuario.id}</th>
            <th>${usuario.email}</th>
            <th>${usuario.senha}</th>
        </tr>
    `
    tabela.innerHTML += linha
}

