const inpEmail = document.querySelector('#email')
const inpSenha = document.querySelector('#senha')
const form = document.querySelector("form");


form.addEventListener("submit", e => {
    e.preventDefault()

})

function autenticar() {
    let data = {
        "email": email.value,
        "senha": senha.value
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
        .then(resp => { return resp.json() })
        .then(info => {
            if (info.id != undefined) {
                localStorage.removeItem('usuario')
                localStorage.setItem('usuario', JSON.stringify(info));

                window.location.href = "./perfil.html";
            } else {
                const h3 = document.querySelector('#resultado')
                h3.textContent = "Usuario ou senha incorreto"
                h3.style.color = "red"
                h3.style.alignSelf = 'center'
            }
        })
}