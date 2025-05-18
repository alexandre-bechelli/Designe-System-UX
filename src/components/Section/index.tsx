import React from 'react'

interface SectionProps {
    children?: React.ReactNode
    className?: string
    id?: string
}

export default function Section({ children, id, className }: SectionProps) {

    return(

        <section
            id={id}
            className={`w-full px-4 default-layout ${className}`}
        >
            {children}
        </section>

    )

}