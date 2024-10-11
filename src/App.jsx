import React from 'react';
import Header from './componentes/Header';
import TituloProblema from './componentes/TituloProblema';
import FeatureMembro from './componentes/FeatureMembro';
import ProductCatalog from './componentes/ProductCatalog';

function App() {
  return (
    <div>
      <Header /><br /><br /><br /><br />
      <TituloProblema /><br /><br /><br />
      <ProductCatalog/><br /><br /><br />
      <FeatureMembro/><br /><br /><br />
      {/* Outros componentes ou conteúdo aqui */}
    </div>
  );
}

export default App;
