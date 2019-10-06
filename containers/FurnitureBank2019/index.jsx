import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  MainContainer,
  DashboardContainer,
  ControlsContainer,
  ChartsContainer,
  LogoContainer
} from "./styles";
import { ControlContainer } from "./components";
import { useSelector } from "react-redux";
import {
  selectFilteredCoordinates,
  selectFilteredDonationPostalCode
} from "../../store/furnitureBankReducer/selectors";
import { MapContainer } from "./styles/styledContainers";
import styled from "styled-components";
import ReactMapGL from "react-map-gl";
import SimpleDot from "../../components/IconComponents/SimpleDot";
import { heatMapStyles, HEATMAP_SOURCE_ID } from "./components/Map/styles";
import coors from "./test.json";
import _ from "lodash";
import { Paper } from "@material-ui/core";


const MapPaper = styled(Paper)`
  height: 100%;
  width: 100%;
  background: black;
`
const Dashboard = () => {
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

  console.log(_.groupBy(filteredCoordinates, "postal_code"));

  const handleMapLoaded = () => {
    mapRef.current
      .getMap()
      .addSource(HEATMAP_SOURCE_ID, {
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
            <MapContainer>
                <MapPaper>
                  <ReactMapGL
                    ref={mapRef}
                    mapboxApiAccessToken="pk.eyJ1Ijoic3plYW5kciIsImEiOiJjajlpeWxnNHUzbWNiMzNvcnF1ZGUzbG5rIn0.fk33YGLOHSZtT_CMEWoIag"
                    {...viewport}
                    mapStyle="mapbox://styles/szeandr/ck1664yzv02iq1crq35ea679o"
                    onLoad={handleMapLoaded}
                  >
                    {/* <Source type="geojson" data={myGeoJSONData}>
                    <Layer {...heatmapLayer} />
                  </Source> */}
                    {/* <HeatmapOverlay locations={cities} {...viewport}/> */}
                    {/* {coordinatesData.map(coor => (
                      <Marker latitude={coor.latitude} longitude={coor.longitude}>
                        <SimpleDot widht={5} height={5} />
                      </Marker>
                    ))} */}
                  </ReactMapGL>
                </MapPaper>
            </MapContainer>
          </ChartsContainer>
        </DashboardContainer>
      </MainContainer>
    </>
  );
};
export default Dashboard;
