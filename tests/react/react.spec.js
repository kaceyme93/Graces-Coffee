import React from 'react';
// import testing libraries. This gives us react-specific test functions
import { render, waitFor } from '@testing-library/react';
// This gives us access to a "fake dom" through jest
import '@testing-library/jest-dom/extend-expect';
// Import the Products component itself, to test
import { AllProducts } from '../../src/components/index';

// Mock the API call. This example mocks all get requests
import axios from 'axios';
jest.mock('axios');
axios.get.mockResolvedValue({
  data: [
    {
      name: 'A Shirt',
      description: "It's a shirt",
      price: 9.99,
      inStock: true,
      category: 'Clothing',
      imageURL: 'https://bit.ly/3IGVaml',
    },
    {
      name: 'Sandwich',
      description: "It's a sandwich",
      price: 101.5,
      inStock: false,
      category: 'Food',
      imageURL: 'https://bit.ly/3O8OUER',
    },
    {
      name: 'Something else',
      description: "It's neither",
      price: 5000,
      inStock: true,
      category: 'Neither clothing nor food',
      imageURL: 'https://bit.ly/3RI61Ak',
    },
  ],
});

describe('Products', () => {
  // TODO 5 - Write React tests
  // TODO - write a unit test: component contains an element to contain the text `Products`
  it('contains an element that has the text `Products`', async () => {
    const { getByText } = await waitFor(() => render(<AllProducts />));
    expect(getByText('Products')).toBeInTheDocument();
  });
  // TODO - write a unit test: component contains an element to contain the text `diamond saw` (from the name of one of the mock products above)
  it('contains an element that has the text from one of the products from the api', async () => {
    const { getByText } = await waitFor(() => render(<AllProducts />));
    expect(getByText('A Shirt')).toBeInTheDocument();
  });
  // TODO - write a snapshot test. Entire component should match
  it('entire component matches the snapshot', async () => {
    const { container } = await waitFor(() => render(<AllProducts />));
    expect(container).toMatchSnapshot();
  });
});
