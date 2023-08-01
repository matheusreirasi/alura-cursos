import { selector } from "recoil";
import { filtroDeEventosState, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({get}) => {
    const filtro = get(filtroDeEventosState)
    const todosEventos = get(listaDeEventosState)

    const eventos = todosEventos.filter(evento => {
      if (!filtro.data){
        return true
      }
  
      const ehMesmoDia = filtro.data.toISOString().slice(0,10) === evento.inicio.toISOString().slice(0,10)
      return ehMesmoDia
    })

    return eventos
  }
})


export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const responseHttp = await fetch('http://localhost:8080/eventos')
    const eventosJson : IEvento[] = await responseHttp.json()
    return eventosJson.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})


// Como eu quero fazer uma requisição que deriva de algum outro lugar eu posso usar o seletor do Recoil
// O selector do Recoil obrigatoriamente tem dois parâmetros: key e get. Na primeira constante foi utilizado outro get que é do próprio typescript e já no segundo foi utilizado uma função assíncrona pois é uma requisição http