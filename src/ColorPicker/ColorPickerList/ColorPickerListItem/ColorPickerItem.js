import { useContext } from 'react';
import { ContextApp } from '../../reducer';

import './ColorPickerItem.css';

const ColorPickerItem = ({ color }) => {
  const { onColorClick } = useContext(ContextApp);

  return (
    <div className="colorPickerItem" onClick={() => onColorClick(color)}>
      <div>{color}</div>
      <div className="square" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorPickerItem;
