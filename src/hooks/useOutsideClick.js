import { useEffect, useCallback, useRef, useState } from 'react';

const useOutsideClick = (cb) => {
  const [node, setNode] = useState();
  const savedHandler = useRef(cb);

  const onClick = (e) => {
    if (node && !node.contains(e.target)) {
      savedHandler.current(e);
    }
  };

  useEffect(() => {
    savedHandler.current = cb;
  });

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  });

  return ref;
};

export default useOutsideClick;
