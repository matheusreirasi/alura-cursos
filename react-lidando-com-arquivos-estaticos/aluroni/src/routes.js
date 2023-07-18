import Footer from 'components/Footer'
import Menu from 'components/Menu'
import PaginaPadrao from 'components/PaginaPadrao'
import Cardapio from 'pages/Cardapio'
import Inicio from 'pages/Inicio'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'
import Sobre from 'pages/Sobre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRouter = ()=> {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio />}/>
            <Route path='sobre' element={<Sobre/>}/>
            <Route path='prato/:id' element={<Prato />}/>
          </Route>
          <Route path='*' element={ <NotFound /> }/>
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default AppRouter


//Como a rota padrão tem barra não é necessário colocar outra barra na rota de cardápio pois a rota de cardápio concatena sua rota pai com a própria rota. O path da rota interna de cardápio é relativa a rota pai.
//O nome disso é nested routes