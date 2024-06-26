import React from 'react'
import { FieldError } from 'react-hook-form'

type Props = {
  errors?: FieldError;
}

function InputErrorMessage({ errors }: Props) {
  return (
    <span className={`input-error-message ${errors ? "visible" : "invisible"}`}>{errors ? errors.message : "error"}</span>
  )
}

export default InputErrorMessage