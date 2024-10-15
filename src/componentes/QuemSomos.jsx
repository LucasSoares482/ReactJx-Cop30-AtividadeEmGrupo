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
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="../src/imagens/membro1.jpg" alt="Imagem 1" />
              </div>
              <div className="card-content">
                <p>Lucas Soares dos Santos 04117259</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="../src/imagens/membro2.jpg" alt="Imagem 2" />
              </div>
              <div className="card-content">
                <p>Caique Rabelo Neves 04105419</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="../src/imagens/membro3.jpg" alt="Imagem 3" />
              </div>
              <div className="card-content">
                <p>Paulo Sergio Monteiro Lopes Filho 04173731</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="../src/imagens/membro4.jpg" alt="Imagem 4" />
              </div>
              <div className="card-content">
                <p>Raimundo Nonato barroso felicio da silva 04162356</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="../src/imagens/membro5.jpg" alt="Imagem 5" />
              </div>
              <div className="card-content">
                <p>Raul Gabriel Carneiro Oliveira 04150573</p>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        Features Futuras!
        <hr />
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col s12 m5">
            <div className="card-panel teal">
              <span className="white-text"><strong><u>Seção de Blog:</u> Compartilhar artigos sobre sustentabilidade, dicas de vida ecológica e novidades da EcoLoja.</strong></span>
            </div>
          </div>
          <div className="col s12 m5">
            <div className="card-panel teal">
              <span className="white-text"><strong><u>Reviews de Clientes:</u> Permitir que clientes deixem feedback sobre os produtos ecológicos, promovendo confiança e transparência.</strong></span>
            </div>
          </div>
          <div className="col s12 m5">
            <div className="card-panel teal">
              <span className="white-text"><strong><u>Certificações e Transparência:</u> Mostrar claramente as certificações ecológicas dos produtos e os processos de fabricação.</strong></span>
            </div>
          </div>
          <div className="col s12 m5">
            <div className="card-panel teal">
              <span className="white-text"><strong><u>Marketplace de Troca:</u> Facilitar a troca de produtos entre clientes, promovendo a reutilização e a economia circular.</strong></span>
            </div>
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
};

export default QuemSomos;
