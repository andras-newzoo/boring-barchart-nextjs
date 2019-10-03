import React, { useEffect }  from "react";
import { Helmet } from "react-helmet";
import { MainContainer, DashboardContainer, ControlsContainer, ChartsContainer, LogoContainer } from "./styles/styledContainers";
// import { Container, Grid, styled as styledMaterial, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// import { useSelector, useDispatch } from "react-redux";
// import styled from 'styled-components'

// import { increment, decrement, updateFilter } from "../../store/furnitureBankReducer/actions";
// import { selectAllLivingRoom, selectAllKitchen, selectLivingRoomAndKitchen, selectFilteredFurniture  } from "../../store/furnitureBankReducer/selectors";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import SimpleDot from "../../components/IconComponents/SimpleDot";
// import { testBorder } from "../../styles/sharedStyles";

const Dashboard = () => {

  return (
    <>
      <Helmet>
        <title>Furniture Bank 2019</title>
      </Helmet>
      <MainContainer>
        <DashboardContainer>
          <ControlsContainer>
            <LogoContainer>
              <img src="/static/logos/furnitureBank.svg" alt="furniture bank icon" />
            </LogoContainer>
          </ControlsContainer>
          <ChartsContainer>
            Charts
          </ChartsContainer>
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