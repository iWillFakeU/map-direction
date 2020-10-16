import React from 'react'

const LabeledInput = ({ label, handleInputChange, inputValue }) =>
  <div>
    <label htmlFor={`${label}-input`}>{label}</label>
    <input id={`${label}-input`} value={inputValue} onChange={handleInputChange} />
  </div>

export default LabeledInput
