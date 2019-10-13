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
  ChartTitle
} from "./styles";
import {
  ValueContainer,
  MapContainer,
  ControlContainer,
  FamiliesContainer,
  LandFillContainer
} from "./containers";
import { Message } from "./components";
import { FixedInfoButton, QuestionMarkGillSemiBold } from "../../components";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Furniture Bank 2019</title>
      </Helmet>
      <MainContainer>
        <FixedInfoButton
          top={0}
          right={0}
          height={120}
          width={120}
          round
          corner
          translate="50%, -50%"
          iconComponent={
            <QuestionMarkGillSemiBold height={20} width={20} fill="#fff" />
          }
          iconLeft="20%"
          iconBottom="20%"
        />
        <DashboardContainer>
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
              <ValueContainer />
            </SocChartsContainer>
            <EnvChartsContainer>
              <MainTitle gridArea="title">
                What is the estimated environmental impact of your donation?
              </MainTitle>
              <LandFillContainer />
              <EmissionContainer>
                <ChartPaper>
                  <ChartTitle>
                    What is the estimated CO2 emission saved?
                  </ChartTitle>
                  <Message />
                </ChartPaper>
              </EmissionContainer>
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
