import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const RestMap = withScriptjs(withGoogleMap((props) =>
  <div>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
    >
      {props.restaurants.length > 0 ? props.restaurants.map( res => {
        let cords = res.camis.split(" ")
        return <Marker
          position={{ lat: parseFloat(cords[0]), lng: parseFloat(cords[1])}}
          title={res.name}
        />
      }) : null}
    </GoogleMap>
  </div>
))

export default RestMap;
