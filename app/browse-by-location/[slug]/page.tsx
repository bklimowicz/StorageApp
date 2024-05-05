import Card from '@/components/__generics__/card/card';
import LocationPicker from '@/components/location-picker/location-picker';
import React from 'react';

async function getData(slug: string) {
    const res = await fetch(
        `http://localhost:5026/api/products?location=${slug}`,
        {
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error('Error fetching data');
    }

    return res.json();
}

const BrowseByLocation = async ({
    params: { slug },
}: {
    params: { slug: string };
}) => {
    const data = await getData(slug);
    return (
        <div className="flex items-center flex-col justify-center h-[700px]">
            <div className="flex">
                <LocationPicker />
            </div>
            {data.map((item: any) => (
                <Card
                    key={item.id}
                    cardDetails={{
                        name: item.name,
                        description: `Quantity: ${item.quantity}`,
                    }}
                />
            ))}
        </div>
    );
};

export default BrowseByLocation;
