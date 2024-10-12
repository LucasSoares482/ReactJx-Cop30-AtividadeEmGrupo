import React from 'react';
import Header from './componentes/Header';
import TituloProblema from './componentes/TituloProblema';
import FeatureMembro from './componentes/FeatureMembro';
import ProductCatalog from './componentes/ProductCatalog';
import Cop30 from './componentes/Cop30';
import Banner from './componentes/Banner';

function App() {
  return (
    <div>
      <Header /><br /><br /><br /><br />
      <TituloProblema /><br /><br /><br />
      <FeatureMembro/><br /><br /><br />
      <Cop30/><br /><br /><br /><br />
      <ProductCatalog/><br /><br /><br />
      <Banner /><br /><br />
      {/* Outros componentes ou conteúdo aqui */}
    </div>
  );
}

export default App;
