import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { deleteFavoritos, getFavoritos } from '../services/favoritos'
import livroImg from "../assets/images/livro.png"

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;

    p {
        width: 200px;
        color: #FFF;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  const fetchFavoritos = async () => {
    const favoritosData = await getFavoritos()
    setFavoritos(favoritosData)
  }

  const removerFavorito = async (id) => {
    await deleteFavoritos(id)
    await fetchFavoritos()
    alert("Livro deletado com sucesso!")
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <ResultContainer>
        {favoritos.map((favorito, index) => (
          <Result key={index} onClick={() => removerFavorito(favorito.id)}>
            <img src={livroImg} alt='Livro'/>
            <p>
              {favorito.nome}
            </p>
          </Result>
        ))}
      </ResultContainer>
    </AppContainer>
  )
}

export default Favoritos

// Foi utilizado await fetchFavoritos para a página ser atualizada após a deleção de um favorito.