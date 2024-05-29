const dias = document.querySelector('#dias');
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const lancamento = '22 jan 2025'

function counter() {
    //PARA TRANSFORMAR UMA STRING EM DATA USAMOS O " Date "
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    //SEGUNDOS
    //Math.floor PEGA O MENOR NÚMERO INTEIRO DO RESULTADO
    const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dias.innerHTML = finalDias
    horas.innerHTML = formatarTempo(finalHoras)
    minutos.innerHTML = formatarTempo(finalMinutos)
    segundos.innerHTML = formatarTempo(finalSegundos)
}

function formatarTempo( tempo ) {
    return tempo < 10? `0${tempo}` : tempo;
}

counter();
//O setInterval, serve para atualizar a página assim que o intervalo definido chegar
setInterval(counter, 1000)