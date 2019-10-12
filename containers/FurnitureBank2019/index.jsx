import React from "react";
import { Helmet } from "react-helmet";
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
import { ControlContainer, MapContent, Message, PercentageChart } from "./components";
import { makeStyles } from "@material-ui/core/styles";
import { fontSizeM, fontSizeXL, fontWeightL } from "../../styles";
import { ChartPaper } from "./styles/styledElements";
import PersonsIcon from "./components/PersonsIcons";
import { DonationPercentageContainer } from "./styles/styledContainers";
import { FlexContainer } from '../../styles'
import { ConvertedNumber } from "../../components";
import { useSelector } from "react-redux";
import { selectAllSelectedPrice } from "../../store/furnitureBankReducer/selectors";
import { TextSpan } from "../../styles/sharedStyledComponents";

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

const AVG_DONATION_VALUE = 735

const Dashboard = () => {
  const classes = useStyles();

  const totalPrice = useSelector(selectAllSelectedPrice);
  const perc = totalPrice/AVG_DONATION_VALUE
  const fullCount = Math.floor(perc)

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
              <ChartPaper gridArea="value">
                <ValueContainer>
                  <ChartTitle contained>
                    What is the estimated value of your donation?
                  </ChartTitle>
                  <FlexContainer
                    justify="space-evenly"
                  >
                    <div/>
                    {
                      !!totalPrice && 
                      <ConvertedNumber
                        data={totalPrice}
                        size={fontSizeXL}
                        weight={fontWeightL}
                        color={colorGreen}
                        animate
                        prefix="$"
                      />
                    }
                  </FlexContainer>
                  <DonationPercentageContainer>
                    {
                      !!perc &&
                      <>
                        <FlexContainer
                          area="chart"
                        >
                          <PercentageChart
                            data={perc}
                            fullCount={fullCount}
                          />
                        </FlexContainer>
                        <FlexContainer
                          area="subchart"
                          align="flex-start"
                          justify="flex-start"
                          width="90%"
                        >
                          {
                            Array.from(Array(Math.floor(perc)), (_, i) => i + 1 ).map(el => (
                              <img
                                key={el}
                                style={{ height: 25, marginLeft: 4 }}
                                className="bar"
                                src="/static/icons/furnitureBank/bar.svg"
                                alt="completed bar icon"
                              />
                            ))
                          }
                        </FlexContainer>
                        <FlexContainer
                          area="percentage"
                        >
                          <FlexContainer
                            align="flex-end"
                          >
                            <ConvertedNumber
                              data={perc}
                              size={fontSizeXL}
                              weight={fontWeightL}
                              color={colorGreen}
                              animate
                              perc
                            /> 
                            <TextSpan>
                              &nbsp;of avg. donation value
                            </TextSpan>
                          </FlexContainer>
                        </FlexContainer>
                      </>
                    }
                  </DonationPercentageContainer>
                  <Message />
                </ValueContainer>
              </ChartPaper>
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
