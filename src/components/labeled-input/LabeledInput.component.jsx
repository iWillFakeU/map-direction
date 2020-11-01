import React from 'react'
import { Container, Label } from './LabeledInput.styles'

const LabeledInput = ({
  label,
  labelColor,
  handleInputChange,
  inputValue
}) =>
  <Container>
    <Label
      htmlFor={`${label}-input`}
      color={labelColor}
    >
      {label}
    </Label>
    <input id={`${label}-input`} value={inputValue} onChange={handleInputChange} />
  </Container>

export default LabeledInput
