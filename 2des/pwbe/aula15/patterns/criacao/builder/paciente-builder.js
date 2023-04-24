class Paciente{
    nome
    idade
    peso
    altura
    imc
    constructor(nome, peso, idade, altura){
        this.nome = nome
        this.idade = idade 
        this.peso = peso
        this.altura = altura
        this.imc = Number((peso / altura ** 2).toFixed(2)) 
    }
}

//Construir o Objeto paciente1 utilizando a classe Paciente com o construtor
const paciente = new Paciente('Godofredo',74, 48, 1.60)
//Mostrar o resultado
console.log(paciente)