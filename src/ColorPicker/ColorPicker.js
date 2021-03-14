import { useEffect, useReducer } from 'react';

import ColorPickerValueBlock from './ColorPickerValueBlock';
import ColorPickerListBlock from './ColorPickerListBlock';
import ColorPickerSliderBlock from './ColorPickerSliderBlock';

import { ACTIONS, ContextApp, reducer } from './reducer';

import { convertToHex } from '../helpers/colorConverter';

import './ColorPicker.css';

const ColorPicker = ({ value, onChange, colors }) => {
  const [state, dispatch] = useReducer(reducer, { listIsOpen: false, sliderIsOpen: false });

  const onColorClick = (color) => {
    const colorConverted = convertToHex(color);

    if (colorConverted === state.currentColor) {
      dispatch({ type: ACTIONS.types.reset });
    } else {
      onChange(colorConverted);
    }
  };

  // если захотеть менять из вне
  useEffect(() => {
    dispatch({ type: ACTIONS.types.color, value: value });
  }, [value]);

  return (
    <ContextApp.Provider value={{ dispatch, onColorClick, state, colors }}>
      <div className="colorPickerContainer">
        <ColorPickerValueBlock />
        <ColorPickerSliderBlock />
        <ColorPickerListBlock />
      </div>
    </ContextApp.Provider>
  );
};

export default ColorPicker;
