import './ColorPickerItem.css';

const ColorPickerItem = ({ colorName, onColorClick }) => {
  return (
    <div className="colorPickerItem" onClick={onColorClick(colorName)}>
      <div>{colorName}</div>
      <div className="square" style={{ backgroundColor: colorName }}></div>
    </div>
  );
};

export default ColorPickerItem;
