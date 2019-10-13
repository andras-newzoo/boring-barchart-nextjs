import React, { useState, useEffect } from "react";
import {
  ChartPaper,
  ChartTitle,
  LandFillSubContainer,
  LandFillContainer as Container,
  colorGreen,
  ContainerChart
} from "../styles";
import { Message } from "../components";
import {
  selectAllSelectedWeight,
  selectAllSelectedVolume
} from "../../../store/furnitureBankReducer/selectors";
import { useSelector } from "react-redux";
import { getArray } from "../../../utils";
import {
  FlexContainer,
  fontSizeXL,
  fontWeightL,
  fontSizeM,
  TextSpan
} from "../../../styles";
import { ConvertedNumber } from "../../../components";

const AVG_MONTHLY_WASTE = 130;
const AVG_WEEKLY_WASTE = 30;
const CARGO_VOLUME = 1179;

const LandFillContainer = () => {
  const [monthCount, setMonthCount] = useState(0);
  const [weekCount, setWeekCount] = useState(0);

  const weight = useSelector(selectAllSelectedWeight);
  const volume = useSelector(selectAllSelectedVolume);

  useEffect(() => {
    const getMonth = () => Math.floor(weight / AVG_MONTHLY_WASTE);
    if (getMonth() !== monthCount) {
      setMonthCount(getMonth());
    }
  }, [monthCount, weight]);

  useEffect(() => {
    const getWeek = () =>
      Math.floor((weight - monthCount * AVG_MONTHLY_WASTE) / AVG_WEEKLY_WASTE);
    if (getWeek() !== weekCount) {
      setWeekCount(getWeek());
    }
  }, [monthCount, weekCount, weight]);

  const monthText = monthCount > 1 ? "months" : "month";
  const weekText = weekCount > 1 ? "weeks" : "week";

  const monthArray = getArray(monthCount);
  const weekArray = getArray(weekCount);

  return (
    <ChartPaper gridArea="landfill">
      <Container>
        <ChartTitle>What is the estimated amount of waste saved?</ChartTitle>
        <Message />
        {!!weight && (
          <LandFillSubContainer gridArea="weight">
            <FlexContainer area="num">
              <ConvertedNumber
                data={weight}
                size={fontSizeXL}
                weight={fontWeightL}
                color={colorGreen}
                animate
                smallSuffix
                suffixSize={fontSizeM}
                suffixLineHeight={1.5}
                customSuffix="lbs"
              />
            </FlexContainer>
            <FlexContainer area="icon" align="flex-end">
              {monthArray &&
                monthArray.length > 0 &&
                monthArray.map(el => (
                  <img
                    key={el}
                    className="garbage-month"
                    src="/static/icons/furnitureBank/garbage.svg"
                    alt="garbage month icon"
                  />
                ))}
              {weekArray &&
                weekArray.length > 0 &&
                weekArray.map(el => (
                  <img
                    key={el}
                    className="garbage-week"
                    src="/static/icons/furnitureBank/garbage.svg"
                    alt="garbage week icon"
                  />
                ))}
            </FlexContainer>
            <FlexContainer area="text">
              <TextSpan>
                {!!monthCount && `${monthCount} ${monthText}`}
                {!!monthCount && !!weekCount && ` and `}
                {!!weekCount
                  ? `${weekCount} ${weekText}`
                  : !monthCount && `Less than 1 ${weekText}`}{" "}
                of waste in an avg. Canadian household
              </TextSpan>
            </FlexContainer>
          </LandFillSubContainer>
        )}
        {!!volume && (
          <LandFillSubContainer gridArea="volume">
            <FlexContainer area="num">
              <ConvertedNumber
                data={volume}
                size={fontSizeXL}
                weight={fontWeightL}
                color={colorGreen}
                animate
                smallSuffix
                suffixSize={fontSizeM}
                suffixLineHeight={1.5}
                customSuffix="cu.ft"
              />
            </FlexContainer>
            <FlexContainer area="icon" align="flex-start">
              <ContainerChart height={volume / CARGO_VOLUME} />
            </FlexContainer>
            <FlexContainer area="icon">
              <img
                className="container"
                src="/static/icons/furnitureBank/container.svg"
                alt="container icon"
              />
            </FlexContainer>
            <FlexContainer area="text">
              <TextSpan>
                Equivalent to{" "}
                <ConvertedNumber
                  data={volume / CARGO_VOLUME}
                  display="inline-block"
                  weight={fontWeightL}
                  color={colorGreen}
                  perc
                  animate
                />{" "}
                of an avg. cargo container
              </TextSpan>
            </FlexContainer>
          </LandFillSubContainer>
        )}
      </Container>
    </ChartPaper>
  );
};

export default LandFillContainer;
