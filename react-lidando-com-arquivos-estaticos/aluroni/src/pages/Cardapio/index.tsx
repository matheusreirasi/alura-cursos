import React from 'react'
import styles from "./Cardapio.module.scss"
import {ReactComponent as Logo} from "assets/logo.svg"
import { Buscador } from './Buscador'
import { useState } from 'react'
import { Filtro } from './Filtro'

export const Cardapio = () => {
  const [busca, setBusca] = useState("")

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
          <Filtro />
        </div>
      </section>

    </main>
  )
}

