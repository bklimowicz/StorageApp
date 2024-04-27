import React from 'react';
import Button from '../__generics__/button/button';

const FooterPanel = () => {
    return (
        <div className="absolute bottom-0 w-full border-t flex items-center justify-center">
            <Button text="Add new" />
        </div>
    );
};

export default FooterPanel;
