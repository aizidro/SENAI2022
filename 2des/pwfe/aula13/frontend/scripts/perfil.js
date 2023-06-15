var userId = 0
async function informacoes() {
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

    const info = JSON.parse(localStorage.getItem('usuario')) // infomações do Usuario
    userId = info.id
    const usuarioFetch = await fetch(`http://localhost:3000/listar/${userId}`)
    const [usuario] = await usuarioFetch.json()

    
    const nasc = usuario.nascimento.substring(0,10)
    id.textContent= usuario.id
    nome.value = usuario.nome
    cpf.value = usuario.cpf
    email.value = usuario.email
    date.value = nasc

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
    
}

function alterar() {
    let confirmSenha = verificarSenha()
    console.log(confirmSenha);
    if(confirmSenha === 2) {
        const nome = document.querySelector("#nome")
    const cpf = document.querySelector("#cpf")
    const email = document.querySelector("#email")
    const date = document.querySelector("#date")
        const data = {
            'id': userId,
            'cpf': cpf.value,
            'nome': nome.value,
            'email': email.value,
            'nascimento': date.value,
            'senha': senha.value
        }

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
            alterarEndereco()
        })
    }else if(confirmSenha === 1) {
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

                alterarEndereco()
            })
    } else if (confirmSenha === 3) {
        alert('As senhas não podem conter espaços em branco')
    } else {
        alert('Senha e confirmação de senha não conferem')
    }
}

function verificarSenha() {
    let senha = document.querySelector('#senha').value
    let confirmSenha = document.querySelector('#confirma').value
    console.log(senha, confirmSenha)
    /*
     * índice
     * return 0: senhas inválidas (diferentes)
     * return 1: senhas aceitas (alterar)
     * return 2: inputs vazios (senhas continuam as mesmas)
     * return 3: senhas não podem conter espaço
     */

    if(senha.length == 0 && confirmSenha.length == 0) return 2

    // se as senhas forem diferentes
    if(senha != confirmSenha) return 0
    
    // permite que a senha tenha letras (maiúsculas e minusculas), números e caracteres especiais
    const regex = /^(?=.*[a-zA-Z\d@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if(!regex.test(senha)) return 0

    if(senha.includes(' ') || confirmSenha.includes(' ')) {
        return 3;
    }

    return 1
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
        
    }
}

function alterarTelefone() {
    var inpTelefones = document.querySelector('#telefones')
    const data = {
        'id': idUser,
        'telefone': inpTelefones.value
    }

    const info = {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(data)
    }

    fetch('http://localhost:3000/telefone/alterar', info)
    .then(response => {return response.json()})
    .then(retorno => {
        alterarEndereco()
    })
}

// irá buscar todos os endereços do usuário
async function fetchEnderecos(id) {
    const response = await fetch(`http://localhost:3000/endereco/${id}`, { method: 'GET' });
    const enderecos = await response.json();
    return enderecos;
}

function alterarEndereco() {
    var inpCep = document.querySelector('#cep')
    var inpNumero = document.querySelector('#numero')
    var inpComplemento = document.querySelector('#complemento')
    
    const data = {
        'id_users': userId,
        'cep': inpCep.value,
        'numero': inpNumero.value,
        'complemento': inpComplemento.value
    }

    const info = {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(data)
    }

    fetch('http://localhost:3000/alterarEnd', info)
    .then(response => {return response.json()})
    .then(retorno => {
      
    })
    .catch(err => {console.log(err)})
}