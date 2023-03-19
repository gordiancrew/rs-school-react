import { render, screen } from '@testing-library/react';

import NotFound from './components/not-found';
import Search from './components/utils/search';

import React from 'react';

describe('Testing PAGE 404', async () => {
  it('present text 404', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
  it('present text not found', async () => {
    render(<NotFound />);
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});

describe('Testing component SEARCH', async () => {
  it('present text search', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText(/input/i)).toBeInTheDocument();
  });
});
