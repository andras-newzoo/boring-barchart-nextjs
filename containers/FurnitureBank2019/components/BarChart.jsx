import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash'
import { scaleBand, scaleLinear } from 'd3-scale'
import { select } from "d3-selection";
import { max } from 'd3-array'

import { colorGreen } from "../styles";
import { useSvgResize, usePrevious } from "../../../hooks";
import { createUpdateSvg, numberTween } from "../../../utils";
import { colorGrey, fontSizeS, fontSizeM, fontWeightL } from "../../../styles";
import { easeCubicInOut } from "d3-ease";
import { format } from "d3-format";

const ChartWrapper = styled.div`
  height: 100%;
  width: 100%;

  border-left: 1px solid ${colorGrey};

  rect {
    fill: ${colorGreen};
  }

  .variable {
    fill: ${colorGrey};
    font-size: 1rem;
  }

  .value {
    fill: #fff;
    font-size: ${fontSizeM};
    font-weight: ${fontWeightL};
    text-anchor: end;
  }
`;

const BarChart = ({
  data,
  updateDuration = 1000,
}) => {
  const divRef = useRef()
  const storedValues = useRef()
  const prevData = usePrevious(data)
  const [ init, setInit ] = useState(false)
  let initVis, updateData, updateDims

  const dims = useSvgResize(divRef)
  const prevDims = usePrevious(dims)

  useEffect(() => {
    if(data && dims.height && dims.width && !init){
      initVis()
      setInit(true)
    }
    if(init && !_.isEqual(data, prevData)){
      updateData()
    }
  }, [data, dims, init, initVis, prevData, updateData])

  useEffect(() => {
    if(init){
      !_.isEqual(dims, prevDims) && updateDims();
    }
  }, [dims, init, prevDims, updateDims])

  initVis = () => {
    const area = select(divRef.current)
    const { chartArea } = createUpdateSvg({
      area,
      dims,
      append: true
    });

    const yScale = scaleBand().range([0, dims.height])
      .paddingOuter(.3)
      .paddingInner(.4)

    const xScale = scaleLinear().range([0, dims.width])
    
    storedValues.current = {
      chartArea,
      yScale,
      xScale
    }
    updateData()
  }

  updateData = () => {
    const { yScale, xScale } = storedValues.current
    yScale.domain(data.map(d => d.group))
    xScale.domain([0, max(data, d => d.share)])
    storedValues.current = { ...storedValues.current, yScale, xScale }
    createUpdateRects()
    createUpdateValueText()
    createUpdateVariableText()
  }

  const createUpdateRects = () => {
    const { chartArea, yScale, xScale } = storedValues.current

    const rects = chartArea.selectAll('rect').data(data, d => d.group)
    
    removeElement(rects)

    rects.enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', d => yScale(d.group))
      .attr('height', yScale.bandwidth())
      .attr('width', 0)
        .merge(rects)
        .transition()
        .duration(updateDuration)
        .ease(easeCubicInOut)
        .attr('width', d => xScale(d.share))

  }

  updateDims = () => {
    console.log('updatig dims');
    
    // TODO
  }

  const createUpdateValueText = () => {
    const { chartArea, yScale, xScale } = storedValues.current

    const texts = chartArea.selectAll('.value').data(data, d => d.group)
    const centerText = d => yScale(d.group) + yScale.bandwidth()/2 + 4

    removeElement(texts)

    texts.enter()
      .append('text')
      .attr('class', 'value')
      .attr('x', 0)
      .attr('y', centerText)
      .attr('opacity', 0)
      .text(0)
        .merge(texts)
        .transition()
        .duration(updateDuration)
        .ease(easeCubicInOut)
        .attr('x', d => xScale(d.share) - 2)
        .tween('text', (d, i, n) => numberTween(d, i, n, 'share', '.1%'))
        .attr('opacity', 1)
  }

  const createUpdateVariableText = () => {
    const { chartArea, yScale } = storedValues.current

    const texts = chartArea.selectAll('.variable').data(data, d => d.group)
    const yPos = d => yScale(d.group) - 3

    removeElement(texts)

    texts.enter()
      .append('text')
      .attr('class', 'variable')
      .attr('x', 1)
      .attr('y', yPos)
      .attr('opacity', 0)
      .text(d => d.group)
        .merge(texts)
        .transition()
        .duration(updateDuration)
        .ease(easeCubicInOut)
        .attr('y', yPos)
        .attr('opacity', 1)

  }

  const removeElement = el => 
    el.exit()
      .transition()
      .duration(updateDuration)
      .ease(easeCubicInOut)
      .attr('y', dims.height * 2)
      .remove()


  return <ChartWrapper ref={divRef} />;
};

export default BarChart;
