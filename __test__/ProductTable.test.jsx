import React from 'react';
import {act, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides toBeInTheDocument matcher
import ProductTable from '../src/components/ProductTable/ProductTable';
import * as api from '../src/utils/api';

// Mock API functions
jest.mock('../src/utils/api');

const mockProducts = [
    {
        id: 1,
        name: 'Sample Product',
        price: 100,
        category: 'Category A',
    },
];

describe('ProductTable', () => {
    beforeEach(() => {
        // Have getProducts return a promise with test data
        api.getProducts.mockResolvedValue(mockProducts);
    });

    it('renders table headers and product data', async () => {
        await act(async () => {
            render(<ProductTable/>);
        });

        // Use getByRole to only query header cells.
        expect(screen.getByRole('columnheader', {name: /ID/i})).toBeInTheDocument();
        expect(screen.getByRole('columnheader', {name: /Name/i})).toBeInTheDocument();
        expect(screen.getByRole('columnheader', {name: /Price/i})).toBeInTheDocument();
        expect(screen.getByRole('columnheader', {name: /Category/i})).toBeInTheDocument();
        expect(screen.getByRole('columnheader', {name: /Actions/i})).toBeInTheDocument();

        // Wait for the product data to be rendered after getProducts resolves.
        await waitFor(() => {
            expect(screen.getByText(/Sample Product/i)).toBeInTheDocument();
        });
    });
});