'use client';

import Image from 'next/image';
import React from 'react';
import CardProps from './card-props';

const Card = ({ cardDetails, onClick }: CardProps) => {
    return (
        <div
            className="flex flex-col justify-center items-center border-[1px] rounded p-6 h-52 w-52 mb-3"
            onClick={onClick}
        >
            {cardDetails.image && (
                <Image
                    src={cardDetails.image}
                    alt="image-placeholder"
                    width={20}
                    height={20}
                    style={{ filter: 'invert(100%)' }}
                />
            )}
            <h1 className="text-center">{cardDetails.name}</h1>
            <h3 className="text-center">{cardDetails.description}</h3>
        </div>
    );
};

export default Card;
