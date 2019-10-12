import React, { useEffect, useRef, useState } from "react";
import ReactMapGL from "react-map-gl";

import { MapContainer, ChartPaper, ChartTitle, HEATMAP_SOURCE_ID, heatMapStyles } from "../styles";
import { useSelector } from "react-redux";
import { selectFilteredCoordinates } from "../../../store/furnitureBankReducer/selectors";
import { config } from "../../../config";
import { Message } from "../components";

const initialViewport = {
  latitude: 43.702702563904154,
  longitude: -79.5290090619582,
  zoom: 9.070378236162412
};

const MapContent = () => {
  const filteredCoordinates = useSelector(selectFilteredCoordinates);
  const [initMap, setInitMap] = useState(false);
  const [viewport, setViewPort] = useState(initialViewport);
  const mapRef = useRef();

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
        <ChartTitle withBG>
          In Which areas will your donated furniture be received?
        </ChartTitle>
        <Message noData withBG/>
        <ReactMapGL
          ref={mapRef}
          mapboxApiAccessToken={config.MAP_API}
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={viewport => setViewPort({ ...viewport })}
          mapStyle="mapbox://styles/szeandr/ck1f4skvt0xyl1ct93ti7k1s6"
          onLoad={handleMapLoaded}
        ></ReactMapGL>
      </ChartPaper>
    </MapContainer>
  );
};

export default MapContent;
