import logo from "../../assets/images/logo.svg";
import "./style.css";
import perfil from '../../assets/images/perfil.svg'
import sacola from '../../assets/images/sacola.svg'
import styled from "styled-components";


const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <p>
          <strong>Alura</strong>Books
        </p>
      </div>

      <ul className="opcoes">
        {opcoes.map((opcao) => (
          <li key={opcao} className="opcao">
            {opcao}
          </li>
        ))}
      </ul>

      <ul className="icones">
        {icones.map((icone) => (
          <li key={icone} className="icone">
            <img src={icone} />
          </li>
        ))}
      </ul>
    </HeaderContainer>
  );
};

export default Header;
