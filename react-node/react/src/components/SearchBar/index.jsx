import { useState } from "react";
import styled from "styled-components";
import { livros } from "../../data";

const SearchBarContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
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


const SearchBar = () => {
  const [userInput, setUserInput] = useState([]);

  return (
    <SearchBarContainer>
      <Input
        placeholder="Digite seu livro..."
        // onBlur={evt => setUserInput(livros.filter(livro => livro.nome.includes(evt.target.value)))}
        onBlur={evt => {
          const texto = evt.target.value
          const pesquisa = livros.filter(livro => livro.nome.includes(texto))
          setUserInput(pesquisa)
        }}
      />
      {userInput.map(livro => (
        <div key={livro.nome}>
          <img src={livro.src}/>
          <p>
            {livro.nome}
          </p>
        </div>
      ))}
      
    </SearchBarContainer>
  );
};

export default SearchBar;
