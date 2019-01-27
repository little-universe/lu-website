import "./styles.scss"

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const styles = require('../../utils/GoogleMapStyles.json')

const LuHqMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: 40.713257,
        lng: -73.943672
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles // change default map styles
      }}
    >
      <Marker
        icon={{
            url: '../../static/marker.svg',
            anchor: new google.maps.Point(65,100),
            scaledSize: new google.maps.Size(130,130)
            }}
        position={{
          lat: 40.713257,
          lng: -73.943672
        }}
      />
    </GoogleMap>
  ))
)

export default LuHqMap
