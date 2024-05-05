import LocationPicker from '@/components/location-picker/location-picker';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>
                <LocationPicker />
            </div>
            {children}
        </div>
    );
};

export default Layout;
