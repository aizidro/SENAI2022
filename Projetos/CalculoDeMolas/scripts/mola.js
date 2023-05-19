function calculo() {
    const CompriTotalMola = document.querySelector('#compMola').value;
    const totalMolaCompri = document.querySelector('#totalMola').value;
    const resultadoCompressao = document.querySelector('#resultCompressao');
    const resultadoConstante = document.querySelector('#resultConstante');
    const compressao_mm = CompriTotalMola - totalMolaCompri

    const constante = 400 / compressao_mm
    resultadoCompressao.innerHTML = `Compressão / mm: ${constante.toFixed(0)}`
    resultadoConstante.innerHTML = `Constante: ${compressao_mm}`

    return (compressao_mm)
}

function calculo2() {
    const diametroDoFio = document.querySelector('#diametroFio').value;
    const espiraisUteis = document.querySelector('#NumberEspiraisUteis').value;
    const diametroMed = document.querySelector('#diametrMedio').value;
    const constante2 = document.querySelector('#constanteh1');
    const nespiraisTotais = document.querySelector('#nespiraisTotais');
    const cargotota = document.querySelector('#cargoTotal');

    // const potencia = diametroDoFio * diametroDoFio * diametroDoFio * diametroDoFio;
    const potencia = diametroDoFio ** 4;
    const potencia2 = diametroMed ** 3
    const resultado = (8200 * potencia) / 8 / espiraisUteis / potencia2
    console.log()
    constante2.innerHTML = `Constante: ${resultado.toFixed(3)}`
    console.log(espiraisUteis);
    const espiraisTotais = Number(espiraisUteis) + 2;
    nespiraisTotais.innerHTML = `Espirais totais: ${(espiraisTotais)}`;
    const compressao_mm = calculo();
    cargotota.innerHTML = `Diametro Médio: ${(resultado * compressao_mm).toFixed(3)}`;
}