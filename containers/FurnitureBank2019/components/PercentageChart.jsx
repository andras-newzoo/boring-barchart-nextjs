import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { select } from "d3-selection";
import { easeCubicInOut } from "d3-ease";
import "d3-transition";

import { useSvgResize, usePrevious } from "../../../hooks";
import { colorGreen } from "../styles";
import { createUpdateSvg } from "../../../utils";
import { colorGrey } from "../../../styles";

const ChartWrapper = styled.div`
  height: 100%;
  width: 90%;

  border: 1px solid ${colorGrey};

  border-radius: 20px;
  overflow: hidden;

  rect {
    fill: ${colorGreen};
  }
`;

const PercentageChart = ({
  data,
  fullCount,
  updateDuration = 1000,
  resetDelay = 500
}) => {
  const divRef = useRef();
  const storedValues = useRef();
  const prevData = usePrevious(data);
  const prevCount = usePrevious(fullCount);
  const [init, setInit] = useState(false);
  let initVis, resetChart, updateRect, updateDims;

  const dims = useSvgResize(divRef);
  const prevDims = usePrevious(dims);

  useEffect(() => {
    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);

  useEffect(() => {
    if (init) {
      !_.isEqual(dims, prevDims) && updateDims();
    }
  }, [dims, init, prevDims, updateDims]);

  useEffect(() => {
    if (init && prevData !== data) {
      prevCount < fullCount && resetChart("end");
      fullCount < prevCount && resetChart("start");
      fullCount === prevCount && updateRect();
    }
  }, [
    data,
    init,
    prevData,
    fullCount,
    prevCount,
    resetChart,
    updateDuration,
    resetDelay,
    updateRect,
    dims.width
  ]);

  initVis = () => {
    const area = select(divRef.current);
    const { chartArea } = createUpdateSvg({
      area,
      dims,
      append: true
    });
    chartArea
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", dims.height)
      .attr("width", 0);
    storedValues.current = {
      area,
      chartArea
    };
    updateRect();
  };

  updateDims = () => {
    const { chartArea } = storedValues.current;
    createUpdateSvg({ area: select(divRef.current), dims, update: true });
    chartArea
      .select("rect")
      .attr("height", dims.height)
      .attr("width", dims.width * (data - fullCount));
  };

  resetChart = resetPoint => {
    const { chartArea } = storedValues.current;
    const toEnd = resetPoint === "end";
    chartArea
      .select("rect")
      .transition()
      .duration(updateDuration / 2)
      .ease(easeCubicInOut)
      .attr("width", toEnd ? dims.width : 0)
      .transition()
      .delay(resetDelay)
      .duration(0)
      .attr("width", toEnd ? 0 : dims.width)
      .transition()
      .delay(updateDuration / 2)
      .duration(updateDuration / 2)
      .ease(easeCubicInOut)
      .attr("width", dims.width * (data - fullCount));
  };

  updateRect = () => {
    const { chartArea } = storedValues.current;
    chartArea
      .select("rect")
      .transition("update")
      .duration(updateDuration)
      .ease(easeCubicInOut)
      .attr("width", dims.width * (data - fullCount));
  };

  return <ChartWrapper ref={divRef} />;
};

export default PercentageChart;
