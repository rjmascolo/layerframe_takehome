import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const { compose, withProps, withStateHandlers } = require("recompose");

const RestMap = compose(
  withStateHandlers(() => ({
    isOpen: {},
  }), {
    onToggleOpen: ({isOpen}) => {

    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <div>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
    >
      {
        props.restaurants.length > 0 ? props.restaurants.map( (res,i) => {
        return <Marker
          position={{lat: parseFloat(res.lat), lng: parseFloat(res.long)}}
          title={res.name}
          key={i}
          onClick={() => props.openInfoWindow(i)}
        >
        { props.infoWindowOpen === i && <InfoWindow onCloseClick={() => props.openInfoWindow("")}>
        <p>{res.name}</p>
      </InfoWindow>}
    </Marker>
      }) : null}
    </GoogleMap>
  </div>
)

export default RestMap;
