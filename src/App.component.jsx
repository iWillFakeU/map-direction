import React from 'react'
import { Button, Container } from './App.styles'
import Map from './components/map/Map.component'

const App = () => {
  const [showMap, setShowMap] = React.useState(false)

  return (
    <Container>
      <Button onClick={() => setShowMap(!showMap)}>
        {showMap ? 'Esconder mapa' : 'Mostrar mapa'}
      </Button>
      {showMap && <Map />}
    </Container>
  )
}

export default App
