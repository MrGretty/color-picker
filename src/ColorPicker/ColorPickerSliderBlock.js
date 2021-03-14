import { useEffect, useState } from 'react';

import ColorPickerSlider from './ColorPickerSlider/ColorPickerSlider';

import useOutSideClick from '../hooks/useOutsideClick';

import { splitRgbToObject, joinObjectToRgb } from '../helpers/colorConverter';

const ColorPickerSliderBlock = ({
  outSideClick,
  sliderIsOpen,
  onColorNameChoosen,
  currentColorRgb,
  onPickerSliderOpen,
}) => {
  const [color, setColor] = useState(currentColorRgb);

  const onColorValueChange = (palletName) => ({ target }) => {
    const splittedRgb = splitRgbToObject(color);
    splittedRgb[palletName] = target.value;
    setColor(joinObjectToRgb(splittedRgb));
  };

  const onColorReset = () => {
    setColor(currentColorRgb);
    outSideClick();
  };

  const ref = useOutSideClick(onColorReset);

  useEffect(() => {
    setColor(currentColorRgb);
  }, [currentColorRgb]);

  return (
    <div>
      <div className="squareContainer" onClick={onPickerSliderOpen}>
        <div className="square" style={{ backgroundColor: color }}></div>
      </div>
      {sliderIsOpen && (
        <div ref={ref}>
          <ColorPickerSlider
            onColorAccept={onColorNameChoosen(color)}
            onColorReset={onColorReset}
            onColorValueChange={onColorValueChange}
            colorsObject={splitRgbToObject(color)}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPickerSliderBlock;
