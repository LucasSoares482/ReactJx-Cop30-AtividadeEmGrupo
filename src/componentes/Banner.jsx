import React from 'react';
import './Banner.css'; // Importa o arquivo de estilos CSS

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">    
        <center><h1>Unidos pela sustentabilidade, construindo um futuro melhor.</h1></center>
        <center><p>
        Na Cop30, acreditamos que o caminho para um futuro mais sustentável começa com a união de esforços de indivíduos, comunidades e empresas.<br></br> "Unidos pela sustentabilidade" não é apenas um slogan, é um chamado à ação. Cada escolha que fazemos, cada produto que oferecemos e cada iniciativa que apoiamos<br></br> é um passo em direção a um planeta mais saudável e equilibrado.
        </p></center>
        <center><button className="btn">Comece agora!</button></center>
      </div>
      <br></br>
      <div className="banner-image">
        {/* Adicione sua imagem aqui, utilizando a sintaxe do React para importar imagens */}
        <center><img src="../src/imagens/blog1.png" alt="imagem do banner blog 1" /></center>
      </div>
    </div>
    
  );
}

export default Banner;