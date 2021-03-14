import ColorPickerSliderItem from './ColorPickerSliderItem/ColorPickerSliderItem';

import './ColorPickerSlider.css';

const ColorPickerSlider = ({ colorsObject, onColorReset, onColorAccept, onColorValueChange }) => {
  return (
    <div className="colorPickerSlider">
      {Object.keys(colorsObject).map((colorName) => (
        <ColorPickerSliderItem
          key={colorName}
          onColorValueChange={onColorValueChange}
          colorName={colorName}
          colorValue={colorsObject[colorName]}
        />
      ))}
      <div className="colorPickerActions">
        <div onClick={onColorReset}>Cancel</div>
        <div onClick={onColorAccept}>Ok</div>
      </div>
    </div>
  );
};

export default ColorPickerSlider;
