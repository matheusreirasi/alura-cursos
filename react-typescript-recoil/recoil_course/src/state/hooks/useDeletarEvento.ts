import { useSetRecoilState } from "recoil"
import {listaDeEventosState} from "../atom"
import { IEvento } from "../../interfaces/IEvento"


const useDeletarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento []>(listaDeEventosState)

  return (evento: IEvento) => {
    setListaEventos(listaAntiga => [...listaAntiga.filter(evt => evento.id !== evt.id)])
  }
}

export default useDeletarEvento