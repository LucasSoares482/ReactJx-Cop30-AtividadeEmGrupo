import React from 'react';

const products = [
  {
    id: 1,
    image: '../src/imagens/produto1.png',
    description: 'Ekos Murumuru: Hidratação profunda para pele e cabelos, com manteiga de murumuru.',
  },
  {
    id: 2,
    image: '../src/imagens/produto2.png',
    description: 'Ekos Castanha: Revitaliza e energiza os cabelos, com óleo de castanha',
  },
  {
    id: 3,
    image: '../src/imagens/produto3.png',
    description: 'Ekos Buriti: Ilumina a pele e os cabelos, com óleo de buriti.',
  },
  {
    id: 4,
    image: '../src/imagens/produto4.png',
    description: 'Esterco de galinha como fertilizante',
  },
  {
    id: 5,
    image: '../src/imagens/produto5.png',
    description: 'Humus de minhoca em um recipiente (fertilizante)',
  },
  {
    id: 6,
    image: '../src/imagens/produto6.png',
    description: 'Pó de leonardita (fertilizante)',
  },
  {
    id: 7,
    image: '../src/imagens/produto7.png',
    description: 'variedade de frutas e legumes orgânicos.',
  },
  {
    id: 8,
    image: '../src/imagens/produto8.png',
    description: 'grãos e leguminosas em um pote de vidro.',
  },
  {
    id: 9,
    image: '../src/imagens/produto9.png',
    description: 'Canudo de Bambu Reutilizável.',
  },
];

const textAreas = [
  'Produtos cometicos cruelty-free são aqueles que não foram testados em animais em nenhuma etapa de sua produção. Isso significa que desde a criação da fórmula até o produto final, nenhum animal foi submetido a testes para verificar a segurança ou eficácia do produto.',
  'A escolha entre fertilizantes ecológicos e não ecológicos depende de diversos fatores, como o tipo de cultivo, as características do solo e os objetivos do produtor. Os fertilizantes ecológicos oferecem uma alternativa mais sustentável e saudável, promovendo a saúde do solo e a qualidade dos alimentos. No entanto, os fertilizantes sintéticos ainda são amplamente utilizados devido à sua eficiência a curto prazo.',
  'Produtos alimentícios ecológicos são aqueles cultivados ou produzidos de forma natural, sem o uso de agrotóxicos, fertilizantes químicos e organismos geneticamente modificados (OGMs). Priorizam práticas agrícolas sustentáveis, que respeitam o meio ambiente e a saúde humana.',
];

const CatalogoDeProdutos = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Produto do Mês</h2>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            {(index + 1) % 3 === 1 && (
              <div
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#d0d0d0',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                <p>{textAreas[Math.floor((index + 1) / 3)]}</p>
              </div>
            )}
            <div
              style={{
                display: 'flex',
                border: '1px solid #ccc',
                padding: '10px',
                width: '30%',
                boxSizing: 'border-box',
                backgroundColor: '#e0e0e0',
                marginBottom: '20px',
              }}
            >
              <img
                src={product.image}
                alt={`Produto ${product.id}`}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  marginRight: '10px',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {product.description}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CatalogoDeProdutos;
