import { useEffect } from 'react';

const useOutsideClick = (ref, cb) => {
  const onClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cb();
    }
  };

  useEffect(() => {
    // console.log(1);
    document.addEventListener('click', onClick);

    return () => {
      // console.log(2);
      document.removeEventListener('click', onClick);
    };
  });
};

export default useOutsideClick;
