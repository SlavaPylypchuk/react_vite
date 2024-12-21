import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../../store/slices/itemsSlice';
import Item from './Item';

const ItemList = () => {
  const items = useSelector(state => state.items.items);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeItem(id));
  };

  const handleUpdate = item => {
    const updatedItem = { ...item, name: `${item.name} (Updated)` };
    dispatch(updateItem(updatedItem));
  };

  return (
    <div>
      <h2>Список Елементів</h2>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} onUpdate={handleUpdate} onRemove={handleRemove} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;