AOS.init();


const dataDoEvento = new Date('Jul 12, 2023, 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteoEvento = timeStampDoEvento - timeStampAtual;

    if(distanciaAteoEvento <= 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "O evento já terminou!";
        return;
    }

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaAteoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteoEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteoEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteoEvento % minutosEmMs) / segundosEmMs);

    console.log(`Evento em: ${diasAteOEvento} dias, ${horasAteOEvento} horas, ${minutosAteOEvento} minutos, ${segundosAteOEvento} segundos`);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
}, 1000);
