import React from 'react'
import mapboxgl from 'mapbox-gl'

import {
  MapContainer,
  OptionsContainer,
  Line
} from './Map.styles'
import { MAP_TYPE } from '../../utils/constants'
import LabeledInput from '../labeled-input/LabeledInput.component'

const Map = () => {
  const mapContainer = React.useRef()
  const [map, setMap] = React.useState(null)
  const [mapStyle, setMapStyle] = React.useState('SATELLITE')
  const [wavesAngle, setWavesAngle] = React.useState(0)
  const [windAngle, setWindAngle] = React.useState(90)

  mapboxgl.accessToken = 'pk.eyJ1IjoiaXdpbGxmYWtldSIsImEiOiJja2djZ2R1cG0wNjVkMzJwOHdmcWtpZGprIn0.jKRP72IXpaCwZpEb-K8UEg'

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAP_TYPE[mapStyle],
      center: [-9, 39],
      zoom: 7
    })

    map.on('load', () => {
      setMap(map)
    })
  }, [])

  const adjustAngle = angle => angle - 90
  const _onWavesAngleChange = e => setWavesAngle(e.target.value)
  const _onWindAngleChange = e => setWindAngle(e.target.value)
  const _onMapStyleChange = ({ target: { value } }) => {
    setMapStyle(value)
    map.setStyle(MAP_TYPE[value] || MAP_TYPE.SATELLITE)
  }

  return (
    <>
      <MapContainer
        ref={mapContainer}
      >
        <Line
          angle={adjustAngle(wavesAngle)}
          color='red'
        />
        <Line
          angle={adjustAngle(windAngle)}
          color='yellow'
        />
      </MapContainer>
      <OptionsContainer>
        <LabeledInput
          label='Vaga'
          labelColor='red'
          handleInputChange={_onWavesAngleChange}
          inputValue={wavesAngle}
        />
        <LabeledInput
          label='Vento'
          labelColor='yellow'
          handleInputChange={_onWindAngleChange}
          inputValue={windAngle}
        />
        <select
          value={mapStyle}
          onChange={_onMapStyleChange}
        >
          <option value='SATELLITE'> Satelite</option>
          <option value='SATELLITE_STREETS'> Satelite e estradas</option>
          <option value='STREETS'> Estradas</option>
        </select>
      </OptionsContainer>
    </>
  )
}

export default Map
