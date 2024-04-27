import React from 'react';
import Input from '../__generics__/input/input';
import Header from '../__generics__/header/header';

const SearchBarPanel = () => {
    return (
        <div className="flex flex-col justify-center items-center w-9/12 py-6">
            <Header title="Search" />
            <Input type="text" placeholder="Type item name" />
        </div>
    );
};

export default SearchBarPanel;
