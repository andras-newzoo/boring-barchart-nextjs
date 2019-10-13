import React from "react";
import { Helmet } from "react-helmet";

import {
  MainContainer,
  DashboardContainer,
  ControlsContainer,
  ChartsContainer,
  LogoContainer,
  MainTitle,
  SocChartsContainer,
  EnvChartsContainer,
  EmissionContainer,
  ReqContainer,
  ChartPaper,
  ChartTitle,
  colorGreen
} from "./styles";
import {
  ValueContainer,
  MapContainer,
  ControlContainer,
  FamiliesContainer,
  LandFillContainer
} from "./containers";
import { Message, InfoButton, ModalComponent } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/furnitureBankReducer/actions";
import { useWindowSize } from "../../hooks";
import { selectAllSelectedEmission } from "../../store/furnitureBankReducer/selectors";
import { FlexContainer, fontSizeM, fontWeightL, fontSizeXL, fontWeightM } from "../../styles";
import { ConvertedNumber } from "../../components";

///https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator
const AVG_MILES_PER_KILOGRAM = 2.4;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { openModal, modalText } = useSelector(
    state => state.furnitureBankReducer
  );

  const handleToggleModal = () => dispatch(toggleModal());
  const windowSize = useWindowSize();
  const smallLayout = windowSize.width < 768;

  const emission = useSelector(selectAllSelectedEmission);
  // KG of CO2 Emssion Avoided

  return (
    <>
      <Helmet>
        <title>Furniture Bank 2019</title>
      </Helmet>
      <MainContainer>
        <ModalComponent
          openModal={openModal}
          handleClick={handleToggleModal}
          data={modalText}
          smallLayout={smallLayout}
        />
        <DashboardContainer>
          <InfoButton
            handleClick={handleToggleModal}
            smallLayout={smallLayout}
          />
          <ControlsContainer>
            <LogoContainer>
              <img
                src="/static/logos/furnitureBank.svg"
                alt="furniture bank icon"
              />
            </LogoContainer>
            <ControlContainer />
          </ControlsContainer>
          <ChartsContainer>
            <SocChartsContainer>
              <MainTitle gridArea="title">
                What is the estimated social impact of your donation?
              </MainTitle>
              <MapContainer />
              <FamiliesContainer />
              <ValueContainer smallLayout={smallLayout} />
            </SocChartsContainer>
            <EnvChartsContainer>
              <MainTitle gridArea="title">
                What is the estimated environmental impact of your donation?
              </MainTitle>
              <LandFillContainer />
              <ChartPaper gridArea="emission">
                <EmissionContainer>
                  <ChartTitle>
                    What is the estimated CO2 emission saved?
                  </ChartTitle>
                  <Message />
                  <FlexContainer area="num">
                    <FlexContainer
                      direction="column"
                      align="flex-start"
                      width="50%"
                    >
                      <ConvertedNumber
                        data={Math.abs(emission)}
                        size={fontSizeXL}
                        weight={fontWeightL}
                        color={colorGreen}
                        animate
                        smallSuffix
                        suffixSize={fontSizeM}
                        suffixLineHeight={1.5}
                        customSuffix="kg"
                      />
                      <div>
                        CO2 emission avoided
                      </div>
                    </FlexContainer>
                  </FlexContainer>
                  <FlexContainer area="icon">
                      Icon
                  </FlexContainer>
                  <FlexContainer area="text">
                    Equivalent to&nbsp;
                    <ConvertedNumber
                      data={Math.abs(emission) * AVG_MILES_PER_KILOGRAM}
                      weight={fontWeightL}
                      color={colorGreen}
                      display="inline-block"
                      animate
                    />
                    &nbsp;miles driven by an avg. passenger vehicle
                  </FlexContainer>
                </EmissionContainer>
              </ChartPaper>
            </EnvChartsContainer>
            <ReqContainer>
              <a
                href="https://www.furniturebank.org/request-a-pick-up/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="button"
                  src="/static/icons/furnitureBank/requestButton.svg"
                  alt="request button icon"
                />
              </a>
            </ReqContainer>
          </ChartsContainer>
        </DashboardContainer>
      </MainContainer>
    </>
  );
};
export default Dashboard;
