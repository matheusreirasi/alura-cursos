import { useState } from 'react'

import styles from './Cardapio.module.scss'
import stylesTema from 'styles/Tema.module.scss'
import { Buscador } from './Buscador'
import { Filtro } from './Filtro'
import { Ordenador } from './Ordenador'
import { Itens } from './Itens'

const Cardapio = () => {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('')

  return (
    <main>

      <section className={styles.cardapio}>
        <h3 className={stylesTema.titulo}>
          Cardápio
        </h3>
        <Buscador
          busca={busca}
          setBusca={setBusca}
        />
        <div className={styles.cardapio__filtros}>
          <Filtro filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
      </section>

    </main>
  )
}

export default Cardapio