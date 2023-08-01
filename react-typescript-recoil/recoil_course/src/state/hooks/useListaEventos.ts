import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../selector"

const useListaEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaEventos