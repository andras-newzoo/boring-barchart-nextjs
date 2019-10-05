import styled from "styled-components";
import { fontWeightL, fontWeightXS, fontSizeM } from "../../styles/sharedStyles";

export const Container = styled.div`

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    width: calc(${props => props.width}px - 3.2rem);
    height: ${props => props.height || 30}px;
    padding: .8rem 1.6rem;
    font-weight: ${props => props.fontWeight || fontWeightXS};
    font-size: ${fontSizeM};
    border: 1px solid ${props => props.borderColor || '#aaa'};
    border-radius: 4px;

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
    top: calc(30px + 1.6rem + 1px);
    width: ${props => props.width}px;
    border: 1px solid ${props => props.borderColor || '#aaa'};
    background-color: #fff;
    font-weight: ${props => props.fontWeight || fontWeightXS};
    font-size: 1.6rem;
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
    padding: .8rem 1.6rem;
  }

  .highlight {
    color: ${props => props.highlight || '#333'};
    font-weight: ${fontWeightL};
  }
`;
