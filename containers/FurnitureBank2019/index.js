import React, { useEffect }  from "react";
import { Helmet } from "react-helmet";
import { Container, Grid, styled, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, updateFilter } from "../../store/furnitureBankReducer/actions";
import { selectAllLivingRoom, selectAllKitchen, selectLivingRoomAndKitchen, selectFilteredFurniture  } from "../../store/furnitureBankReducer/selectors";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import SimpleDot from "../../components/IconComponents/SimpleDot";

const MapContainer = styled(Paper)({
  height: 300,
  maxHeight: "100%"
});

const Dashboard = () => {
  const viewport = {
    width: "100%",
    height: "100%",
    latitude: 43.65107,
    longitude: -79.347015,
    zoom: 9
  };
  const {
    count,
    filter
   } = useSelector(state => state.furnitureBankReducer)
   const kitchen = useSelector(selectAllKitchen)
   const livingRoomAndKitchen = useSelector(selectLivingRoomAndKitchen)
   const filteredFurnitures = useSelector(selectFilteredFurniture)
   const dispatch = useDispatch()

   useEffect(() => {
     console.log(filteredFurnitures);
   }, [ kitchen, livingRoomAndKitchen, filteredFurnitures, filter ])
   
  return (
    <>
      <Helmet>
        <title>Furniture Bank 2019</title>
      </Helmet>
      <Container>
        <Grid container>
          <Grid item xs={5}>
            <p>{count}</p>
            <MapContainer>
              <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1Ijoic3plYW5kciIsImEiOiJjajlpeWxnNHUzbWNiMzNvcnF1ZGUzbG5rIn0.fk33YGLOHSZtT_CMEWoIag"
                {...viewport}
                mapStyle="mapbox://styles/szeandr/cje3v8qwedxub2st94yulcma7"
              >
                {/* {
                  coordinatesData.map(coor => (
                    <Marker
                      latitude={coor.latitude}
                      longitude={coor.longitude}
                    >
                      <SimpleDot widht={5} height={5} />
                    </Marker>
                  ))
                } */}
              </ReactMapGL>
            </MapContainer>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(updateFilter('living room'))}>Living Room</button>
            <button onClick={() => dispatch(updateFilter('kitchen'))}>Kitchen</button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};



export default Dashboard;
