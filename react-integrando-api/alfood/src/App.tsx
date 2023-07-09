import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdminRestaurantes from './paginas/Admin/Restaurantes/AdminRestaurantes'
import FormRestaurantes from './paginas/Admin/Restaurantes/FormRestaurantes';
import PaginaBaseAdmin from './paginas/Admin/PaginaBaseAdmin';
import AdminPratos from './paginas/Admin/Pratos/AdminPratos';
import FormPratos from './paginas/Admin/Pratos/FormPratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='/admin' element={<PaginaBaseAdmin/>}>
        <Route path='restaurantes' element={<AdminRestaurantes />}/>
        <Route path='restaurantes/novo' element={<FormRestaurantes />}/>
        <Route path='restaurantes/:id' element={<FormRestaurantes />}/>

        <Route path='pratos' element={<AdminPratos/>}/>
        <Route path='pratos/novo' element={<FormPratos/>}/>
      </Route>

    </Routes>
  );
}

export default App;

// Não sei o porque mas somente funcionou quando eu removei a primeira barra do caminho da url das rotas filhas