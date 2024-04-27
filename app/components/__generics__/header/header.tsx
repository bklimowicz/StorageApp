import React from 'react';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return <div className="text-5xl pt-5 pb-10">{title}</div>;
};

export default Header;
