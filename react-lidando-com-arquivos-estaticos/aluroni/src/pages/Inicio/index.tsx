import { useNavigate } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import styles from './Inicio.module.scss'
import stylesTema from 'styles/Tema.module.scss'
import nossaCasa from 'assets/images/nossa_casa.png'
import { Prato } from 'types'

const Inicio = () => {
  let pratosRecomendados = [...cardapio]
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3)

  const navigate = useNavigate()

  const redirecionarParaDetalhes = (prato: Prato) => {
    navigate(`/prato/${prato.id}`, {state: {prato}, replace: true})
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {
          pratosRecomendados.map(item => (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <div className={styles.recomendado__botao} onClick={() => redirecionarParaDetalhes(item)}>
                Ver mais
              </div>
            </div>
          ))
        }
      </div>
      <h3 className={stylesTema.titulo}>
        Nossa casa
      </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='Casa do Aluroni'/>
        <div className={styles.nossaCasa__endereco}>
          Rua vergueiro, 3185 <br/> <br/> Vila Mariarana, SP
        </div>
      </div>
    </section>
  )
}

export default Inicio

//Foi usado spread operator em pratosRecomendados porque se eu jogar diretamente o arquivo de cardápio na variável, qualquer alteração nessa variável afetará o arquivo de cardápio. O spread operator cria outra instância do arquivo e as alterações não afetam o arquivo original.