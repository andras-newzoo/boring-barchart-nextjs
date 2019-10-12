import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useSvgResize, usePrevious } from "../../../hooks";
import { select } from "d3-selection";
import { colorGreen, colorGreyDark } from "../styles";
import { easeCubicInOut } from 'd3-ease'
import 'd3-transition'

const ChartWrapper = styled.div`
  position: relative;
  height: 80%;
  width: 90%;

  border: 1px solid ${colorGreyDark};

  border-radius: 20px;
  overflow: hidden;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;

    rect {
      fill: ${colorGreen};
    }
  }
`;

const PercentageChart = ({ 
  data
}) => {
  const svgRef = useRef();
  const storedValues = useRef();
  const prevData = usePrevious(data);
  const [init, setInit] = useState(false);
  let initVis, updateData

  const dims = useSvgResize(svgRef);

  useEffect(() => {
    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);

  useEffect(() => {
    //console.log('dims', dims)
  }, [dims]);

  useEffect(() => {
    if(init && (prevData !== data)){
      updateData()
    }
  }, [data, init, prevData, updateData]);

  initVis = () => {
    const svg = select(svgRef.current);
    svg
      .append("g")
      .attr("class", "chart-area")
    const chartArea = select(".chart-area");
    chartArea
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('height', dims.height)
      .attr('width', dims.width * data)

    storedValues.current = {
      chartArea
    };
  };

  updateData = () => {
    const { chartArea } = storedValues.current
    chartArea.select('rect')
      .transition()
      .duration(1000)
      .ease(easeCubicInOut)
      .attr('width', dims.width * data)
  };

  const resetChart = () => {};

  const updateDims = () => {};

  return (
    <ChartWrapper>
      <svg ref={svgRef} />
    </ChartWrapper>
  );
};

export default PercentageChart;
