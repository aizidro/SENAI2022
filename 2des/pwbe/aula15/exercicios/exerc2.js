class Compra {
    id
    data
    produto
    cliente
    totalParcelas
    preco
    quantidade
    total

    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        this.id = id
        this.data = data
        this.produto = produto
        this.cliente = cliente
        this.totalParcelas = totalParcelas
        this.preco = preco
        this.quantidade = quantidade
        this.total = this.getTotal()
    }
    getTotal() {
        return (this.preco) *(this.quantidade)
    }
}

const compras = [
    new Compra(1,'25/03/2022','TV LCD 4K 50" LG','Jair Santana',4,2800.00,2),
    new Compra(2,'12/05/2022','TV LCD 4K 50" Sansung','Jurema Santana',2,3100.00,1)
]
console.log(compras)

