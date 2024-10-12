import React from 'react';
import './Banner.css'; // Importa o arquivo de estilos CSS

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Fitness starts with what you eat.</h1>
        <p>
          Take control of your goals. Track calories, break down ingredients, and log
          activities with MyFitnessPal.
        </p>
        <button className="btn">START FOR FREE</button>
      </div>
      <div className="banner-image">
        {/* Adicione sua imagem aqui, utilizando a sintaxe do React para importar imagens */}
        <img src="../src/imagens/blog1.png" alt="imagem do banner blog 1" />
      </div>
    </div>
  );
}

export default Banner;