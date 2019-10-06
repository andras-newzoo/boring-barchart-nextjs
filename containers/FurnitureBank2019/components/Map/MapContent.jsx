import React, { useEffect, useRef, useState } from 'react';
import ReactMapGL from "react-map-gl";

import { MapContainer } from '../../styles/styledContainers';
import { ChartPaper, ChartTitle } from '../../styles/styledElements';
import { HEATMAP_SOURCE_ID, heatMapStyles } from './mapStyles';
import { useSelector } from 'react-redux';
import { selectFilteredCoordinates } from '../../../../store/furnitureBankReducer/selectors';
import { config } from '../../../../config';

const MapContent = () => {

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
    <MapContainer>
    <ChartPaper>
      <ChartTitle
        withBG
      >
        In Which areas will your donated furniture be received?
      </ChartTitle>
      <ReactMapGL
        ref={mapRef}
        mapboxApiAccessToken={config.MAP_API}
        {...viewport}
        mapStyle="mapbox://styles/szeandr/ck1664yzv02iq1crq35ea679o"
        onLoad={handleMapLoaded}
      ></ReactMapGL>
    </ChartPaper>
  </MapContainer>
  )
}

export default MapContent