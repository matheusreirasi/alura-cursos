import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEvento } from "../interfaces/IFiltroEvento";
import { eventosAsync } from "./selector";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync,
});

export const filtroDeEventosState = atom<IFiltroEvento>({
  key: 'filtroDeEventosState',
  default: {}
})
