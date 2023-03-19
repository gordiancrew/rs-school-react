import { render, screen } from '@testing-library/react';

import NotFound from './components/not-found';
import Search from './components/utils/search';
import React from 'react';
import Cards from './components/utils/cards';
import Main from './components/start';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './components/about-us';

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
  it('present text input', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('present button', () => {
    render(<Search />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

describe('Testing component CARDS', async () => {
  it('present name footballist', () => {
    render(<Cards />);
    expect(screen.getByText(/Ronaldo/i)).toBeInTheDocument();
  });
  it('present football club', () => {
    render(<Cards />);
    expect(screen.getByText(/Al Nassr/i)).toBeInTheDocument();
  });
});

describe('Testing component MAIN', async () => {
  it('present menu', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/main/i)).toBeInTheDocument();
  });
});
describe('Testing component ABOUT', async () => {
  it('present text about us', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByText(/football/i)).toBeInTheDocument();
    expect(screen.getByText(/application/i)).toBeInTheDocument();
  });
  it('present h1', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
