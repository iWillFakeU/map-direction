import styled from 'styled-components'

export const MapContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  margin-right: 16px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Line = styled.div`
  position: absolute;
  top: 50%;
  height: 1px;
  background-color: ${props => props.color || 'black'};
  -ms-transform: rotate(${props => `${props.angle}deg` || '0deg'});
  -webkit-transform: rotate(${props => `${props.angle}deg` || '0deg'});
  transform: rotate(${props => `${props.angle}deg` || '0deg'});
  width: 100%;
  z-index: 1;
`
