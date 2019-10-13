import { format } from "d3-format";
import React, { useState } from "react";
import CountUp from "react-countup";
import styled, { keyframes, css } from "styled-components";
import {
  fontSizeM,
  fontWeightS,
  colorGrey
} from "../../styles/sharedStyles";

export const getFormattedNumber = ({ val, perc, expPlus }) => {
  let formatKey;
  if (perc) {
    if (expPlus) {
      if (-0.1 < val && val < 0.1) {
        formatKey = "+.2%";
      } else {
        formatKey = "+.1%";
      }
    } else {
      if (-0.1 < val && val < 0.1) {
        formatKey = ".2%";
      } else {
        formatKey = ".1%";
      }
    }
  } else {
    if (expPlus) {
      if (-1 < val && val < 1) {
        formatKey = "+.2f";
      } else {
        formatKey = "+.3s";
      }
    } else {
      if (-1 < val && val < 1) {
        formatKey = ".2f";
      } else {
        formatKey = ".3s";
      }
    }
  }
  return val ? format(formatKey)(val).replace(/([a-zA-Z%])/g, "") : "-";
};

export const getSuffix = ({ val, custom, perc }) => {
  if (val === undefined) {
    return "";
  }
  if (custom) {
    return custom;
  }
  if (perc) {
    return "%";
  }
  if (val < 1000) {
    return "";
  }
  if (1000 <= val && val < 1000000) {
    return "K";
  }
  if (1000000 <= val && val < 1000000000) {
    return "M";
  }
  if (1000000000 <= val) {
    return "B";
  }
};
const fadein = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const Container = styled.span`
  display: ${props => props.display || 'flex'};
  align-items: flex-end;

  ${props =>
    props.isInitalized &&
    css`
      animation: ${fadein} 2s;
    `}
  font-size: ${props => props.size}; 
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight};
  ${props =>
    (props.smallSuffix || props.smallPrefix) &&
    css`
      .suffix,
      .prefix {
        display: block;
        font-size: ${props.suffixSize || props.prefixSize};
        margin-left: 3px;
        line-height: ${props.suffixLineHeight || props.prefixLineHeight};
      }
    `}
`;

const ConvertedNumber = ({
  data,
  duration = 2,
  perc,
  prefix,
  weight = fontWeightS,
  size = fontSizeM,
  color = colorGrey,
  lineHeight = 1.2,
  suffixSize,
  suffixLineHeight,
  customSuffix,
  animate,
  smallSuffix,
  expPlus,
  period,
  suffixSpace,
  prefixSpace,
  prefixSize,
  smallPrefix,
  prefixLineHeight,
  display
}) => {
  const [isInitalized, setIsInitalized] = useState(false);
  const styles = {
    weight,
    size,
    smallSuffix,
    suffixSize,
    color,
    lineHeight,
    smallPrefix,
    suffixLineHeight,
    prefixSize,
    prefixLineHeight,
    display
  };
  if (data === undefined) return <div></div>;
  const suffix = getSuffix({ val: data, custom: customSuffix, perc });
  return (
    <>
      <Container {...styles}>
        {prefix && (
          <span className="prefix">
            {prefix}
            {prefixSpace && " "}
          </span>
        )}
        {animate ? (
          <CountUp
            end={data}
            decimals={3}
            preserveValue
            formattingFn={val => getFormattedNumber({ val, perc, expPlus })}
            onEnd={() => !isInitalized && setIsInitalized(true)}
            duration={duration}
            decimal="."
          />
        ) : (
          getFormattedNumber({ val: data, perc, expPlus })
        )}
        {suffix && (
          <span className="suffix">
            {suffixSpace && " "}
            {suffix}
          </span>
        )}
        {period && <span className="period"> {period}</span>}
      </Container>
    </>
  );
};

export default ConvertedNumber;
