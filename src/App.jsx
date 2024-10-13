import React from 'react';
import Header from './componentes/Header';
import EcoLoja from './componentes/EcoLoja';
import QuemSomos from './componentes/QuemSomos';
import CatalogoDeProdutos from './componentes/CatalogoDeProdutos';
import Cop30NossoSite from './componentes/Cop30NossoSite';
import Banner from './componentes/Banner';
import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <div>
      <Header /><br /><br /><br />
      <Cop30NossoSite/><br /><br />
      <QuemSomos/><br /><br /><br />
      <EcoLoja /><br /><br /><br />
      <CatalogoDeProdutos/>
      <Banner /><br /><br />
      {/* Outros componentes ou conteúdo aqui */}
    </div>
  );
}

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const BouncingDiv = styled.div`
  display: inline-block;
  padding: 20px;
  background-color: #61dafb;
  border-radius: 5px;
  animation: ${bounce} 2s infinite;
`;

function App() {
  return (
    <div className="App">
      <BouncingDiv>Salte!</BouncingDiv>
    </div>
  );
}

export default App;
