import ColorPickerItem from './ColorPickerListItem/ColorPickerItem';

import './ColorPickerList.css';

const ColorPickerList = ({ colors, onColorClick }) => {
  return (
    <div className="colorPickerlist">
      {colors.map((colorName) => (
        <ColorPickerItem key={colorName} colorName={colorName} onColorClick={onColorClick} />
      ))}
    </div>
  );
};

export default ColorPickerList;
