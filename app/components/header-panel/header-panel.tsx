import React from 'react';
import Header from '../__generics__/header/header';
import Link from 'next/link';

const HeaderPanel = () => {
    return (
        <div className="flex justify-center items-center border-b w-9/12">
            <Link href={'/'}>
                <Header title="StorageApp" />
            </Link>
        </div>
    );
};

export default HeaderPanel;
