import React from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div>
      <h1>Мій SPA Застосунок</h1>
      <AddItem />
      <ItemList />
    </div>
  );
};

export default App;