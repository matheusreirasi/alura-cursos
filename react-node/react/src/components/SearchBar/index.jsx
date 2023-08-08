import { useEffect, useState } from "react";
import styled from "styled-components";
import { getLivros } from "../../services/livros";
import { postFavoritos } from "../../services/favoritos";
import livroImg from "../../assets/images/livro.png"

const SearchBarContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 100vh;
  width: 100%;
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid #fff;
  padding: 20px 140px;
  border-radius: 50px;
  width: 200px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
      width: 200px;
  }

  img {
      width: 100px;
  }

  &:hover {
      border: 1px solid white;
  }
`


const SearchBar = () => {
  const [userInput, setUserInput] = useState([]);
  const [livrosResponse, setLivrosResponse] = useState([])

  const fetchLivros = async () => {
    const livrosData = await getLivros()
    setLivrosResponse(livrosData)
  }

  const insertFavorito = async (id) => {
    await postFavoritos(id)
    alert("Livro favoritado com sucesso!")
  }

  useEffect(() => {
    fetchLivros()
  }, [livrosResponse])

  return (
    <SearchBarContainer>
      <Input
        placeholder="Digite seu livro..."
        // onBlur={evt => setUserInput(livros.filter(livro => livro.nome.includes(evt.target.value)))}
        onBlur={evt => {
          const texto = evt.target.value
          const pesquisa = livrosResponse.filter(livro => livro.nome.includes(texto))
          setUserInput(pesquisa)
        }}
      />
      {userInput.map((livro, index) => (
        <Result key= {index} onClick={() => insertFavorito(livro.id)}>
          <div>
            <img src={livroImg}/>
            <p>
              {livro.nome}
            </p>
          </div>
        </Result>
      ))}
      
    </SearchBarContainer>
  );
};

export default SearchBar;
