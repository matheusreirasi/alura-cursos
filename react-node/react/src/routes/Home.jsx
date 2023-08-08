import styled from 'styled-components'
import SearchBar from '../components/SearchBar'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`


function Home() {

  return (
    <AppContainer>
      <SearchBar />
    </AppContainer>
  )
}

export default Home