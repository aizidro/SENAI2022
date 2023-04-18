var tbody = document.querySelector("tbody")
var thead = document.querySelector("thead")
var tdCount = thead.querySelectorAll("th").length

fetch ("http://localhost:3000/listar")
.then(info =>{
    return info.json()
})

.then(data => {
    for(element of data) {
       let {matricula,nome_completo,data_admissao,salario,data_pagto,desempenho,bonificacao} = element

       let tr = document.createElement("tr")

       tr.innerHTML = `
       <td>${matricula}</td>
       <td>${nome_completo}</td>
       <td>${formatarData(data_admissao)}</td>
       <td>${salario}</td>
       <td>${formatarData(data_pagto)}</td>
       <td>${desempenho}</td>
       <td>${bonificacao}</td>
       `
       tbody.appendChild(tr);
    }
})

function formatarData(data) {
    const formato = new Date(data);
    const dataFormatada = formato.toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, '/');
    return dataFormatada;
}

function adicionar() {
    let control = 0;
    inputs.forEach(input => {
        if(input.value.length == 0) {
            control = 1;
        }
    });
    if(control == 1) {
        alert('Por favor, preencher todas as informações');
    } else {
        let body = {
            'matricula': form.matricula.value,
            'nome_completo': form.nome.value,
            'data_admissao': form.admissao.value,
            'salario': form.salario.value,
            'data_pagto': form.pagamento.value,
            'desempenho': form.desempenho.value
        }
        let data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        fetch('http://localhost:8081/funcionario/cadastrar', data)
        .then(response => { 
            if(response.status == 200) {
                location.reload()
            } 
        })
    }
}