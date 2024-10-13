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
            <img src="../src/imagens/Membro 1.jpeg" alt="Membro 1" style={styles.image} />
            <p style={styles.text}>Lucas Soares dos Santos<br></br>
            Matrícula: 04117259</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/Membro 2.jpeg" alt="Membro 2" style={styles.image} />
            <p style={styles.text}>Caique Rabelo Neves<br></br>
            Matrícula: 04105419</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/Membro 3.jpeg" alt="Membro 3" style={styles.image} />
            <p style={styles.text}>Paulo Sérgio Monteiro<br></br>
            Matrícula: 04173771</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/Membro 4.jpeg" alt="Membro 4" style={styles.image} />
            <p style={styles.text}>Raimundo Nonato Barroso<br></br>
            Matrícula: 04162356</p>
          </div>
          <div style={styles.square}>
            <img src="../src/imagens/Membro 5.jpeg" alt="Membro 5" style={styles.image} />
            <p style={styles.text}>Raul Gabriel Carneiro<br></br>
            Matrícula: 04150573</p>
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
    padding: '10px',
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
