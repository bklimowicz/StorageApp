'use client';

import Image from 'next/image';
import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CardProps {
    cardDetails: CardDetails;
    onClick?: () => void;
}

interface CardDetails {
    name: string;
    description?: string;
    image?: string | StaticImport;
}

const Card = ({ cardDetails, onClick }: CardProps) => {
    return (
        <div
            className="flex flex-col justify-center items-center border-[1px] p-6 h-32 w-32"
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
