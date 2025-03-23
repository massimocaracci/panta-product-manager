// utils/api.js
const API_BASE_URL = '/api'; // Adjust if needed

export const getProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/products`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
};

export const createProduct = async (productData) => {
    const res = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });

    if (!res.ok) {
        console.log(await res.json())
        throw new Error('Failed to create product');
    }

    return res.json();
};

export const updateProduct = async (id, productData) => {
    const res = await fetch(`${API_BASE_URL}/products?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });
    if (!res.ok) {
        console.log(await res.json())
        throw new Error('Failed to update product');
    }
    return res.json();
};

export const deleteProduct = async (id) => {
    const res = await fetch(`${API_BASE_URL}/products?id=${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error('Failed to delete product');
    }
    return res.ok; // or res.status, depending on what you need
};
