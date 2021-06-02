import React, {Component} from 'react';
import {Card, CardBody, NavLink} from 'reactstrap';
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';


// To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
const apiKey = 'AIzaSyAAeLv1dDrfhbW2zwDcNkmQh7YJTg3iH7s'

const defaultZoom = 11;
const defaultCenter = {lat: 35.82556, lng: 10.64111};
const locations = [
  {
    lat: 37.431489,
    lng: -122.163719,
    label: 'S',
    draggable: false,
    title: 'Stanford',
    www: 'https://www.stanford.edu/'
  },

];

class MarkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return locations.map((location, index) => {
        return (
          <MarkerWithInfoWindow key={index.toString()} location={location}/>
        )
      }
    );
  }
}

class MarkerWithInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {location} = this.props;

    return (
      <Marker onClick={this.toggle} position={location} title={location.title} label={location.label}>
        {this.state.isOpen &&
        <InfoWindow onCloseClick={this.toggle}>
          <NavLink href={location.www} target="_blank">{location.title}</NavLink>
        </InfoWindow>}
      </Marker>
    )
  }
}

const GoogleMapsComponent = withScriptjs(withGoogleMap((props) => {
    return (
      <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
        {<MarkerList locations={locations}/>}
      </GoogleMap>
    );
  }
));

class ReactGoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>

          <CardBody className="col-6">
            <GoogleMapsComponent
              key="map"
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
              loadingElement={<div style={{height: `100%`}}/>}
              containerElement={<div style={{height: `400px`}}/>}
              mapElement={<div style={{height: `100%`}}/>}
            />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ReactGoogleMaps;
