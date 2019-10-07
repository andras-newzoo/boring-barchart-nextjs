import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import _ from "lodash";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import {
  MainContainer,
  DashboardContainer,
  ControlsContainer,
  ChartsContainer,
  LogoContainer,
  MainTitle,
  ChartTitle,
  colorGreen,
  SocChartsContainer,
  FamilyContainer,
  ValueContainer,
  EnvChartsContainer,
  LandFillContainer,
  EmissionContainer,
  ReqContainer
} from "./styles";
import { ControlContainer, MapContent, Message } from "./components";
import { makeStyles } from "@material-ui/core/styles";
import { fontSizeM } from "../../styles/sharedStyles";
import { ChartPaper } from "./styles/styledElements";
import PersonsIcon from "./components/PersonsIcons";

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  button: {
    background: colorGreen,
    color: "white",
    fontSize: fontSizeM,
    "&:hover": {
      background: colorGreen,
      color: "white"
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Furniture Bank 2019</title>
      </Helmet>
      <MainContainer>
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
              <MapContent />
              <ChartPaper gridArea="families">
                <FamilyContainer>
                  <ChartTitle>
                    Who will be likely to receive your donation?
                  </ChartTitle>
                  <Message noData />
                  <PersonsIcon />
                </FamilyContainer>
              </ChartPaper>
              <ValueContainer>
                <ChartPaper>
                  <Message />
                </ChartPaper>
              </ValueContainer>
            </SocChartsContainer>
            <EnvChartsContainer>
              <MainTitle gridArea="title">
                What is the estimated environmental impact of your donation?
              </MainTitle>
              <LandFillContainer>
                <ChartPaper>
                  <Message />
                </ChartPaper>
              </LandFillContainer>
              <EmissionContainer>
                <ChartPaper>
                  <Message />
                </ChartPaper>
              </EmissionContainer>
            </EnvChartsContainer>
            <ReqContainer>
              <Button
                className={classes.button}
                variant="contained"
                disableRipple
              >
                Request a Pickup
                <SendIcon fontSize="small" className={classes.rightIcon} />
              </Button>
            </ReqContainer>
          </ChartsContainer>
        </DashboardContainer>
      </MainContainer>
    </>
  );
};
export default Dashboard;
