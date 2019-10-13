import React from "react";
import { FamilyContainer, ChartPaper, ChartTitle } from "../styles";
import { Message, PersonIcons, BarChart } from "../components";
import { FlexContainer } from "../../../styles";
import { useSelector } from "react-redux";
import { selectTopGroups } from "../../../store/furnitureBankReducer/selectors";

const FamiliesContainer = () => {

  const clientGroups = useSelector(selectTopGroups)

  return (
    <ChartPaper gridArea="families">
      <FamilyContainer>
        <ChartTitle>Who will be likely to receive your donation?</ChartTitle>
        <Message noData />
        <PersonIcons />
        <FlexContainer height="75%" width="85%" marginTop={1}>
          {!!clientGroups[0].share && <BarChart data={clientGroups} />}
        </FlexContainer>
      </FamilyContainer>
    </ChartPaper>
  );
};

export default FamiliesContainer;
