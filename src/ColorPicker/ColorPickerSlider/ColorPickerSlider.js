import ColorPickerSliderItem from './ColorPickerSliderItem/ColorPickerSliderItem';

import './ColorPickerSlider.css';

const RGB_RANGE = ['r', 'g', 'b'];

const ColorPickerSlider = () => {
  return (
    <div className="colorPickerSlider">
      {RGB_RANGE.map((colorName) => (
        <ColorPickerSliderItem key={colorName} colorName={colorName} />
      ))}
    </div>
  );
};

export default ColorPickerSlider;
