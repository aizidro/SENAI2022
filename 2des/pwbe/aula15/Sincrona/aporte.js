aportes = [
    { mes: 'Janeiro', aporte:500, juros: 0.001 },
    { mes: 'Fevereiro', aporte:300, juros: 0.003 },
    { mes: 'Março', aporte:250, juros: 0.005 },
    { mes: 'Abril', aporte:300, juros: 0.01 },
    { mes: 'Maio', aporte:100, juros: 0.007 },
    { mes: 'Junho', aporte:0, juros: 0.005 },
    { mes: 'Julho', aporte:0, juros: 0.003 },
    { mes: 'Agosto', aporte:300, juros: 0.008 },
    { mes: 'Setembro', aporte:400, juros: 0.011 },
    { mes: 'Outubro', aporte:200, juros: 0.01 },
];

async function calcRendimento(){
    for(let i = 0; i < aportes.length; i++){
        await calc(aportes[i])
    }
}

function calc (dado){
    return new Promise(res=>{
        setTimeout(()=>{
            const montante = dado.aporte+(dado.aporte*dado.juros)
            console.log(`mes:${dado.mes}-total:${montante.toFixed(2)}`)
            res()
        },1000)
    })
}
calcRendimento()