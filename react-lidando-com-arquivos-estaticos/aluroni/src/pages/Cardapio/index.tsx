import { useState } from 'react'

import styles from "./Cardapio.module.scss"
import {ReactComponent as Logo} from "assets/logo.svg"
import { Buscador } from './Buscador'
import { Filtro } from './Filtro'
import { Ordenador } from './Ordenador'
import { Itens } from './Itens'

export const Cardapio = () => {
  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState("")

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código
        </div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>
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

