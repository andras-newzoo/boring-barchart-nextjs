import React from 'react';
import { ChartPaper, EmissionContainer as Container, ChartTitle, colorGreen } from '../styles';
import { FlexContainer, fontSizeXL, fontWeightL, fontSizeM } from '../../../styles';
import { ConvertedNumber } from '../../../components';
import { Message } from '../components';
import { useSelector } from 'react-redux';
import { selectAllSelectedEmission } from '../../../store/furnitureBankReducer/selectors';

///https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator
const AVG_MILES_PER_KILOGRAM = 2.4;

const EmissionContainer = () => {

  const emission = useSelector(selectAllSelectedEmission);
  return ( 
    <ChartPaper gridArea="emission">
                <Container>
                  <ChartTitle>
                    What is the estimated CO2 emission saved?
                  </ChartTitle>
                  <Message noData />
                  {!!emission && (
                    <>
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
                          <div>CO2 emission avoided</div>
                        </FlexContainer>
                      </FlexContainer>
                      <FlexContainer area="icon">
                        <img
                          className="button"
                          src="/static/icons/furnitureBank/car.svg"
                          alt="car emission icon"
                        />
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
                    </>
                  )}
                </Container>
              </ChartPaper>
   );
}
 
export default EmissionContainer;