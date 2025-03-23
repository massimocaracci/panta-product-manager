// components/ProductTable/ProductTableModal.jsx
import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,} from '@mui/material';
import {createProduct, updateProduct} from '../../utils/api';

const ProductTableModal = ({open, onClose, onCreate, onUpdate, product, isEditMode}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (product) {
            setName(product.name || '');
            setPrice(product.price || '');
            setCategory(product.category || '');
        } else {
            // Reset form when opening for a new product
            setName('');
            setPrice('');
            setCategory('');
        }
    }, [product]);


    const handleClose = () => {
        onClose();
    };

    const handleSubmit = async () => {
        const productData = {
            name,
            price: parseFloat(price),
            category,
        };

        try {
            if (isEditMode && product) {
                const updatedProduct = await updateProduct(product.id, productData);
                onUpdate(updatedProduct);
            } else {
                const newProduct = await createProduct(productData);
                onCreate(newProduct);
            }
            onClose();
        } catch (error) {
            console.error('Error submitting product:', error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{isEditMode ? 'Edit Product' : 'Add Product'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Price"
                    type="number"
                    fullWidth
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Category"
                    type="text"
                    fullWidth
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>{isEditMode ? 'Update' : 'Create'}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductTableModal;