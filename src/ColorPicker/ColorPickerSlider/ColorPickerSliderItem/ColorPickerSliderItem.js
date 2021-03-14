import './ColorPickerSliderItem.css';

const ColorPickerSliderItem = ({ colorName, colorValue }) => {
  return (
    <div className="colorPickerSliderItem">
      <fieldset className="colorPickerSliderItemFieldSet">
        <label htmlFor={colorName}>{colorName}</label>
        <input onChange={(e) => console.log(e.target.value)} type="range" min="0" max="255" id={colorName} step="1" value={colorValue || 0}></input>
      </fieldset>
    </div>
  );
};

export default ColorPickerSliderItem;
