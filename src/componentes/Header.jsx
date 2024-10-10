import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>EcoLoja</div>
      <a href="#" style={styles.login}>Login de Usuario</a>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ccffcc', // Verde claro
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1000, // Para garantir que o header fique acima de outros elementos
  },
  logo: {
    color: '#006400', // Verde
    fontSize: '24px',
    fontWeight: 'bold',
  },
  login: {
    color: '#006400', // Verde
    fontSize: '18px',
    textDecoration: 'none', // Sem sublinhado
  },
};

export default Header;
