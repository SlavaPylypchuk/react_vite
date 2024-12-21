import React from 'react';
import PropTypes from 'prop-types';

const Item = React.memo(({ item, onUpdate, onRemove }) => {
  return (
    <li>
      {item.name}
      <button onClick={() => onUpdate(item)}>Оновити</button>
      <button onClick={() => onRemove(item.id)}>Видалити</button>
    </li>
  );
});

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Item;