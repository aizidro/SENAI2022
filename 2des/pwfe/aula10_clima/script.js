let sdlocais = document.querySelector("#locais")
let sdclima = document.querySelector("#clima")
let chuva = document.querySelector("#chuva")
let umidade = document.querySelector("#umidade")
let vento = document.querySelector("#vento")

api.get('/current.json?key=f78ba735e98c4112a74115818231004&q=Jaguariuna&lang=pt')
    .then(resp => {

        console.log(resp.data)
        // criamos um paragrafo que mostra o nome da cidade e o horario
        var cidade = document.createElement("p")
        let condicao = document.createElement("p")
        cidade.innerHTML = `${resp.data.location.name}, ${getHorario(resp.data.location)}`
        condicao.innerHTML = resp.data.current.condition.text;
        chuva.innerHTML = `chuva: ${resp.data.current.precip_in}%`;                                                                                                              
        umidade.innerHTML = `Umidade: ${resp.data.current.humidity}%`;                                                                                                              
        vento.innerHTML = `vento: ${resp.data.current.wind_mph}KM/H`;                                                                                                              
        sdlocais.appendChild(cidade) 
        sdlocais.appendChild(condicao)

        // Criamos um paragrafo e colocamos o estado do clima sol, nublado...
        let clima = document.querySelector('#temperatura')
        clima.innerHTML = ` ${resp.data.current.temp_c}°C` // resp = informa muitas informaçoes por isso utilizamos o . e a informação que queremos, ex .data.current

    })

// Separa a data do horario e retorna apenas o horario, pois as informaçoes que pegamaos da API vem junto a data e o horario
function getHorario(data) {
    let horario = data.localtime.split(" ", 2)
    return horario[1]
}
