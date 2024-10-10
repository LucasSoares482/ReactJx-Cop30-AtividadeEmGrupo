import React from 'react';

const TituloProblema = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e0f2e9',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    margin: '0 auto'
  };

  const titleStyle = {
    color: '#004d00',
    fontSize: '24px',
    marginBottom: '20px'
  };

  const explanationStyle = {
    backgroundColor: '#b3e6b3',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const problemStyle = {
    backgroundColor: '#80cc80',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const squaresContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px'
  };

  const squareStyle = {
    backgroundColor: '#4da64d',
    width: '100px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    padding: '10px'
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    marginBottom: '10px'
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>EcoLoja</h1>
      <div style={explanationStyle}>Na <strong>EcoLoja</strong>, acreditamos que é possível viver de maneira sustentável sem abrir mão da qualidade e do conforto. Nosso site é dedicado à venda de produtos ecológicos e sustentáveis, cuidadosamente selecionados para garantir que cada item oferecido não agrida o meio ambiente.</div>
      <div style={problemStyle}>
        Oque procuramos solucionar?
        <div style={squaresContainerStyle}>
          <div style={squareStyle}>
            <img src="imagem1.png" alt="Imagem 1" style={imageStyle} />
            <p style={textStyle}>Redução de Resíduos</p>
          </div>
          <div style={squareStyle}>
            <img src="imagem2.png" alt="Imagem 2" style={imageStyle} />
            <p style={textStyle}>Texto 2</p>
          </div>
          <div style={squareStyle}>
            <img src="imagem3.png" alt="Imagem 3" style={imageStyle} />
            <p style={textStyle}>Texto 3</p>
          </div>
          <div style={squareStyle}>
            <img src="imagem4.png" alt="Imagem 4" style={imageStyle} />
            <p style={textStyle}>Texto 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TituloProblema;
