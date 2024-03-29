import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios from 'axios';
import IPaginacao  from '../../interfaces/IPaginacao';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [proxPagina, setProxPagina] = useState('')

  useEffect(()=>{
    axios.get<IPaginacao<IRestaurante>>("http://localhost:8000/api/v1/restaurantes/")
      .then(resp => {
        console.log(resp)
        setRestaurantes(resp.data.results)
        setProxPagina(resp.data.next)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const verMais = () => {
    axios.get<IPaginacao<IRestaurante>>(proxPagina)
    .then(resp => {
      console.log(resp)
      setRestaurantes([...restaurantes, ...resp.data.results])
      setProxPagina(resp.data.next)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {proxPagina && 
      <button onClick={verMais}>
        Ver mais...
      </button>
    }
  </section>)
}

export default ListaRestaurantes