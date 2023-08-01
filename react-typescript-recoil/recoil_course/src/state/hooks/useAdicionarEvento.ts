import { useSetRecoilState } from "recoil"
import {listaDeEventosState} from "../atom"
import { IEvento } from "../../interfaces/IEvento"
import obterId from "../../utils"

const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento []>(listaDeEventosState)

  return (evento: IEvento) => {
    if (evento.inicio < new Date()) {
      throw new Error("Não é possível adicionar datas passadas.")
    }
    evento.id = obterId()
    return setListaEventos(listaAntiga => [...listaAntiga, evento])
  }
}

export default useAdicionarEvento