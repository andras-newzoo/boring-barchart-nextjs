import styled from "styled-components";
import { testBorder } from "../../../styles/sharedStyles";
import { media } from './variables'

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
  grid-template-columns: 1fr;
  grid-template-areas: "title"
                        "panel";

  ${media.medium`
 
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

  img {
    width: 80%;
  }
`

export const ControlContainer = styled.div`
  grid-area: panel;
  display: grid;

  grid-template-rows: 50px 1fr;
  grid-template-areas: 
    "title"
    "panel"
`

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  grid-area: panel;
  ${testBorder}
`


export const ChartsContainer = styled.div`
  display: grid;
  grid-area: charts;
`