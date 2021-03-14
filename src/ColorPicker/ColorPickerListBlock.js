import { useContext, useRef } from 'react';
import ColorPickerList from './ColorPickerList/ColorPickerList';

import { ContextApp, ACTIONS } from './reducer';

import useOutSideClick from '../hooks/useOutsideClick';

const ColorPickerListBlock = () => {
  const ref = useRef();
  const { state, dispatch } = useContext(ContextApp);

  // useOutSideClick(ref, () => {
  //   dispatch({ type: ACTIONS.types.list, value: ACTIONS.value.close });
  // });

  const onClickAction = () => dispatch({ type: ACTIONS.types.list, value: !state.listIsOpen });

  return (
    <div ref={ref}>
      <div className="triangleContainer" onClick={onClickAction}>
        <div className="triangle"></div>
      </div>
      {state.listIsOpen && <ColorPickerList />}
    </div>
  );
};

export default ColorPickerListBlock;
