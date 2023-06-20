const carga = document.querySelector('#cargaEsperada');
const valoresI3 = [3.6, 4, 5, 7.8, 8]

function calculaCompressao() {
    const CompriTotalMola = document.querySelector('#compMola').value;
    const totalMolaCompri = document.querySelector('#totalMola').value;
    const resultadoCompressao = document.querySelector('#resultCompressao');
    const resultadoConstante = document.querySelector('#resultConstante');
    const compressao_mm = CompriTotalMola - totalMolaCompri

    const constante = carga.value / compressao_mm
    resultadoCompressao.innerHTML = `Compressão / mm: ${compressao_mm.toFixed(1)}`
    resultadoConstante.innerHTML = `Constante gramas / mm: ${constante.toFixed(0)}`

    return (compressao_mm)
}

function testaValor() {
    // const cargaEsperadaMin = document.querySelector('#cargaEsperadaMin').value
    // const cargaEsperadaMax = document.querySelector('#cargaEsperadaMax').value
    const CompriTotalMola = document.querySelector('#compMola').value;
    const totalMolaCompri = document.querySelector('#totalMola').value;

    let cargaTotalTeste = 0

    let potencia = 0;
    let potencia2 = 0;
    let potencia3 = 0;
    let constante = 0;

    for (let i = 0; i <= 1.5; i += 0.05) {
        potencia = i

        for (let i2 = 2; i2 <= 15; i2 += 0.5) {
            potencia2 = i2

            valoresI3.forEach((i3, index) => {
                potencia3 = i3
                constante = recebeConstante(potencia ** 4, potencia2, potencia3 ** 3)
                console.log({constante})
                cargaTotalTeste = constante * calculaCompressao()
                console.log()
                console.log({cargaTotalTeste, min:carga.value - 10, max: Number(carga.value) + 10})
                if (cargaTotalTeste >= carga.value - 10 && cargaTotalTeste <= carga.value + 10) {
                    console.log("if")
                    const diametroFio = document.querySelector('#diametroFioh1');
                    const numEspiraisUteis = document.querySelector('#numEspiraisUteis');
                    const diametroMedio = document.querySelector('#diametroMedio');
                    const cargaTotalh1 = document.querySelector('#cargoTotal');

                    diametroFio.textContent = `Diametro do fio: ${potencia.toFixed(2)}`
                    numEspiraisUteis.textContent = `Numero de espirais uteis: ${potencia2}`
                    diametroMedio.textContent = `Diametro medio: ${potencia3.toFixed(1)}`
                    cargaTotalh1.textContent = `Carga total: ${cargaTotalTeste}`

                }

            })
        }
    }

}

function recebeConstante(potencia1, potencia2, potencia3) {
    console.log({potencia1, potencia2, potencia3})
    return Math.floor((8200 * potencia1) / 8 / potencia3 / potencia2)
}

