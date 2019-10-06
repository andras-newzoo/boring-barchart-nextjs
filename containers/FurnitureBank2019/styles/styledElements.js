import styled from "styled-components";
import {
  fontSizeL,
  fontWeightL,
  fontWeightS,
  fontSizeM,
  fontSizeS
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

  ${media.medium`
    font-size: ${fontSizeM};
    
    span {
      font-size: ${fontSizeS};
    }
  `}

  span {
    font-weight: ${fontWeightS};
    font-size: ${fontSizeM};
  }
`;

export const ChartPaper = styled(Paper)`
  height: 100%;
  width: 100%;
`;
