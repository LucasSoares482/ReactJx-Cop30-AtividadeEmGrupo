import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#e0f7e0', // Verde leve
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    zIndex: '1000', // Garante que o footer esteja sobre outros elementos
  },
  text: {
    color: '#006400', // Verde escuro para contraste
    fontSize: '1.5em',
    whiteSpace: 'nowrap',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.text}>
        © 2024 EcoLoja. Todos os direitos reservados. Avenida Alcindo Cacela, 287, Belém-PA. CEP: 66060-902
      </div>
    </footer>
  );
};

export default Footer;
