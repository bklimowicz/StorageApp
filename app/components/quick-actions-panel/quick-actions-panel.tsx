'use client';

import React from 'react';
import CardWithLink from '../__generics__/card/card-with-link';

const QuickActionsPanel = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-evenly w-9/12 h-3/4">
            <CardWithLink
                name="browseByName"
                link="/browse-by-name"
                cardDetails={{ name: 'Browse by Name' }}
            />
            <CardWithLink
                name="browseByLocation"
                link="/browse-by-location"
                cardDetails={{ name: 'Browse by Location' }}
            />
        </div>
    );
};

export default QuickActionsPanel;
