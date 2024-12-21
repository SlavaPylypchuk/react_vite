import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/yourSlice';

const AddItem = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), name };
    dispatch(addItem(newItem));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Назва Елементу"
        required
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddItem;