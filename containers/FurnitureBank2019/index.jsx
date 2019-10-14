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
  ReqContainer
} from "./styles";
import {
  ValueContainer,
  MapContainer,
  ControlContainer,
  FamiliesContainer,
  LandFillContainer,
  EmissionContainer
} from "./containers";
import { InfoButton, ModalComponent } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/furnitureBankReducer/actions";
import { useWindowSize } from "../../hooks";



const Dashboard = () => {
  const dispatch = useDispatch();
  const { openModal, modalText } = useSelector(
    state => state.furnitureBankReducer
  );

  const handleToggleModal = () => dispatch(toggleModal());
  const windowSize = useWindowSize();
  const smallLayout = windowSize.width < 768;

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
              <EmissionContainer/>
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
