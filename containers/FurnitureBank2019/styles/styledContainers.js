import { paddingM, paddingS, fontWeightL, paddingL, paddingXL, fontSizeL } from "../../../styles/sharedStyles";
import styled from "styled-components";
import { media, titleHeightM, gridGapM, gridGapS, colorGreen, colorRed } from "./variables";

export const MainContainer = styled.div`
  width: 100vw;
`;

export const DashboardContainer = styled.div`
  width: 90%;
  height: 650px;
  max-width: 1440px;

  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;

  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "control charts";

  ${media.medium`
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 850px;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    grid-template-areas:  
      "control"
      "charts";
  `}

  ${media.small`
    width: 100%;
    padding-top: 0;
    padding-bottom: 2rem;
    grid-template-rows: 300px 1fr;
    height: 1400px;
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

  ${'' /* ${testBorder}; */}

  padding: ${paddingM};

  ${media.medium`
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "title panel";
    padding: 0;
    grid-column-gap: ${gridGapM};
  `}

  ${media.small`
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas:  
      "title" 
      "panel";
    grid-column-gap: 0;
    grid-row-gap: ${gridGapS};
  `}

  ${media.extraSmall`
    grid-template-rows: 70px 1fr;
  `}
`;

export const LogoContainer = styled.div`
  grid-area: title;
  padding: ${paddingS};

  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;

  img {
    width: 100%;
  }

  ${media.medium`
    padding: 0;
    align-items: center;
  `}

  ${media.small`
    background: ${colorGreen};
    img {
      width: 300px;
    }
  `}

  ${media.extraSmall`
    img {
      width: 250px;
    }
  `}
`;

export const ControlContainer = styled.div`
  grid-area: panel;
  display: grid;

  padding: ${paddingS};

  ${'' /* ${testBorder}; */}

  grid-template-rows: ${titleHeightM} 1fr;
  grid-template-areas:
    "title"
    "panel";

  ${media.medium`
    padding: 0;
    grid-column-gap: ${gridGapM};
  `}

  ${media.small`
    padding: ${paddingS};
  `}
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 490px;
  overflow-y: scroll;

  ${'' /* ${testBorder}; */}

  &::-webkit-scrollbar {
    display: none;
  }
  grid-area: panel;

  ${media.medium`
    height: 150px;
  `}

  ${media.small`
    height: 160px;
  `}

  ${media.extraSmall`
    height: 170px;
  `}
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-area: charts;
  grid-row-gap: ${gridGapS};
  padding: ${paddingM};

  grid-template-rows: 3fr 2fr ${titleHeightM};
  grid-template-areas:
    "soc"
    "env"
    "req";

  ${media.medium`
    padding: 0;
  `}

  ${media.small`
    padding: ${paddingS};
  `}
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
    "value value";
  
  ${media.small`
    grid-template-rows: ${titleHeightM} repeat(3, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "map"
      "families"
      "value"
  `}
`;

export const MapContainer = styled.div`
  grid-area: map;
  height: 100%;
  width: 100%;
`;

export const FamilyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-areas: "chart persons";
  align-items: center;
  justify-items: center;

  height: 100%;
  width: 100%;
`;

export const PersonsContainer = styled.div`
  grid-area: persons;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: .5rem;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  img {
    margin-right: 1rem;
  }
  .adult {
    height: 110px;
    
  }
  .child {
    height: 75px;
  }
`

export const ValueContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-areas: "abs perc";
  height: 100%;

  ${media.small`
    grid-template-rows: 1fr repeat(2, 2fr);
    grid-template-columns: 2fr 5fr;
    grid-template-areas:
    ". ."
    "abs perc"
    ". perc";  
  `}
`

export const DonationPercentageContainer = styled.div`
  display: grid;
  grid-area: perc;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". ."
    "chart percentage"
    "subchart .";
  justify-items: center;
  align-items: center;
    
  ${media.small`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "chart chart"
      "subchart percentage";
  `}
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
    "landfill emission";

  ${media.small`
    grid-template-rows: ${titleHeightM} repeat(2, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "landfill"
      "emission";
  `}
`;

export const LandFillContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 20px repeat(2, 1fr);
  grid-row-gap: 1rem;
  grid-template-areas: 
    "title"
    "weight"
    "volume";

  .garbage {
    &-month {
      height: 45px;
      padding-right: 2px;
    }
    &-week {
      height: 20px;
      padding-right: 1px;
    }
  }
  .container {
    height: 45px;
  }
`;

export const LandFillSubContainer = styled.div`
  display: grid;
  grid-area: ${props => props.gridArea};
  grid-template-rows: 1fr 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
    "num icon"
    "text text";
`

export const ContainerChart = styled.div`
  width: 68px;
  height: ${props => props.height < 1 ? props.height * 41 : 41}px;
  background-color: ${colorGreen};
  transform: translateY(${props => props.height < 1 ? 41 - props.height * 41 : 0}px);
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${media.small`
    height: ${props => props.height < 1 ? props.height * 40 : 40}px;
    transform: translateY(${props => props.height < 1 ? 41 - props.height * 42 : 1}px);
    background-color: ${colorGreen};
  `}
`

export const EmissionContainer = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: 1fr 4fr 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    ". ."
    "num icon"
    "text text";
`;

export const ReqContainer = styled.div`
  grid-area: req;
  display: flex;
  margin-top: 1.6rem;
  justify-content: flex-end;
  align-items: center;

  .button {
    height: 40px;
    cursor: pointer;
    transition: .3s all;

    &:hover{
      transform: translateY(-2px);
    }
    &:active{
      transform: translateY(0px);
    }
  }

  ${media.small`
    justify-content: center;
  `}
`;


export const ModalContainer = styled.div`
  width: 750px;
  height: 450px;
  padding: ${paddingXL};

  position: relative;

  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "intro help data"
    "one two three";
  
  ${media.medium`
    width: 650px;
    height: 650px;
    padding: ${paddingL};

    grid-row-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "intro help"
      "one two"
      "three data";
  `}

  ${media.small`
    width: 300px;
    height: 1200px;

    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "intro"
      "help"
      "one"
      "two"
      "three"
      "data";
  `}

  img {
    width: 100%;
  }

  .icon {
    position: absolute;
    top: .5rem;
    right: 1rem;
    font-size: ${fontSizeL};
    font-weight: ${fontWeightL};
    color: ${colorRed};
    cursor: pointer;
  }

`