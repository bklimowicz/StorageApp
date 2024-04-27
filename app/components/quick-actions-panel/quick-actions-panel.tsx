'use client';

import React from 'react';
import Card from '../__generics__/card/card';

const QuickActionsPanel = () => {
    return (
        <div className="flex flex-row justify-center gap-16 w-9/12 h-3/4">
            <Card
                cardDetails={{ name: 'Browse by Name' }}
                onClick={() => console.log('klikłem')}
            />
            <Card
                cardDetails={{ name: 'Browse by Location' }}
                onClick={() => console.log('klikłem')}
            />
        </div>
    );
};

export default QuickActionsPanel;
