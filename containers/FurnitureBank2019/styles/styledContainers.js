import { paddingM, paddingS, testBorder } from "../../../styles/sharedStyles";
import styled from "styled-components";
import { media, titleHeightM, gridGapM, gridGapS } from "./variables";
// import { border } from "@material-ui/system";

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
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-area: control;

  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "panel";

  padding: ${paddingM};

  ${media.medium`
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "title panel";
  `}
`;

export const LogoContainer = styled.div`
  grid-area: title;

  padding: ${paddingS};
  margin-top: -1rem;

  img {
    width: 100%;
  }
`;

export const ControlContainer = styled.div`
  grid-area: panel;
  display: grid;

  padding: ${paddingS};

  grid-template-rows: ${titleHeightM} 1fr;
  grid-template-areas:
    "title"
    "panel";
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: ${props => props.height}px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  grid-area: panel;
  ${"" /* ${testBorder} */}
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-area: charts;
  grid-row-gap: ${gridGapS};

  grid-template-rows: 3fr 2fr ${titleHeightM};
  grid-template-areas:
    "soc"
    "env"
    "req";
`;

export const SocChartsContainer = styled.div`
  display: grid;
  grid-area: soc;
  grid-row-gap: ${gridGapS};
  grid-column-gap: ${gridGapM};

  grid-template-rows: ${titleHeightM} 1fr 100px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title title"
    "map families"
    "value value"
`;

export const MapContainer = styled.div`
  grid-area: map;
  height: 100%;
  width: 100%;
`;

export const FamilyContainer = styled.div`
  grid-area: families;
  height: 100%;
  width: 100%; 
`;

export const ValueContainer = styled.div`
  grid-area: value;
  height: 100%;
  width: 100%; 
`

export const EnvChartsContainer = styled.div`
  display: grid;
  grid-area: env;
  grid-row-gap: ${gridGapS};
  grid-column-gap: ${gridGapM};

  grid-template-rows: ${titleHeightM} 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title title"
    "landfill emission"
`;

export const LandFillContainer = styled.div`
  grid-area: landfill;
  height: 100%;
  width: 100%;
`;

export const EmissionContainer = styled.div`
  grid-area: emission;
  height: 100%;
  width: 100%;
`;

export const ReqContainer = styled.div`
  grid-area: req;
  display: flex;
  margin-top: 1.6rem;
  justify-content: space-between;
  align-items: center;
`;