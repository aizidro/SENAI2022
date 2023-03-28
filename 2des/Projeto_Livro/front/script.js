const cadastro = document.querySelector('#cadastro');
const corpo = document.querySelector('#corpo');

cadastro.addEventListener('submit', e => {
    e.preventDefault();
    let linha = document.createElement('tr')
    let col1 = document.createElement('td')
    let col2 = document.createElement('td')
    let col3 = document.createElement('td')
    let col4 = document.createElement('td')
    let col5 = document.createElement('td')
    let col6 = document.createElement('td')
    let col7 = document.createElement('td')
    col1.innerHTML = cadastro.id.value
    col2.innerHTML = cadastro.titulo.value
    col3.innerHTML = cadastro.autor.value
    col4.innerHTML = cadastro.valor.value
    col5.innerHTML = cadastro.dataEmprest.value
    col6.innerHTML = cadastro.dataPrevDev.value
    col7.innerHTML = cadastro.dataDevolucao.value

    linha.appendChild(col1)
    linha.appendChild(col2)
    linha.appendChild(col3)
    linha.appendChild(col4)
    linha.appendChild(col5)
    linha.appendChild(col6)
    linha.appendChild(col7)
    corpo.appendChild(linha)
    
});

const jurosLivro = dataDevolucao - dataPrevDev 

console.log(jurosLivro);
