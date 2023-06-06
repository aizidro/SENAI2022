function informacoes() {
    const id = document.querySelector("#id")
    const nome = document.querySelector("#nome")
    const cpf = document.querySelector("#cpf")
    const email = document.querySelector("#email")
    const date = document.querySelector("#date")
    const cep = document.querySelector("#cep")
    const numero = document.querySelector("#numero")
    const Complemento = document.querySelector("#complemento")
    const tell = document.querySelector("#tell")
    const senha = document.querySelector("#senha")
    const info = JSON.parse (localStorage.getItem('usuario')) // infomações do Usuario
    const telefones = info.telefones.map(element=> element)
    const listaTelefones = telefones.join(', ') 

    id.value = info.id
    nome.value = info.nome
    cpf.value = info.cpf
    email.value = info.email
    date.value = info.nascto
    cep.value = info.endereco.cep
    numero.value = info.endereco.numero
    Complemento.value = info.endereco.complemento
    tell.value = listaTelefones
    
}
