import React from 'react';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';
import useListaEventos from '../../state/hooks/useListaEventos';

const ListaDeEventos: React.FC = () => {

  const eventos = useListaEventos()
  // const eventosFiltrados = useRecoilValue<IFiltroEvento>(filtroDeEventosState)

  // const eventos = todosEventos.filter(evento => {
  //   if (!eventosFiltrados.data){
  //     return true
  //   }

  //   const ehMesmoDia = eventosFiltrados.data.toISOString().slice(0,10) === evento.inicio.toISOString().slice(0,10)
  //   return ehMesmoDia
  // })

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map(evento => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  )
}

export default ListaDeEventos

// Como a ideia desse curso é sempre ter os componentes o mais puro possível, sem qualquer tipo de arquivo relacionado a Recoil para fazer tratamento de estados foi removido o código que faz a filtragem de eventos e inserido no arquivo na pasta state/selectors