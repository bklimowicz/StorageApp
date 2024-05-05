import ProductLocation from '@/constants/productLocations';
import React from 'react';

const LocationPicker = () => {
    return (
        <select name="locationPicker">
            {Object.values(ProductLocation).map((key) => (
                <option key={key} value={key}>
                    {key}
                </option>
            ))}
        </select>
    );
};

export default LocationPicker;
