import React from 'react';
import Header from '../__generics__/header/header';
import Link from 'next/link';

const HeaderPanel = () => {
    return (
        <div className="flex justify-center items-center border-b border-primary w-full h-[150px]">
            <Link href={'/'} className='flex justify-center items-center'>
                <Header title="StorageApp" />
            </Link>
        </div>
    );
};

export default HeaderPanel;
