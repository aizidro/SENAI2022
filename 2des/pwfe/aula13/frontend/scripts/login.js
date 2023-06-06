const inpEmail = document.querySelector('#email')
const inpSenha = document.querySelector('#senha')

function autenticar() {
    let email = inpEmail.value  
    let senha = inpSenha.value

    let usuario = info.find((user) => {
        if ((user.email == email) && (user.senha == senha))
        return user
              
    })

    if (usuario != undefined) {
        // let info = {
        //     "id":usuario.id,
        //     "nome":usuario.nome
        // }
        console.log('indefinido');
        localStorage.setItem("usuario", JSON.stringify(usuario));

        window.location.href = "/pages/perfil.html";
        
    } else {
        const h3 = document.querySelector('#resultado')
        h3.textContent = "Usuario ou senha incorreto"
        h3.style.color= "red"
        h3.style.alignSelf = 'center'
    }
}