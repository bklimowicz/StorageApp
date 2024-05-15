import React from 'react';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return <div className="text-5xl pt-5 pb-5 flex justify-center items-center">{title}</div>;
};

export default Header;
