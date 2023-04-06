class Paciente{
    constructor(p) { // CRIAMOS UM CRUD
        this.id = p. id,
        this.nome_completo = p.nome_completo,
        this.nascimento = p.nascimento,
        this.peso = p.peso,
        this.altura = p.altura
    }

    create() {
        return `INSERT INTO paciente(nome_completo,nascimento,peso,altura) VALUE('${this.nome_completo}', '${this.nascimento}' , ${this.peso},${this.altura});` 
        // CADASTRA UM PACIENTE
    }

    read() {
        return `SELECT * FROM paciente;`
        // MOSTRA TODOS OS PACIENTES CADASTRADOS
    }

    UPDATE() {
        return `UPDATE paciente SET nome_completo = '${this.nome_completo}', nascimento =  '${this.nascimento}', peso = ${this.peso}, altura = ${this.altura} WHERE id = ${this.id};`
       // ALTERA O OS DADOS CADASTRADOS
    }

    delete() {
        return `DELETE FROM paciente WHERE id = ${this.id};`   
        // DELETA OS PACIENTES CADASTRADOS
    }
}

module.exports = Paciente;