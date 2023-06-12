var userId = 0
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
    id.textContent= info.id
    nome.value = info.nome
    cpf.value = info.cpf
    email.value = info.email
    date.value = info.nascimento

    fetchEnderecos(info.id) //Ele vai chamar a função 
    .then(enderecos => {
        // Desestruturar as informações
        const { cep, numero, complemento } = enderecos[0]
        // Adicionar as Informações nos Inputs
        this.cep.value = cep
        this.numero.value = numero
        Complemento.value = complemento
    });

    fetchTelefones(info.id) // chama a função
    .then(listaTelefones => { // retorna uma Promisse
        tell.value = listaTelefones[0].telefone
    })
    
    userId = info.id
}

function alterar() {
    const nome = document.querySelector("#nome")
    const cpf = document.querySelector("#cpf")
    const email = document.querySelector("#email")
    const date = document.querySelector("#date")
    const senha = document.querySelector("#senha")
        const data = {
            'id': userId,
            'cpf': cpf.value,
            'nome': nome.value,
            'email': email.value,
            'nascimento': date.value,
            'senha': senha.value
        }
        console.log(data);

        const info = {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(data)
        }

        fetch('http://localhost:3000/alterar', info)
        .then(response => {return response.json()})
        .then(retorno => {
            console.log(retorno)
        })
}

// Esse Fetch vai pedir para o Backend pesquisar os endereços com o id do Usuario
async function fetchEnderecos(id) {
    const response = await fetch(`http://localhost:3000/endereco/${id}`, { method: 'GET' });
    const enderecos = await response.json();
    return enderecos;
}

async function fetchTelefones(id) {
    try {
        const resp = await fetch(`http://localhost:3000/telefones/${id}`, { method: 'GET' });
        const telefones = await resp.json();
        return telefones;
    } catch (error) {
        console.log(error);
    }
}