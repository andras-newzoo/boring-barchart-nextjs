import React from "react";
import styled, { css } from "styled-components";
import { colorGrey } from "../../styles";

const Container = styled.div`
  position: absolute;
  background-color: ${props => props.background || colorGrey};
  color: ${props => props.color || "#fff"};
  ${props => css`
    top: ${props.top};
    right: ${props.right};
    bottom: ${props.bottom};
    left: ${props.left};
    width: ${props.width}px;
    height: ${props.height}px;
  `}
  border-radius: ${props => props.round && "100%"};
  transform: translate(${props => props.corner && props.translate});
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Icon = styled.div`
  position: absolute;

  ${props => css`
    top: ${props.iconTop};
    right: ${props.iconRight};
    bottom: ${props.iconBottom};
    left: ${props.iconLeft};
  `}

  .icon {
    height: ${props => props.iconHeight || 25}px;
  }
`;

const FixedInfoButton = ({
  top,
  right,
  bottom,
  left,
  background,
  color,
  height,
  width,
  round,
  corner,
  translate,
  iconPath,
  iconLeft,
  iconBottom,
  iconTop,
  iconRight,
  iconHeight,
  iconComponent,
  handleClick
}) => {
  const dims = { top, right, bottom, left, height, width, corner, translate };
  const styles = { background, color, round };
  const iconDims = { iconLeft, iconBottom, iconTop, iconRight, iconHeight };
  return (
    <Container {...dims} {...styles} onClick={handleClick} >
      <IconContainer>
        <Icon {...iconDims}>
          {
            iconComponent ?
            iconComponent :
            <img className="icon" src={iconPath} alt="fixed icon" />
          }
        </Icon>
      </IconContainer>
    </Container>
  );
};

export default FixedInfoButton;
