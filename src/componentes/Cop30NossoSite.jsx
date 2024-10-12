import React from 'react';

const Cop30NossoSite = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.cop30Title}>Cop30 e nosso site</h2>
      <div style={styles.greenBox}>
        <p style={styles.greenBoxText}>As Conferências das Partes (COPs) são eventos cruciais para a discussão e implementação de políticas globais relacionadas às mudanças climáticas. Para a EcoLoja, que se posiciona como um negócio comprometido com a sustentabilidade, acompanhar e participar indiretamente desses eventos é fundamental por diversos motivos</p>
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
  cop30Title: {
    color: '#004d00',
    fontSize: '20px',
    marginBottom: '10px',
  },
  greenBox: {
    backgroundColor: '#4da64d',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
  },
  greenBoxText: {
    color: 'white',
    textAlign: 'center',
  },
};

export default Cop30NossoSite;
