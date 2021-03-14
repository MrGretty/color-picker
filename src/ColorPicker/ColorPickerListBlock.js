import ColorPickerList from './ColorPickerList/ColorPickerList';

import useOutSideClick from '../hooks/useOutsideClick';

const ColorPickerListBlock = ({ onPickerListOpen, listIsOpen, onColorNameChoosen, colors, outSideClick }) => {
  const ref = useOutSideClick(outSideClick);

  return (
    <div>
      <div className="triangleContainer" onClick={onPickerListOpen}>
        <div className="triangle"></div>
      </div>
      {listIsOpen && (
        <div ref={ref}>
          <ColorPickerList colors={colors} onColorClick={onColorNameChoosen} />
        </div>
      )}
    </div>
  );
};

export default ColorPickerListBlock;
