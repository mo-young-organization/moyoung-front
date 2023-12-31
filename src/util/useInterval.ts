import { useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef(null);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      intervalIdRef.current = setInterval(tick, delay);
    }

    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

export default useInterval;
