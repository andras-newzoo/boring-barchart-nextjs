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
import { AutoComplete } from "../../components";
// import { Container, Grid, styled as styledMaterial, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
// import styled from 'styled-components'

import { AddItem } from "../../store/furnitureBankReducer/actions";
import { selectAllSelected, selectAllUnselected } from "../../store/furnitureBankReducer/selectors";
// import { selectAllLivingRoom, selectAllKitchen, selectLivingRoomAndKitchen, selectFilteredFurniture  } from "../../store/furnitureBankReducer/selectors";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import SimpleDot from "../../components/IconComponents/SimpleDot";
// import { testBorder } from "../../styles/sharedStyles";

const Dashboard = () => {
  const { productList, selectedItems } = useSelector(state => state.furnitureBankReducer);
  const [ width, setWidth ] = useState(undefined)
  const panelContainerRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    const panelWidth = panelContainerRef.current.clientWidth
    !width && setWidth(panelWidth)
  }, [panelContainerRef, width])

  const handleSelected = selected => {
    dispatch(AddItem(selected))
  }

  const allSelected = useSelector(selectAllSelected)
  const allUnselected = useSelector(selectAllUnselected)

  console.log(selectedItems);
  console.log(allSelected);

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
              <MainTitle
                gridArea="title"
              > 
                Items to Donate
              </MainTitle>
              <PanelContainer
                ref={panelContainerRef}
              >
                <AutoComplete 
                  data={allUnselected}
                  itemKey="product_name"
                  handleSelected={handleSelected}
                  style={{
                    width: width
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
