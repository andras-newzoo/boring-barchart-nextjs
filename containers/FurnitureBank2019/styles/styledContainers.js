import styled from "styled-components";
import { testBorder } from "../../../styles/sharedStyles";
import { createBreakPoints } from '../../../styles/mediaQueries'
 
export const colorGreen = '#3db692'
export const colorRedDark = '#b02b2c'
export const colorRed = '#ec1c24'
export const colorGreyLight = 'lightgray'
export const colorGreyDark = '#333'

const breakPoints = {
  medium: 1024
}

const media = createBreakPoints(breakPoints)

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardContainer = styled.div`
  width: 90%;
  height: 650px;
  max-width: 1440px;
  margin: 5rem 0;

  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "control charts";

  ${media.medium`
    width: 80%;
    margin: 2.5rem 0;

    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    grid-template-areas:  "control"
                          "charts";
  `}
`

export const ControlsContainer = styled.div`
  display: grid;
  grid-area: control;

  grid-template-rows: 150px 1fr;
  grid-template-areas: "title panel";

  ${media.medium`
    width: 80%;

    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "title panel";
  `}

`

export const LogoContainer = styled.div`
  grid-area: title;

  display: flex;
  justify-content: center;
  align-items: center;

  ${testBorder}
  img {
    width: 80%;
  }
`

export const ControlContainer = styled.div`
  
`


export const ChartsContainer = styled.div`
  display: grid;
  grid-area: charts;
  ${testBorder}
`