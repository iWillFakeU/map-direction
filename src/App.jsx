/* global chrome */
import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import MainContainer from './components/layout/MainContainer.component'
import MapContainer from './components/layout/MapContainer.component'
import LabeledInput from './components/LabeledInput.component'

const App = () => {
  const [angle, setAngle] = useState(0)

  const mapContainer = useRef()

  mapboxgl.accessToken = 'pk.eyJ1IjoiaXdpbGxmYWtldSIsImEiOiJja2djZ2R1cG0wNjVkMzJwOHdmcWtpZGprIn0.jKRP72IXpaCwZpEb-K8UEg'

  useEffect(() => {
    chrome.storage && chrome.storage.sync.get(['mapDirectionCoordinates'],
      (result) => {
        console.log('loaded data', result)
      })

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-9, 39],
      zoom: 6
    })

    map.
  }, [])

  const handleInputChange = e => setAngle(e.target.value)

  return (
    <MainContainer>

      <LabeledInput
        label='Angulo'
        handleInputChange={handleInputChange}
        inputValue={angle}
      />

      <MapContainer
        reference={mapContainer}
        angle={angle}
      />
    </MainContainer>
  )
}

export default App
