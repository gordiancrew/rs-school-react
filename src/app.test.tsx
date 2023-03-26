import { render, screen } from '@testing-library/react';

import NotFound from './components/not-found';
import Search from './components/utils/search';
import React from 'react';
import Cards from './components/utils/cards';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './components/about-us';
import AddCard from './components/add-card';

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

describe('Testing component ADD CARDS', async () => {
  it('present button submit', () => {
    render(
      <BrowserRouter>
        <AddCard />
      </BrowserRouter>
    );

    expect(screen.getByText(/Left/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create/i })).toBeVisible();
  });
  it('present all field input', () => {
    render(
      <BrowserRouter>
        <AddCard />
      </BrowserRouter>
    );

    expect(screen.getByText(/Input name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Input surename:/i)).toBeInTheDocument();
    expect(screen.getByText(/Input club:/i)).toBeInTheDocument();
    expect(screen.getByText(/Select country:/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload file:/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of born:/i)).toBeInTheDocument();
    expect(screen.getByText(/Select leg of player:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: 'main' })).toBeInTheDocument();
  });
  it('checked links', () => {
    render(
      <BrowserRouter>
        <AddCard />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: 'main' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'add card' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'about us' })).toBeInTheDocument();
  });
});
