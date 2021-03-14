import './ColorPickerSliderItem.css';

const ColorPickerSliderItem = ({ colorName, colorValue, onColorValueChange }) => {
  return (
    <div className="colorPickerSliderItem">
      <fieldset className="colorPickerSliderItemFieldSet">
        <label htmlFor={colorName}>{colorName}</label>
        <input
          onChange={onColorValueChange(colorName)}
          type="range"
          min="0"
          max="255"
          id={colorName}
          step="1"
          value={colorValue || 0}
        ></input>
      </fieldset>
    </div>
  );
};

export default ColorPickerSliderItem;
