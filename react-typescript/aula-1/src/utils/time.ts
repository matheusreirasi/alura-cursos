const tempoParaSegundos = (tempo: string) => {
    const [horas="0", minutos="0", segundos="0"] = tempo.split(":")

    const horasEmSegundos = Number(horas) * 3600
    const minutosEmHoras = Number(minutos) * 60
    return horasEmSegundos + minutosEmHoras + Number(segundos)
}

export default tempoParaSegundos

//É necessário colocar um valor base para cada medida de tempo pois caso o usuário coloque somente segundos e minutos, o formato de horas será nulo