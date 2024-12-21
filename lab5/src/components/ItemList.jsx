import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../store/yourSlice';

const ItemList = () => {
  const items = useSelector(state => state.yourFeature.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdate = (item) => {
    const updatedItem = { ...item, name: item.name + ' (Updated)' };
    dispatch(updateItem(updatedItem));
  };

  return (
    <div>
      <h2>Список Елементів</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item)}>Оновити</button>
            <button onClick={() => handleRemove(item.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;