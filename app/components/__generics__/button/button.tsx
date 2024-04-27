import React from 'react';

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return <button className="text-5xl p-4 w-full">{text}</button>;
};

export default Button;
