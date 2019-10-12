import React from "react";
import {
  ChartPaper,
  ChartTitle,
  ValueContainer as Container,
  colorGreen,
  DonationPercentageContainer
} from "../styles";
import {
  FlexContainer,
  fontSizeXL,
  fontWeightL,
  TextSpan,
  fontSizeM
} from "../../../styles";
import { useWindowSize } from "../../../hooks";
import { useSelector } from "react-redux";
import { selectAllSelectedPrice } from "../../../store/furnitureBankReducer/selectors";
import { ConvertedNumber } from "../../../components";
import { PercentageChart, Message } from "../components";

const AVG_DONATION_VALUE = 735;

const ValueContainer = () => {
  const windowSize = useWindowSize();
  const totalPrice = useSelector(selectAllSelectedPrice);
  const perc = totalPrice / AVG_DONATION_VALUE;
  const fullCount = Math.floor(perc);
  const smallLayout = windowSize.width < 768;
  return (
    <ChartPaper gridArea="value">
      <Container>
        <ChartTitle contained>
          What is the estimated value of your donation?
        </ChartTitle>
        <FlexContainer justify="space-evenly" area="abs">
          {!smallLayout && <div />}
          {!!totalPrice && (
            <ConvertedNumber
              data={totalPrice}
              size={fontSizeXL}
              weight={fontWeightL}
              color={colorGreen}
              animate
              prefix="$"
            />
          )}
        </FlexContainer>
        <DonationPercentageContainer>
          {!!perc && (
            <>
              <FlexContainer area="chart" height={smallLayout ? "35%" : "70%"}>
                <PercentageChart
                  data={perc}
                  fullCount={fullCount}
                  direction="horizontal"
                />
              </FlexContainer>
              <FlexContainer
                area="subchart"
                align="flex-start"
                justify={smallLayout && "flex-end"}
              >
                <FlexContainer
                  justify="flex-start"
                  align="flex-start"
                  width="90%"
                  height="90%"
                >
                  {Array.from(Array(Math.floor(perc)), (_, i) => i + 1).map(
                    el => (
                      <img
                        key={el}
                        style={{ height: smallLayout ? 40 : 25, marginLeft: 4 }}
                        className="bar"
                        src="/static/icons/furnitureBank/bar.svg"
                        alt="completed bar icon"
                      />
                    )
                  )}
                </FlexContainer>
              </FlexContainer>
              <FlexContainer
                area="percentage"
                align={smallLayout && "flex-start"}
              >
                <FlexContainer
                  align={smallLayout ? "flex-start" : "flex-end"}
                  paddingLeft={smallLayout && 1}
                  height={smallLayout ? "50%" : "75%"}
                  direction={smallLayout && "column"}
                >
                  <ConvertedNumber
                    data={perc}
                    size={fontSizeXL}
                    weight={fontWeightL}
                    color={colorGreen}
                    animate
                    smallSuffix
                    suffixSize={fontSizeM}
                    suffixLineHeight={1.35}
                    perc
                  />
                  <TextSpan>&nbsp;of avg. donation value</TextSpan>
                </FlexContainer>
              </FlexContainer>
            </>
          )}
        </DonationPercentageContainer>
        <Message />
      </Container>
    </ChartPaper>
  );
};

export default ValueContainer;
