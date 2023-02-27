const modal = document.querySelector(".modal");
const body = document.querySelector("body");
fetch("https://jsonplaceholder.typicode.com/users") // os dados do site
.then((resp) =>{
   return resp.json(); // retorna o json do site
})
.then((usuarios) => {
    usuarios.forEach((usuario) => { // percorre o vetor de jsons
        let nome = document.createElement("p"); // cria um paragrafo
        let cidade = document.createElement("p");

    nome.innerHTML = `Nome : ${usuario.name}`; // pega o nome de cada usuario
    cidade.innerHTML = `Cidade : ${usuario.address.city}`; // pega a cidade de cada usuario

    cidade.className = "pcidade";

    cidade.addEventListener('click', () =>{
        buscarUsuario(usuario.id)
    });

    body.appendChild(nome); // adc os paragrafos no HTML
    body.appendChild(cidade);
    })
    
});

function buscarUsuario(id) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((resp) => {
        return resp.json()
    })
    .then (usuario => {
        let { zipcode, street, suite } = usuario.address;

       document.querySelector("#cep").innerHTML = `CEP : ${zipcode}`;
       document.querySelector("#rua").innerHTML = `Rua : ${street}`;
       document.querySelector("#apartamento").innerHTML = `Apartamento : ${suite}`;
       

        toggleModal();
    })
}

function toggleModal() {
    modal.classList.toggle("show");
}
