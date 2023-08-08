import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import Favoritos from './routes/Favoritos.jsx'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index.jsx'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/categorias' element={<p> CATEGORIAS </p>}/>
        <Route path='/favoritos' element={ <Favoritos /> }/>
        <Route path='/estante' element={<p> MINHA ESTANTE</p>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
