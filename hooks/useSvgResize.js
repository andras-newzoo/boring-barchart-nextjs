import { useEffect, useState } from "react";

const useSvgResize = svgRef => {
  const [dims, setDims] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    const handleResize = () => {
      // console.log(svgRef.current.offsetHeight);
      
      const width = svgRef.current.offsetWidth;
      const height = svgRef.current.offsetHeight;
      setDims({ width, height });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [svgRef]);

  return dims;
};

export default useSvgResize;
