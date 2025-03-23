// components/ProductTable/ProductTableRow.jsx
import React from 'react';
import {IconButton, TableCell, TableRow} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductTableRow = ({product, onEdit, onDelete}) => {
    return (
        <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>
                <IconButton aria-label="edit" onClick={onEdit}>
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete" onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default ProductTableRow;