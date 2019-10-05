import React from "react";
import styled from "styled-components";
import {
  paddingXS,
  fontWeightXS,
  fontSizeM,
  fontWeightXL,
  fontWeightL
} from "../../styles/sharedStyles";
import { colorGreyDark } from "../../containers/FurnitureBank2019/styles";

const ControlElement = styled.div`
  position: absolute;
  top: ${props => props.top}rem;
  left: ${props => props.left || 1.4}rem;
  cursor: pointer;
  font-weight: ${fontWeightL};
  visibility: hidden;
`;

const DeleteIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-weight: ${fontWeightXL};
  cursor: pointer;
  visibility: hidden;
  trasition: all .3s;
`;

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: calc(100% - 3.8rem);
  min-height: ${props => props.height || 30}px;
  padding: ${paddingXS};
  margin: 0.4rem 0;
  padding-left: 3rem;
  font-weight: ${props => props.fontWeight || fontWeightXS};
  font-size: ${fontSizeM};
  border: 1px solid ${props => props.borderColor || colorGreyDark};
  border-radius: 4px;

  background: ${colorGreyDark};
  color: #fff;

  transition: 0.5s all;

  &:hover ${ControlElement}, &:hover ${ControlElement}, &:hover ${DeleteIcon} {
    visibility: visible;
  }
`;

const QuantityContainer = styled.div`
  position: absolute;
  width: 15px;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;

  font-weight: ${fontWeightXL};
`;


const ItemChip = ({
  style,
  handleIncrementClick,
  handleDecrementClick,
  handleDeleteClick,
  content,
  quantity
}) => {
  return (
    <Container {...style}>
      <ControlElement top={-0.2} onClick={handleIncrementClick}>
        +
      </ControlElement>
      {quantity > 1 && (
        <ControlElement top={2} left={1.5} onClick={handleDecrementClick}>
          -
        </ControlElement>
      )}
      <QuantityContainer>{quantity}</QuantityContainer>
      {content}
      <DeleteIcon onClick={handleDeleteClick}>×</DeleteIcon>
    </Container>
  );
};

export default ItemChip;
