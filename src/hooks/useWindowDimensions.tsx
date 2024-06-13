import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
  [Symbol.iterator]: () => Iterator<number>;
}

function useWindowDimensions(): WindowDimensions {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const resizeListener = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const dimensions: WindowDimensions = {
    width,
    height,
    [Symbol.iterator]: function* () {
      yield this.width;
      yield this.height;
    },
  };

  return dimensions;
}

export default useWindowDimensions;