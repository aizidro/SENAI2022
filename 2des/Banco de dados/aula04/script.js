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
        "descricao" : "Um panda Engraçado",
        "imagem" : [
         "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg",
         "https://cdn.trendsbr.com.br/uploads/noticias/2022/08/01/yh83rk1uo8om.jpg",
         "https://www.tagesspiegel.de/gesellschaft/images/berlin-11-10-18-zoologischer-garten-berlin-panda-meng-meng-berlin-11-10-18-zoological-garden-ber/alternates/BASE_21_9_W1000/berlin-11-10-18-zoologischer-garten-berlin-panda-meng-meng--berlin-11-10-18-zoological-garden-ber.jpeg"
        ]
    };
    descricao.innerHTML = info.descricao;
    foto.src = info.imagem[gerarNumero()];
}

function gerarNumero() {
    let num = Math.floor(Math.random() * 3);
    return num;
}