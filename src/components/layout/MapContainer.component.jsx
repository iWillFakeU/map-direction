import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-top: 15px;
  height: 100%;
  width: 100%;
`

const Line = styled.div`
  position: absolute;
  top: 50%;
  height: 1px;
  background-color: red;
  -ms-transform: rotate(${props => `${props.angle}deg` || '0deg'});
  -webkit-transform: rotate(${props => `${props.angle}deg` || '0deg'});
  transform: rotate(${props => `${props.angle}deg` || '0deg'});
  width: 100%;
  z-index: 1;
`

const MapContainer = ({
  children,
  reference,
  angle
}) => {
  const adjustAngle = angle => angle - 90
  return (
    <Container ref={reference}>
      <Line angle={adjustAngle(angle)} />
      {children}
    </Container>
  )
}

export default MapContainer
