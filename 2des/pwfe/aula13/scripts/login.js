const inpEmail = document.querySelector('#email')
const inpSenha = document.querySelector('#senha')

function autenticar() {
    let email = inpEmail.value
    let senha = inpSenha.value

    let usuario = info.find((user) => {
        if ((user.email == email) && (user.senha == senha))
            console.log({ user })
        return user
    })

    if (usuario != undefined) {
        // let info = {
        //     "id":usuario.id,
        //     "nome":usuario.nome
        // }
        console.log(usuario)
        localStorage.setItem("usuario", JSON.stringify(usuario));

        window.location.href = "/pages/perfil.html";
    } else {
        alert("sai fora")
    }
}