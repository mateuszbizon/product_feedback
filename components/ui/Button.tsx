import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "third" | "go-back";
}

const buttonVariants = cva(
    "text-light-3 text-[13px] rounded-xl p-3 font-bold px-5 py-3 transition duration-300",
    {
        variants: {
            variant: {
                primary: "bg-primary-1 hover:bg-primary-1-bright",
                secondary: "bg-primary-2 hover:bg-primary-2-bright",
                third: "bg-dark-2 hover:bg-dark-2-bright",
                "go-back": "text-dark-3 hover:underline p-0"
            },
        } ,
        defaultVariants: {
            variant: "primary",
        }
    }
)

function Button({children, variant, className, ...props}: Props) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
        {children}
    </button>
  )
}

export default Button