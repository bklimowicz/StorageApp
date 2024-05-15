import CardWithLink from '@/components/__generics__/card/card-with-link';
import ProductLocation from '@/constants/productLocations';
import React from 'react';

const Page = () => {
    return (
        <div className="overflow-y">
            {Object.values(ProductLocation).map((key) => (
                <CardWithLink
                    key={key}
                    name="key"
                    link="browse-by-location/${key}"
                    cardDetails={{ name: 'Browse by Name' }}
                />
            ))}
        </div>
    );
};

export default Page;
