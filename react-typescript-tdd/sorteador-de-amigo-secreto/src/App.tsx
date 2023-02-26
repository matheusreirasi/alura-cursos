import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Configuracao } from './pages/Configuracao';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao/>} />

        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

//qlqr componente dentro do RecoilRoot terá acesso ao estado que for criado