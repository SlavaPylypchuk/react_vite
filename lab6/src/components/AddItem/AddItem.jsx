import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/itemsSlice';
import useToggle from '../../hooks/useToggle';

const AddItem = () => {
  const [name, setName] = useState('');
  const [isVisible, toggleVisibility] = useToggle(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { id: Date.now(), name };
    dispatch(addItem(newItem));
    setName('');
    toggleVisibility();
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{isVisible ? 'Сховати Форму' : 'Додати Елемент'}</button>
      {isVisible && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Назва Елементу"
            required
          />
          <button type="submit">Додати</button>
        </form>
      )}
    </div>
  );
};

export default AddItem;