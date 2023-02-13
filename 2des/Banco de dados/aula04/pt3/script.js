var body = document.querySelector('body')
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

for(let i = 0; i < destinos.length; i++) {
    let destino = destinos[i];

    let banner = document.createElement("div");
    banner.className = "banner";
    banner.style.backgroundImage = `url(${destino.imagem})`;

    let dest = document.createElement("p");
    dest.innerHTML = destino.destino;

    let desc = document.createElement("p");
    desc.innerHTML = destino.descricao;

    banner.appendChild(dest);
    banner.appendChild(desc);


    body.appendChild(banner);

}