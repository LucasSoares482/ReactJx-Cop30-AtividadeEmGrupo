import React from 'react';

const EcoLoja = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>EcoLoja</h1>
      <div style={styles.explanation}>
        Na <strong>EcoLoja</strong>, acreditamos que é possível viver de maneira sustentável sem abrir mão da qualidade e do conforto. Nosso site é dedicado à venda de produtos ecológicos e sustentáveis, cuidadosamente selecionados para garantir que cada item oferecido não agrida o meio ambiente.
      </div>
      <div style={styles.problem}>
        O que procuramos solucionar?
        <div className="row">
          <div className="col s12 m6 l3">
            <div className="card small">
              <div className="card-image">
                <img src="../src/imagens/imagem1.png" alt="Imagem 1" style={styles.image}/>
                <span className="card-title" style={styles.cardTitle}>Resíduos</span>
                <a className="btn-floating btn-medium halfway-fab waves-effect waves-light red" style={styles.floatingBtn}><i className="material-icons">eco</i></a>
              </div>
              <div className="card-content">
                <p>Redução de Resíduos poluentes.</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l3">
            <div className="card small">
              <div className="card-image">
                <img src="../src/imagens/imagem2.png" alt="Imagem 2" style={styles.image}/>
                <span className="card-title" style={styles.cardTitle}>Poluição</span>
                <a className="btn-floating btn-medium halfway-fab waves-effect waves-light red" style={styles.floatingBtn}><i className="material-icons">eco</i></a>
              </div>
              <div className="card-content">
                <p>Diminuição da Poluição</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l3">
            <div className="card small">
              <div className="card-image">
                <img src="../src/imagens/imagem3.png" alt="Imagem 3" style={styles.image}/>
                <span className="card-title" style={styles.cardTitle}>Conservação de Recursos</span>
                <a className="btn-floating btn-medium halfway-fab waves-effect waves-light red" style={styles.floatingBtn}><i className="material-icons">eco</i></a>
              </div>
              <div className="card-content">
                <p>Conservação de Recursos Naturais</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l3">
            <div className="card small">
              <div className="card-image">
                <img src="../src/imagens/imagem4.png" alt="Imagem 4" style={styles.image}/>
                <span className="card-title" style={styles.cardTitle}>Educação</span>
                <a className="btn-floating btn-medium halfway-fab waves-effect waves-light red" style={styles.floatingBtn}><i className="material-icons">eco</i></a>
              </div>
              <div className="card-content">
                <p>Educação e Conscientização</p>
              </div>
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
  image: {
    width: '100%',
    height: 'auto',
  },
  floatingBtn: {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
  },
  cardTitle: {
    color: '#ffffff', // Cor branca para melhor contraste
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Sombra para destacar o texto
  },
};

export default EcoLoja;
