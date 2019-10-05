import React, { useEffect, useRef, useState } from "react";
import {
  ControlContainer as Control,
  MainTitle,
  PanelContainer
} from "./../styles";
import { AutoComplete, ItemChip } from "../../../components"
import { useSelector, useDispatch } from "react-redux";

import {
  addItem,
  incrementItem,
  decrementItem,
  deleteItem
} from "../../../store/furnitureBankReducer/actions";
import {
  selectAllUnselected,
  selectTotalQuantity,
} from "../../../store/furnitureBankReducer/selectors";

const ControlContainer = () => {
  const [dimensions, setDimensions] = useState(undefined);
  const panelContainerRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const panelWidth = panelContainerRef.current.clientWidth;
    const panelHeight = panelContainerRef.current.clientHeight;
    !dimensions && setDimensions({ width: panelWidth, height: panelHeight });
  }, [panelContainerRef, dimensions]);

  const handleSelected = selected => dispatch(addItem(selected));
  const handleIncrementClick = item => dispatch(incrementItem(item));
  const handleDecrementClick = item => dispatch(decrementItem(item));
  const handleDeleteClick = item => dispatch(deleteItem(item));

  const { selectedItems } = useSelector(state => state.furnitureBankReducer);
  const allUnselected = useSelector(selectAllUnselected);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <Control>
      <MainTitle gridArea="title">
        Items to Donate <span>&nbsp; ( {totalQuantity} )</span>
      </MainTitle>
      <PanelContainer
        ref={panelContainerRef}
        height={dimensions && dimensions.height}
      >
        {selectedItems.length > 0 &&
          selectedItems.map(item => (
            <ItemChip
              key={item.name}
              handleIncrementClick={() => handleIncrementClick(item.name)}
              handleDecrementClick={() => handleDecrementClick(item.name)}
              handleDeleteClick={() => handleDeleteClick(item.name)}
              content={item.name}
              quantity={item.quantity}
            />
          ))}
        <AutoComplete
          data={allUnselected}
          itemKey="product_name"
          handleSelected={handleSelected}
          style={
            dimensions && {
              width: dimensions.width
            }
          }
        />
      </PanelContainer>
    </Control>
  );
};

export default ControlContainer
