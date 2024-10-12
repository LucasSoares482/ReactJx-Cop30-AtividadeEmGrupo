import React from 'react';

const QuemSomos = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quem somos?</h1>
      <div style={styles.explanation}>
        Somos estudantes da <strong>Unama</strong>. Estamos participando do projeto Cop30 para desenvolver ideias inovadoras em prol da preservação de nosso ambiente amazônico.
      </div>
      <div style={styles.problem}>
        Nossa Equipe
        <hr />
        <div style={styles.squaresContainer}>
          <div style={styles.square}>
            <img src="../src/imagens/memebro1.png" alt="Imagem 1" style={styles.image} />
            <p style={styles.text}>Colocar nome e matrícula do membro</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/memebro2.png" alt="Imagem 2" style={styles.image} />
            <p style={styles.text}>Colocar nome e matrícula do membro</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/memebro3.png" alt="Imagem 3" style={styles.image} />
            <p style={styles.text}>Colocar nome e matrícula do membro</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/memebro4.png" alt="Imagem 4" style={styles.image} />
            <p style={styles.text}>Colocar nome e matrícula do membro</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/memebro5.png" alt="Imagem 4" style={styles.image} />
            <p style={styles.text}>Colocar nome e matrícula do membro</p>
          </div>
        </div>
        <br /><br />
        Features Futuras!
        <hr />
        <div style={styles.squaresContainer}>
          <div style={styles.square}>
            <p style={styles.text}><strong><u>Seção de Blog:</u>Compartilhar artigos sobre sustentabilidade, dicas de vida ecológica e novidades da EcoLoja.</strong></p>
          </div>
          <div style={styles.square}>
            <p style={styles.text}><strong><u>Reviews de Clientes:</u> Permitir que clientes deixem feedback sobre os produtos ecológicos, promovendo confiança e transparência.</strong></p>
          </div>
          <div style={styles.square}>
            <p style={styles.text}><strong><u>Certificações e Transparência:</u> Mostrar claramente as certificações ecológicas dos produtos e os processos de fabricação.</strong></p>
          </div>
          <div style={styles.square}>
            <p style={styles.text}><strong><u>Marketplace de Troca:</u> Facilitar a troca de produtos entre clientes, promovendo a reutilização e a economia circular.</strong></p>
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
    width: '200px',
    height: '200px',
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
    color: '#ffffff',
    textAlign: 'center',
  },
};

export default QuemSomos;
