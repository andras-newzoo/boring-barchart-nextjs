import styled, { css } from "styled-components";
import {
  fontSizeL,
  fontWeightL,
  fontSizeM,
  fontSizeS,
  fontWeightM,
  paddingXS
} from "../../../styles/sharedStyles";
import { colorGreyDark, media } from "./variables";
import { Paper } from "@material-ui/core";
import { colorGreen } from ".";

export const MainTitle = styled.div`
  font-size: ${fontSizeL};
  font-weight: ${fontWeightL};
  color: ${colorGreyDark};
  text-transform: uppercase;
  grid-area: ${props => props.gridArea};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  grid-area: ${props => props.gridArea};

  ${media.small`
    font-size: ${fontSizeM};
    
    span {
      font-size: ${fontSizeS};
    }
  `}

  span {
    font-weight: ${fontWeightM};
    font-size: ${fontSizeM};
  }
`;

export const ChartTitle = styled.div`
  font-size: ${fontSizeM};
  font-weight: ${fontWeightM};
  color: ${colorGreyDark};
  text-transform: uppercase;
  background: ${props => props.withBG && '#fff'};
  position: absolute;
  ${props => props.message ? css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color: ${colorGreen};
  ` : css`
    top: 0;
    left: 0;
  `}
  z-index: 100;
  padding: ${paddingXS};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  grid-area: ${props => props.gridArea};

  ${media.small`
    font-size: ${fontSizeS};
  `}
`;

export const ChartPaper = styled(Paper)`
  grid-area: ${props => props.gridArea};
  height: 100%;
  width: 100%;

  position: relative;
`;
