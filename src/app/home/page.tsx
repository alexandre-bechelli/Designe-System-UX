import Card from '@/components/Card'
import Section from '@/components/Section'
import React from 'react'

export default function Page() {

    const moteisLista = [
        {
            title: 'Suíte Noite',
            rating: 3,
        },
        {
            title: 'Suíte Tarde',
            rating: 1,
        },
        {
            title: 'Suíte Manhã',
            rating: 2,
        },
    ]

    return(

        <>
           <Section>
                <div className="flex flex-col gap-8">
                    {moteisLista.map((item, index) => (
                        <Card
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
           </Section>
        </>

    )

}