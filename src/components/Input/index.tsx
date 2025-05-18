import React from 'react'

interface InputProps {
    type: 'text' | 'password'
    value: string
    placeholder: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {

    return(

        <input
            className="w-full h-[46px] text-white-primary text-2xl bg-theme-secondary rounded px-4 focus:outline-none focus:border focus:border-white placeholder:text-white/60"
            {...props}
        />

    )

}