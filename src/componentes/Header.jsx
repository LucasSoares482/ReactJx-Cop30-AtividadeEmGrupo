import React from 'react';

const styles = {
  header: {
    backgroundColor: '#e0f7e0', // Verde leve
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    width: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    zIndex: '1000', // Garante que o header esteja sobre os cards
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#006400', // Verde escuro para contraste
    fontSize: '1.5em',
    whiteSpace: 'nowrap',
    marginRight: '10px',
  },
  image: {
    width: '30px',
    height: '30px',
  },
  link: {
    color: '#006400', // Verde escuro para contraste
    textDecoration: 'none',
    fontSize: '1.5em',
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.textContainer}>
        <div style={styles.text}>
          EcoLoja
        </div>
        <img src="../Plants.png" alt="Logo" style={styles.image} />
      </div>
      <a href="/login" style={styles.link}>
        Login de Usuário
      </a>
    </header>
  );
};

export default Header;
