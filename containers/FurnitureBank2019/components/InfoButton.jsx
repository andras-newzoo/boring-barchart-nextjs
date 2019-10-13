import React from "react";
import { FixedInfoButton, QuestionMarkGillSemiBold } from "../../../components";
import { colorGreen } from "../styles";

const InfoButton = ({
  handleClick
}) => {
  
  return (
    <FixedInfoButton
      top={0}
      right={0}
      height={120}
      width={120}
      round
      corner
      background={colorGreen}
      translate="50%, -50%"
      iconComponent={
        <QuestionMarkGillSemiBold height={25} width={25} fill="#fff" />
      }
      iconLeft="19%"
      iconBottom="17%"
      handleClick={handleClick}
    />
  );
};

export default InfoButton;
