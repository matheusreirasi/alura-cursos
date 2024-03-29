import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipantes = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    const lista = useRecoilValue(listaParticipantesState)
    
    const setErro = useSetRecoilState(erroState)

    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos')
            setTimeout(() => {
                setErro("")

            }, 4000)
            return
        }
        setLista(listaAtual => [...listaAtual, nomeDoParticipante])

    }
}

//isso é um hook customizado