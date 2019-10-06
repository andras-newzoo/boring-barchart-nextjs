import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  MainContainer,
  DashboardContainer,
  ControlsContainer,
  ChartsContainer,
  LogoContainer,
  MainTitle,
  colorRedDark,
  colorGreen
} from "./styles";
import { ControlContainer } from "./components";
import { useSelector } from "react-redux";
import { selectFilteredCoordinates } from "../../store/furnitureBankReducer/selectors";
import {
  MapContainer,
  SocChartsContainer,
  FamilyContainer,
  ValueContainer,
  EnvChartsContainer,
  LandFillContainer,
  EmissionContainer,
  ReqContainer
} from "./styles/styledContainers";
import styled from "styled-components";
import ReactMapGL from "react-map-gl";
import { heatMapStyles, HEATMAP_SOURCE_ID } from "./components/Map/styles";
import _ from "lodash";
import { Paper, Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import { fontSizeM } from "../../styles/sharedStyles";
import { config } from "../../config";

const MapPaper = styled(Paper)`
  height: 100%;
  width: 100%;
`;

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    background: colorGreen,
    color: 'white',
    fontSize: fontSizeM,
    '&:hover': {
      background: colorGreen,
      color: 'white'
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const filteredCoordinates = useSelector(selectFilteredCoordinates);
  const [initMap, setInitMap] = useState(false);
  const mapRef = useRef();
  const viewport = {
    width: "100%",
    height: "100%",
    latitude: 43.66107,
    longitude: -79.477015,
    zoom: 8
  };

  const handleMapLoaded = () => {
    mapRef.current.getMap().addSource(HEATMAP_SOURCE_ID, {
      type: "geojson",
      data: makeGeoJSON(filteredCoordinates)
    });
    mapRef.current.getMap().addLayer(heatMapStyles);
    setInitMap(true);
  };

  useEffect(() => {
    if (initMap) {
      mapRef.current
        .getMap()
        .getSource(HEATMAP_SOURCE_ID)
        .setData(makeGeoJSON(filteredCoordinates));
    }
  }, [filteredCoordinates, initMap]);

  const makeGeoJSON = data => {
    if (!data) return undefined;
    return {
      type: "FeatureCollection",
      features: data.map(feature => {
        return {
          type: "Feature",
          properties: {
            id: feature.postal_code
          },
          geometry: {
            type: "Point",
            coordinates: feature.coors
              ? [feature.coors.longitude, feature.coors.latitude, 0]
              : [0, 0, 0]
          }
        };
      })
    };
  };

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
            <ControlContainer />
          </ControlsContainer>
          <ChartsContainer>
            <SocChartsContainer>
              <MainTitle gridArea="title">
                What is the estimated social impact of your donation?
              </MainTitle>
              <MapContainer>
                <MapPaper>
                  <ReactMapGL
                    ref={mapRef}
                    mapboxApiAccessToken={config.MAP_API}
                    {...viewport}
                    mapStyle="mapbox://styles/szeandr/ck1664yzv02iq1crq35ea679o"
                    onLoad={handleMapLoaded}
                  ></ReactMapGL>
                </MapPaper>
              </MapContainer>
              <FamilyContainer>
                <MapPaper></MapPaper>
              </FamilyContainer>
              <ValueContainer>
                <MapPaper></MapPaper>
              </ValueContainer>
            </SocChartsContainer>
            <EnvChartsContainer>
              <MainTitle gridArea="title">
                What is the estimated environmental impact of your donation?
              </MainTitle>
              <LandFillContainer>
                <MapPaper></MapPaper>
              </LandFillContainer>
              <EmissionContainer>
                <MapPaper></MapPaper>
              </EmissionContainer>
            </EnvChartsContainer>
            <ReqContainer>
              <MainTitle spec>
                
              </MainTitle>
              <Button
                className={classes.button}
                variant="contained"
                disableRipple
              >      
                Request a Pickup
                <SendIcon fontSize="small" className={classes.rightIcon} />
              </Button>
            </ReqContainer>
          </ChartsContainer>
        </DashboardContainer>
      </MainContainer>
    </>
  );
};
export default Dashboard;
