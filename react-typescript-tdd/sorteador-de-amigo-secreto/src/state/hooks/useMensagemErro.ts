import { useRecoilValue } from "recoil";
import { erroState } from "../atom";

export const useMensagemErro = () => {
    return useRecoilValue(erroState)
}