import styles from './NotFound.module.scss'
import stylesTema from 'styles/Tema.module.scss'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'
import classNames from 'classnames'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  )
}

export default NotFound