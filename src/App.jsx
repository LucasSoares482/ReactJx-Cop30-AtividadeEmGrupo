import React from 'react';
import Header from './componentes/Header';
import EcoLoja from './componentes/EcoLoja';
import QuemSomos from './componentes/QuemSomos';
import CatalogoDeProdutos from './componentes/CatalogoDeProdutos';
import Cop30NossoSite from './componentes/Cop30NossoSite';
import Banner from './componentes/Banner';

function App() {
  return (
    <div>
      <Header /><br /><br /><br />
      <h1>Branch Lucas</h1>
      <Cop30NossoSite/><br /><br />
      <QuemSomos/><br /><br /><br />
      <EcoLoja /><br /><br /><br />
      <CatalogoDeProdutos/>
      <Banner /><br /><br />
      {/* Outros componentes ou conteúdo aqui */}
    </div>
  );
}

export default App;
