import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    register: UseFormRegister<any>
    errors?: FieldError
}

function Textarea({ register, errors, ...props }: Props) {
  return (
    <textarea {...props} {...register(props.name as string)} className={`input-1 ${errors && "input-error-1"}`}></textarea>
  )
}

export default Textarea