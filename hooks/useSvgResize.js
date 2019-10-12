import { useEffect, useState } from "react";

const useSvgResize = svgRef => {
  const [dims, setDims] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    const handleResize = () => {
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      setDims({ width, height });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [svgRef]);

  return dims;
};

export default useSvgResize;
