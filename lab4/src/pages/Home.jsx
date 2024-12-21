import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav style={{ padding: '1rem' }}>
        <h2>Головне Меню</h2>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li><Link to="/golden">Золота Тема</Link></li>
          <li><Link to="/light">Світла Тема</Link></li>
          <li><Link to="/dark">Темна Тема</Link></li>
          <li><Link to="/red">Червона Тема</Link></li>
        </ul>
      </nav>
      <h1>Головна сторінка</h1>
      <p>Ласкаво просимо до нашого додатку!</p>
    </div>
  );
};

export default Home;