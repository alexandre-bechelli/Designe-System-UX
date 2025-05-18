import React from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
  
    return(

        <button
            className="flex items-center justify-center w-full h-[62px] bg-button-primary text-black text-2xl rounded transition-all cursor-pointer hover:scale-105"
            onClick={onClick}
        >
            {label}
        </button>

    )

}