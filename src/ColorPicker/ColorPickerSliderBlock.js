import { useContext, useRef } from 'react';
import ColorPickerSlider from './ColorPickerSlider/ColorPickerSlider';

import { ContextApp, ACTIONS } from './reducer';

import useOutSideClick from '../hooks/useOutsideClick';

const ColorPickerSliderBlock = () => {
  const ref = useRef();
  const { state, dispatch } = useContext(ContextApp);

  useOutSideClick(ref, () => {
    dispatch({ type: ACTIONS.types.slider, value: ACTIONS.value.close });
  });

  const onClickAction = () => dispatch({ type: ACTIONS.types.slider, value: !state.sliderIsOpen });

  return (
    <div ref={ref}>
      <div className="squareContainer" onClick={onClickAction}>
        <div className="square" style={{ backgroundColor: state.currentColor }}></div>
      </div>
      {state.sliderIsOpen && <ColorPickerSlider />}
    </div>
  );
};

export default ColorPickerSliderBlock;
