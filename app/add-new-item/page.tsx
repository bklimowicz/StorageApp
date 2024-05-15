import Header from '@/components/__generics__/header/header';
import ProductLocation from '@/constants/productLocations';
import React from 'react';

const createItem = async (formData: FormData) => {
    'use server';
    const rawFormData = {
        name: formData.get('productName'),
        location: formData.get('productLocation'),
        quantity: formData.get('productQuantity'),
    };

    console.log(rawFormData);

    await fetch('http://localhost:5026/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawFormData),
    });
};

const AddNewItem = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <Header title="Add new item" />
            </div>
            <form
                action={createItem}
                className="flex my-10 flex-col gap-10 text-3xl p-5 text-black"
            >
                <input
                    type="text"
                    name="productName"
                    placeholder="Nazwa produktu"
                />
                <select name="productLocation">
                    {Object.values(ProductLocation).map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    name="productQuantity"
                    placeholder="Ilość produktu"
                />
                <div className="flex justify-between items-center">
                    <input
                        type="submit"
                        className="text-primary w-[180px] h-[60px]"
                    />
                    <input
                        type="reset"
                        className="border bg-accent text-primary w-[180px] h-[60px]"
                    />
                </div>
            </form>
        </>
    );
};

export default AddNewItem;
