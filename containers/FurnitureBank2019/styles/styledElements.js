import styled from "styled-components";
import { testBorder, fontSizeL, fontWeightL } from "../../../styles/sharedStyles";
import { colorGreyDark } from './variables'

export const MainTitle = styled.div`
  font-size: ${fontSizeL};
  font-weight: ${fontWeightL};
  color: ${colorGreyDark};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  grid-area: ${props => props.gridArea};
`