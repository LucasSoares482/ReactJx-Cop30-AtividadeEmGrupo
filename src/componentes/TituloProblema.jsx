import React from 'react';

const TituloProblema = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>EcoLoja</h1>
      <div style={styles.explanation}>
        Na <strong>EcoLoja</strong>, acreditamos que é possível viver de maneira sustentável sem abrir mão da qualidade e do conforto. Nosso site é dedicado à venda de produtos ecológicos e sustentáveis, cuidadosamente selecionados para garantir que cada item oferecido não agrida o meio ambiente.
      </div>
      <div style={styles.problem}>
        O que procuramos solucionar?
        <div style={styles.squaresContainer}>
          <div style={styles.square}>
            <img src="../src/imagens/imagem1.png" alt="Imagem 1" style={styles.image} />
            <p style={styles.text}>Redução de Resíduos</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/imagem2.png" alt="Imagem 2" style={styles.image} />
            <p style={styles.text}>Diminuição da Poluição</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/imagem3.png" alt="Imagem 3" style={styles.image} />
            <p style={styles.text}>Conservação de Recursos Naturais</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/imagem4.png" alt="Imagem 4" style={styles.image} />
            <p style={styles.text}>Educação e Conscientização</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e0f2e9',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    margin: '0 auto',
  },
  title: {
    color: '#004d00',
    fontSize: '24px',
    marginBottom: '20px',
  },
  explanation: {
    backgroundColor: '#b3e6b3',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  problem: {
    backgroundColor: '#80cc80',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  squaresContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  square: {
    backgroundColor: '#4da64d',
    width: '100px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    padding: '10px',
  },
  image: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
};

export default TituloProblema;
