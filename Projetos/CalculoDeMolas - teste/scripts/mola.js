function calculo() {
    const CompriTotalMola = document.querySelector('#compMola').value;
    const totalMolaCompri = document.querySelector('#totalMola').value;
    const Carga = document.querySelector('#cargaEsperada').value;
    const resultadoCompressao = document.querySelector('#resultCompressao');
    const resultadoConstante = document.querySelector('#resultConstante');
    const compressao_mm = CompriTotalMola - totalMolaCompri

    const constante = 400 / compressao_mm
    resultadoCompressao.innerHTML = `Compressão / mm: ${constante.toFixed(0)}`
    resultadoConstante.innerHTML = `Constante: ${compressao_mm}`

    return (compressao_mm)
}

// function laco1() {
//     for(let i = 0.1; i <= 2 ; i+=0.05){
//        console.log(i.toFixed(2))
//     }

// }
// laco1(1)

// function laco2(){
//     for(let i =2; i <=15; i+=0.5){
//         console.log(i)
//     }
// }
// laco2()

// function laco3(){
//     for(let i =1; i <=20; i+=0.1){
//         console.log(i.toFixed(1))
//     }
// }
// laco3()
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
    const potencia3 = espiraisUteis
    // =( 8200 * POTÊNCIA ( I23;4 )) / 8 / I24 / POTÊNCIA (I25;3)
    // resultado === constante do excel
    const resultado = (8200 * potencia) / 8 / potencia3 / potencia2
    constante2.innerHTML = `Constante: ${resultado.toFixed(3)}`
    console.log(espiraisUteis);
    const espiraisTotais = Number(espiraisUteis) + 2;
    nespiraisTotais.innerHTML = `Espirais totais: ${(espiraisTotais)}`;
    const compressao_mm = calculo();
    cargotota.innerHTML = `Carga esperada: ${(resultado * compressao_mm).toFixed(3)}`;
}


