import Card from '@/components/__generics__/card/card';
import SearchBarPanel from '@/components/search-bar-panel/search-bar-panel';
import React from 'react';

async function getData() {
    const res = await fetch('http://localhost:5026/api/products', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Error fetching data');
    }

    return res.json();
}

const BrowseByName = async () => {
    const data = await getData();
    return (
        <div className="flex items-center flex-col justify-center h-[700px]">
            <SearchBarPanel />
            <div className="flex items-center justify-center w-full flex-wrap h-full overflow-auto">
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
        </div>
    );
};

export default BrowseByName;
