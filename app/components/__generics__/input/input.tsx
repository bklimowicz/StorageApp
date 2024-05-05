'use client';

import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    name?: string;
    withIcon?: boolean;
}

const Input = ({ type, placeholder, withIcon }: InputProps) => (
    <input
        className="w-full text-3xl text-black outline-none"
        type={type}
        placeholder={placeholder}
    />
);

export default Input;
