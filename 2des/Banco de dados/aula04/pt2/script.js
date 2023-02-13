var banner = document.querySelector(".banner");
var descricao = document.querySelector('#descricao')
var destino = document.querySelector('#descricao')

var destinos = [
    {

        "imagem": "https://www.ferias.tur.br/thumbnail/2676/600/300/n_111.jpg",
        "destino": "Andrelandia",
        "descricao": "Planos a partir de R$ 120,00"
    },
    {
        "imagem": "https://portal.loft.com.br/wp-content/uploads/2020/07/ipanema.jpg",
        "destino": "Ipanema",
        "descricao": "Curta as ferias em familia"
    },
    {
        "imagem": "https://quantocustaviajar.com/blog/wp-content/uploads/2019/09/the_shard.jpg",
        "destino": "Londres",
        "descricao": "Conheca as piramedes"
    }
]

let indice = gerarNumero(destinos.length);

destino.innerHTML = destinos[indice].destino;
descricao.innerHTML = destinos[indice].descricao;
banner.style.backgroundImage = `url(${ destinos[indice].imagem})`;
console.log(indice)
// banner.style.backgroundImage = 'url(${destinos[1].imagem})';

function gerarNumero(size) {
    let num = Math.floor(Math.random() * size);
    return num;
}
