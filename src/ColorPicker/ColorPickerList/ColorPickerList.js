import { useContext } from 'react';
import { ContextApp } from '../reducer';

import ColorPickerItem from './ColorPickerListItem/ColorPickerItem';

import './ColorPickerList.css';

const ColorPickerList = () => {
  const { colors } = useContext(ContextApp);

  return (
    <div className="colorPickerlist">
      {colors.map((color) => (
        <ColorPickerItem key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorPickerList;
