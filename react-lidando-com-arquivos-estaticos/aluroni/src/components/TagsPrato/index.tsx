import styles from './TagsPrato.module.scss'
import { Prato } from 'types'

const TagsPrato = ({ price, serving, size, category}: Prato) => {
  return(
    <div className={styles.tags}>
      <div className={`
                ${styles.tags__tipo}
                ${styles[`tags__tipo__${category.label.toLowerCase()}`]}
                `}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>
                R$ {price.toFixed(2)}
      </div>
    </div>
  )
}

export default TagsPrato