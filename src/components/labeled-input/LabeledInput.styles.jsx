import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`
export const Label = styled.label`
  color: ${props => props.color || 'black'};
  margin-bottom: 0px;
`
