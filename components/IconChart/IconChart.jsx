import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import { select } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import "d3-transition";
import { colorGrey } from "../../styles/sharedStyles";

const Wrapper = styled.div`
  svg {
    cursor: pointer;
  }
`;

class IconChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      data: [
        { sortKey: 0, yKey: "A", xKey: 250 },
        { sortKey: 1, yKey: "B", xKey: 300 },
        { sortKey: 2, yKey: "C", xKey: 200 }
      ]
    };
  }

  componentDidMount() {
    this.initVis();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.randomizeData();
    }

    if (colorGrey !== prevProps.fill) {
      this.updateFill();
    }
  }

  getColor() {}

  randomizeData() {
    const randomXKey = () => _.random(50, 300);

    const data = [
      { sortKey: randomXKey(), yKey: "A", xKey: randomXKey() },
      { sortKey: randomXKey(), yKey: "B", xKey: randomXKey() },
      { sortKey: randomXKey(), yKey: "C", xKey: randomXKey() }
    ];

    this.updateVis(data.sort((a, b) => a.sortKey - b.sortKey), this.getColor());
  }

  initVis() {
    const svg = select(this.svg);
    const { data } = this.state;
    svg.attr("height", 40).attr("width", 40);
    svg
      .append("g")
      .attr("class", "chart-area")
      .attr("transform", `translate(0,7)`);

    this.yScale = scaleBand()
      .range([0, 30])
      .domain(data.map(d => d.yKey))
      .padding(0.3);
    this.xScale = scaleLinear()
      .range([0, 35])
      .domain([0, 300]);
    this.chartArea = svg.select(".chart-area");

    this.chartArea
      .append("line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", 30)
      .attr("stroke", colorGrey)
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round");

    const rects = this.chartArea.selectAll("rect").data(data, d => d.yKey);

    rects
      .enter()
      .append("rect")
      .attr("x", this.xScale(0))
      .attr("y", d => this.yScale(d.yKey))
      .attr("height", this.yScale.bandwidth())
      .attr("width", this.xScale(0))
      .attr("fill", colorGrey)
      .merge(rects)
      .transition("in")
      .duration(1000)
      .delay((_, i) => i * 250)
      .attr("width", d => this.xScale(d.xKey));
  }

  updateVis(data) {
    this.yScale.domain(data.map(d => d.yKey));

    this.chartArea
      .selectAll("rect")
      .data(data, d => d.yKey)
      .transition("update-width")
      .delay(d => d.sortKey)
      .duration(1000)
      .attr("width", d => this.xScale(d.xKey))
      .attr("fill", colorGrey);
  }

  updateFill() {
    this.chartArea.selectAll("rect").attr("fill", colorGrey);

    this.chartArea.select("line").attr("stroke", colorGrey);
  }

  render() {
    return (
      <Wrapper>
        <svg
          ref={svg => (this.svg = svg)}
          onClick={() => this.randomizeData()}
        />
      </Wrapper>
    );
  }
}

export default IconChart;
