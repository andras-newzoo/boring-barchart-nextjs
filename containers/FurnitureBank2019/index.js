import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  MainContainer,
  DashboardContainer,
  ControlsContainer,
  ChartsContainer,
  LogoContainer,
  ControlContainer,
  MainTitle,
  PanelContainer
} from "./styles";
import { AutoComplete, ItemChip } from "../../components";
import { useSelector, useDispatch } from "react-redux";
// import styled from 'styled-components'

import {
  addItem,
  incrementItem,
  decrementItem,
  deleteItem
} from "../../store/furnitureBankReducer/actions";
import { selectAllUnselected } from "../../store/furnitureBankReducer/selectors";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import SimpleDot from "../../components/IconComponents/SimpleDot";

const Dashboard = () => {
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
  const handleDeleteClick = item => dispatch(deleteItem(item))

  const { selectedItems } = useSelector(state => state.furnitureBankReducer);
  const allUnselected = useSelector(selectAllUnselected);

  console.log(selectedItems);

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
            <ControlContainer>
              <MainTitle gridArea="title">Items to Donate</MainTitle>
              <PanelContainer ref={panelContainerRef} height={dimensions && dimensions.height}>
                {selectedItems.length > 0 &&
                  selectedItems.map(item => (
                    <ItemChip
                      key={item.name}
                      handleIncrementClick={() =>
                        handleIncrementClick(item.name)
                      }
                      handleDecrementClick={() =>
                        handleDecrementClick(item.name)
                      }
                      handleDeleteClick={() => handleDeleteClick(item.name)}
                      content={item.name}
                      quantity={item.quantity}
                    />
                  ))}
                <AutoComplete
                  data={allUnselected}
                  itemKey="product_name"
                  handleSelected={handleSelected}
                  style={dimensions && {
                    width: dimensions.width
                  }}
                />
              </PanelContainer>
            </ControlContainer>
          </ControlsContainer>
          <ChartsContainer>Charts</ChartsContainer>
        </DashboardContainer>
      </MainContainer>
    </>
  );
};
export default Dashboard;

// const viewport = {
//   width: "100%",
//   height: "100%",
//   latitude: 43.65107,
//   longitude: -79.347015,
//   zoom: 9
// };
// const {
//   count,
//   filter
//  } = useSelector(state => state.furnitureBankReducer)
//  const kitchen = useSelector(selectAllKitchen)
//  const livingRoomAndKitchen = useSelector(selectLivingRoomAndKitchen)
//  const filteredFurnitures = useSelector(selectFilteredFurniture)
//  const dispatch = useDispatch()

//  useEffect(() => {
//    console.log(filteredFurnitures);
//  }, [ kitchen, livingRoomAndKitchen, filteredFurnitures, filter ])

// {/* <MapContainer>
//   <ReactMapGL
//     mapboxApiAccessToken="pk.eyJ1Ijoic3plYW5kciIsImEiOiJjajlpeWxnNHUzbWNiMzNvcnF1ZGUzbG5rIn0.fk33YGLOHSZtT_CMEWoIag"
//     {...viewport}
//     mapStyle="mapbox://styles/szeandr/cje3v8qwedxub2st94yulcma7"
//   > */}
//     {/* {
//       coordinatesData.map(coor => (
//         <Marker
//           latitude={coor.latitude}
//           longitude={coor.longitude}
//         >
//           <SimpleDot widht={5} height={5} />
//         </Marker>
//       ))
//     } */}
//   {/* </ReactMapGL>
// </MapContainer> */}
// {/* <button onClick={() => dispatch(decrement())}>Decrement</button>
// <button onClick={() => dispatch(increment())}>Increment</button>
// <button onClick={() => dispatch(updateFilter('living room'))}>Living Room</button>
// <button onClick={() => dispatch(updateFilter('kitchen'))}>Kitchen</button> */}
