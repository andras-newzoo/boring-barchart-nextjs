import React from 'react';
import styled, { css } from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${props => props.opacity || .5});
  display: ${props => props.open ? 'block' : 'none'};
  z-index: 1000;
`

const ModalPaper = styled.div`
  position: absolute;
  left: 50%;
  ${props => props.size === "s" && css`
    transform: translate(-50%, -25%);
  `}
  ${props => props.size === "m" && css`
    transform: translate(-50%, -50%);
  `}
  z-index: 1100;
  background-color: #fff;

  ${props => props.open ? css`
    transition: 1s all;
    opacity: 1;
    top: 50%;
    visibility: visible;
  ` : css`
    transition: 0s all;
    opacity: 0;
    top: -50%;
    visibility: hidden;
  `}
`

const Modal = ({
  children,
  open,
  handleClick,
  size
}) => {

  return (
    <>
      <ModalBackground 
        onClick={handleClick} 
        open={open}
      />
      <ModalPaper
        open={open}
        size={size}
      >
        {children}
      </ModalPaper>
    </>
  )
}

export default Modal

