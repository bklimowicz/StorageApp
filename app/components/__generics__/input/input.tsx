'use client';

import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
    return (
        <input
            className="w-full text-3xl text-black outline-none"
            type={type}
            placeholder={placeholder}
        ></input>
    );
};

export default Input;
