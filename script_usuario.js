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
            <th>
            <div class="btn btn-sm btn-warning">Editar</div>
            <div class="btn btn-sm btn-danger" onclick="apagarUsuario(${usuario.id})">Excluir</div>
            </th>
        </tr>
    ` 
    tabela.innerHTML += linha
}

function apagarUsuario(id){
    const usuarioEncontrado = usuarios.find((usuario) => {
        return usuario.id == id
    })
    console.log("Usuario a apagar:", usuarioEncontrado)
    usuarios.splice(usuarios.indexOf(usuarioEncontrado),1)
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
    location.reload()
}

const formularioCadastro = document.getElementById("formulario_modal")
formularioCadastro.addEventListener("submit",(event) =>{
    event.preventDefault()
    const ultimoUsuario = usuarios[usuarios.length -1]
    const usuarioNOVO = {
        id: (ultimoUsuario?.id || 0) +1,
        email: document.getElementById("email_usuario").value,
        senha: document.getElementById("senha_usuario").value
    }
    usuarios.push(usuarioNOVO)
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
    location.reload()
})

