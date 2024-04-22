import Image from 'next/image'
import React from 'react'

interface CardProps {
    cardDetails: CardDetails
}

interface CardDetails {
    name: string,
    description: string
}

const Card = ({ cardDetails }: CardProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Image src='@/app/styles/images/image-placeholder.png' alt="image-placeholder" />
        <h1 className='text-center'>{cardDetails.name}</h1>
        <h3 className='text-center'>{cardDetails.description}</h3>
    </div>
  )
}

export default Card