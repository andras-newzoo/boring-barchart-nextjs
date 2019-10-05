import styled, { css } from "styled-components";
import { fontWeightL, fontWeightXS, fontSizeM, paddingXS, fontFamilyMain } from "../../styles/sharedStyles";
import { colorGreyDark } from "../../containers/FurnitureBank2019/styles";

export const Container = styled.div`

  position: relative;

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    ${props => props.searched ? css`
      width: calc(${props => props.width}px - 1.8rem);
    ` : css`
      width: calc(${props => props.width}px - 4rem);
    `}
    height: ${props => props.height || 30}px;
    padding: ${paddingXS};
    margin: .4rem 0;
    padding-left: ${props => !props.searched && 3}rem;
    font-weight: ${props => props.fontWeight || fontWeightXS};
    font-size: ${fontSizeM};
    border: 1px solid ${props => props.borderColor || '#aaa'};
    border-radius: 4px;
    font-family: ${fontFamilyMain};
    color: ${colorGreyDark};

    transition: .5s all;

    &:focus {
      outline: none;
    }
  }

  .react-autosuggest__container--open .react-autosuggest__input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__container--open
  .react-autosuggest__suggestions-container {
    display: block;
    position: absolute;
    top: calc(30px + 1.4rem - 1px);
    width: ${props => props.width - 2}px;
    border: 1px solid ${props => props.borderColor || '#aaa'};
    background-color: #fff;
    font-weight: ${props => props.fontWeight || fontWeightXS};
    font-size: ${fontSizeM};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: ${paddingXS};
  }

  .highlight {
    color: ${props => props.highlight || '#333'};
    font-weight: ${fontWeightL};
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    z-index: 10;
    fill: ${colorGreyDark};
    visibility: ${props => props.searched ? 'hidden' : 'visible'};
  }
`;
