import React from 'react';
import AddItem from './components/AddItem/AddItem';
import ItemList from './components/Item/ItemList';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Мій SPA Застосунок</h1>
      <AddItem />
      <ItemList />
    </div>
  );
};

export default App;