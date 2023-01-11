import filtros from "./filtro.json"
import styles from "./Filtro.module.scss"

type IOpcao = typeof filtros[0]//Uma alternativa ao interface

export const Filtro = () => {

    const selecionarFiltro = (opcao: IOpcao) => {

    }

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
  )
}
