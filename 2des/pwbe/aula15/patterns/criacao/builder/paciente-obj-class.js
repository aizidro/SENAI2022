// POO Criar um Objeto en JavaScript

const objeto = {}

objeto.nome = "Márcia"
objeto.idade = 19
objeto.peso = 66.5
objeto.altura = 1.58
//Mostrar objeto
console.log(objeto)
//Método - Obter IMC (Índice de Massa Corpórea)
objeto.getImc = () => {
    return Number ((objeto.peso / (objeto.altura ** 2)).toFixed(2))
}
//Mostrar o resultado do método
console.log(objeto.getImc())
//Incorporar o resultado do Método a um atributo
objeto.imc = objeto.getImc()
//Mostrar o Objeto com o Método incorporado
console.log(objeto)

// Criar um Objeto  JavaScript a partir de uma Classe
class Paciente {
    //Atributos
    nome
    idade
    peso
    altura
    imc
    //Método
    getImc(){
        return Number((this.peso / this.altura ** 2).toFixed(2))
    }
}

//Mostrar somente a classe
console.log(Paciente)
//Instânciar a classe paciente em um objeto
const paciente1 = new Paciente()
//Mostrar p objeto instanciado na classe Paciente1 está com todos os atributos e métodos indefinidos
console.log(paciente1)
//O Objeto paciente1
paciente1.nome = 'Alfredo' 
paciente1.idade = 25 
paciente1.peso = 88 
paciente1.altura = 1.92
//Mostrar Paciente 1
console.log(paciente1)
paciente1.imc = paciente1.getImc()
console.log(paciente1)