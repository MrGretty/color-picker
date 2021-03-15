import { useEffect, useReducer } from 'react';

import ColorPickerValueBlock from './ColorPickerValueBlock';
import ColorPickerListBlock from './ColorPickerListBlock';
import ColorPickerSliderBlock from './ColorPickerSliderBlock';

import { ACTIONS, reducer } from './reducer';

import { convertToHex, convertToRgb } from '../helpers/colorConverter';

import './ColorPicker.css';

const ColorPicker = ({ value, onChange, colors }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentColorHex: convertToHex(value),
    currentColorRgb: convertToRgb(value),
    listIsOpen: false,
    sliderIsOpen: false,
  });

  const onColorNameChoosen = (color) => () => {
    const colorConverted = convertToHex(color);

    if (colorConverted === state.currentColorHex) {
      dispatch({ type: ACTIONS.types.reset });
    } else {
      onChange(colorConverted);
    }
  };

  const onOutSideClick = (type) => () => dispatch({ type: type, value: ACTIONS.value.close });
  const onDialogOpen = (type, value) => () => dispatch({ type, value });

  useEffect(() => {
    dispatch({ type: ACTIONS.types.color, valueHex: convertToHex(value), valueRgb: convertToRgb(value) });
  }, [value]);

  return (
    <div className="colorPickerContainer">
      <ColorPickerValueBlock currentColorHex={state.currentColorHex} />
      <ColorPickerSliderBlock
        currentColorRgb={state.currentColorRgb}
        sliderIsOpen={state.sliderIsOpen}
        onColorNameChoosen={onColorNameChoosen}
        outSideClick={onOutSideClick(ACTIONS.types.slider)}
        onPickerSliderOpen={onDialogOpen(ACTIONS.types.slider, !state.sliderIsOpen)}
      />
      <ColorPickerListBlock
        colors={colors}
        listIsOpen={state.listIsOpen}
        onColorNameChoosen={onColorNameChoosen}
        outSideClick={onOutSideClick(ACTIONS.types.list)}
        onPickerListOpen={onDialogOpen(ACTIONS.types.list, !state.listIsOpen)}
      />
    </div>
  );
};

export default ColorPicker;
