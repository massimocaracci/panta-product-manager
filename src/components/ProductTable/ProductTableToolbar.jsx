// components/ProductTable/ProductTableToolbar.jsx
import React from 'react';
import {Box, Button, Toolbar, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {styled} from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
}));


const ProductTableToolbar = ({onAddProduct}) => {

    return (
        <StyledToolbar>
            <Typography variant="h6" id="tableTitle" component="div">
                Products
            </Typography>
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon/>}
                    onClick={onAddProduct}
                >
                    Add Product
                </Button>
            </Box>
        </StyledToolbar>
    )
}

export default ProductTableToolbar;