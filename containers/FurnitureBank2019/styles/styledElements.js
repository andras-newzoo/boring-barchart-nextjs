import styled from "styled-components";
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
  top: .25rem;
  left: .25rem;
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
  height: 100%;
  width: 100%;

  position: relative;
`;
