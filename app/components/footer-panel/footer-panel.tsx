import React from 'react';
import Button from '../__generics__/button/button';
import Link from 'next/link';

const FooterPanel = () => {
    return (
        <div className="w-full border-t border-primary flex items-center justify-center">
            <Link href={'/add-new-item'}>
                <Button text="Add new" />
            </Link>
        </div>
    );
};

export default FooterPanel;
