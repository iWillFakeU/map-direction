import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 500px;
  width: 700px;
  display: flex;
  flex-direction:column;  
`

const MainContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default MainContainer
