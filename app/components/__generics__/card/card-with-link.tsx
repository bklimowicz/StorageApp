import React from 'react';
import CardProps from './card-props';
import Link from 'next/link';
import Card from './card';

interface LinkProps {
    name: string;
    link: string;
}

type CardWithLinkProps = CardProps & LinkProps;

const CardWithLink = ({
    cardDetails,
    name,
    link,
    onClick,
}: CardWithLinkProps) => {
    return (
        <>
            <Link key={name} href={link}>
                <Card cardDetails={cardDetails} onClick={onClick} />
            </Link>
        </>
    );
};

export default CardWithLink;
