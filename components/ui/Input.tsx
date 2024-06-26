import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegister<any>
    errors?: FieldError
}

function Input({ register, errors, ...props }: Props) {
  return (
    <input {...props} {...register(props.name as string)} className={`input-1 ${errors && "input-error-1"}`} />
  )
}

export default Input