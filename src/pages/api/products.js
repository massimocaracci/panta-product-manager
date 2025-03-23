// pages/api/products.js
const mockProducts = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, name: 'T-Shirt', price: 25, category: 'Clothing' },
    { id: 3, name: 'Coffee Maker', price: 80, category: 'Appliances' },
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(mockProducts);
    } else if (req.method === 'POST') {
        // Simulate creating a new product (in-memory)
        const newProduct = { ...req.body, id: mockProducts.length + 1 };
        mockProducts.push(newProduct);
        res.status(201).json(newProduct);  // 201 Created
    } else if (req.method === 'PUT') {
        // Simulate updating a product
        const { id } = req.query; // Get the product ID from the query parameters
        const updatedProduct = req.body;
        const index = mockProducts.findIndex(product => product.id === parseInt(id));

        if (index !== -1) {
            mockProducts[index] = { ...mockProducts[index], ...updatedProduct };
            res.status(200).json(mockProducts[index]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }

    } else if (req.method === 'DELETE') {
        const { id } = req.query;
        const index = mockProducts.findIndex(product => product.id === parseInt(id));

        if (index !== -1) {
            mockProducts.splice(index, 1);
            res.status(204).end(); // No Content - successful deletion
        } else {
            res.status(404).json({ message: 'Product not found' });
        }

    }
    else {
        res.status(405).json({ message: 'Method Not Allowed' }); // Method Not Allowed
    }
}