// components/ProductTable/ProductTable.jsx
import React, {useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {deleteProduct, getProducts} from '../../utils/api';
import ProductTableModal from './ProductTableModal';
import ProductTableToolbar from './ProductTableToolbar';
import ProductTableRow from './ProductTableRow';


const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // For edit mode
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            // Handle error (e.g., display an error message)
        }
    };

    const handleOpenModal = () => {
        setSelectedProduct(null);
        setIsEditMode(false);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleCreateProduct = async (newProduct) => {
        try {
            // Optimistically update the UI
            setProducts([...products, newProduct]);
            setOpenModal(false);
            fetchProducts()
        } catch (error) {
            console.error('Error creating product:', error);
            // Revert the optimistic update and display an error message
        }
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setIsEditMode(true);
        setOpenModal(true);
    };

    const handleUpdateProduct = async (updatedProduct) => {
        try {
            // Optimistically update the UI
            const updatedProducts = products.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            );
            setProducts(updatedProducts);
            setOpenModal(false);
            fetchProducts()

        } catch (error) {
            console.error('Error updating product:', error);
            // Revert the optimistic update and display an error message
        }
    };


    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter((product) => product.id !== id));

        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };


    return (
        <Paper>
            <ProductTableToolbar onAddProduct={handleOpenModal}/>
            <TableContainer>
                <Table aria-label="product table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <ProductTableRow
                                key={product.id}
                                product={product}
                                onEdit={() => handleEditProduct(product)}
                                onDelete={() => handleDeleteProduct(product.id)}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ProductTableModal
                open={openModal}
                onClose={handleCloseModal}
                onCreate={handleCreateProduct}
                onUpdate={handleUpdateProduct}
                product={selectedProduct}
                isEditMode={isEditMode}
            />
        </Paper>
    );
};

export default ProductTable;