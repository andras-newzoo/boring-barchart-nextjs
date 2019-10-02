import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { Container, Grid, styled, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import { increment, decrement } from '../../store/furnitureBank2019/actions'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import SimpleDot from '../../components/IconComponents/SimpleDot';
import coordinatesData from '../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json'

const MapContainer = styled(Paper)({
  height: 300,
  maxHeight: '100%'
})

class Dashboard extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 43.651070,
      longitude: -79.347015,
      zoom: 10.5,
    },
    selectedPostalCode: undefined
  };

  
  render() { 
    console.log(this.props)
    return ( 
      <>
      {/* <Helmet>
        <title>Furniture Bank 2019</title>
      </Helmet> */}
      <Container>
        <Grid container>
          <Grid item xs={5}>
            <p>
              {this.props.furnitureBank2019}
            </p>
            <MapContainer>
              <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1Ijoic3plYW5kciIsImEiOiJjajlpeWxnNHUzbWNiMzNvcnF1ZGUzbG5rIn0.fk33YGLOHSZtT_CMEWoIag"
                {...this.state.viewport}
                mapStyle="mapbox://styles/szeandr/cje3v8qwedxub2st94yulcma7"
                // onViewportChange={(viewport) => this.setState({viewport})}
              >
                <Marker
                  latitude={this.state.viewport.latitude}
                  longitude={this.state.viewport.longitude}
                >
                  <SimpleDot
                    widht={10}
                    height={10}
                  />
                </Marker>
              </ReactMapGL>
            </MapContainer>
            <button onClick={this.props.increment}>
              Increment
            </button>
            <button onClick={this.props.decrement}>
              Decrement
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
     );
  }
}
 
export default connect(
  state => state, { increment, decrement }
)(Dashboard) ;