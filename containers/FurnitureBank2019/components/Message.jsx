import React from 'react';
import { ChartTitle } from '../styles';
import { useSelector } from 'react-redux';
import { selectAllSelected, selectAdults } from '../../../store/furnitureBankReducer/selectors';


const Message = ({
  noData, withBG
}) => {

  const selected = useSelector(selectAllSelected)
  const adults = useSelector(selectAdults);

  return (
    <>
      {
        selected.length === 0 &&
        <ChartTitle message withBG={withBG}>
            Please start by adding furnitures!
        </ChartTitle> 
      }
      {
        noData && selected.length > 0 && !adults 
          &&
        <ChartTitle message withBG={withBG}>
            Sorry, we don't have data for the selected {selected.length === 1 ? 'item' : 'items'}!
        </ChartTitle>
      }
    </>
  )
}

export default Message