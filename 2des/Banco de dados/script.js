//  var paragrafo = document.querySelector("p");
//  console.log(paragrafo.innerHTML);

//  paragrafo.innerHTML = "Novo texto";

var paragrafo = document.querySelector("p");
var inpNome = document.querySelector("#nome");

var foto = document.querySelector("#foto");
var descricao = document.querySelector("#descricao");

function mostrarNome() {
    let valor = inpNome.value;
    let data = {
        "nome" : valor
    };

    paragrafo.innerHTML = JSON.stringify(data);
    paragrafo.innerHMTL = data.nome;
}

function atualizarDados() {
    let info = {
        "descricao" : "Uma calopsita Engraçada",
        "imagem" : "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg"

    };
    descricao.innerHTML = info.descricao;
    foto.src = info.imagem;
}
