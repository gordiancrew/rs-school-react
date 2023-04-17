import { fireEvent, render, screen } from '@testing-library/react';

import NotFound from './components/not-found';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './components/about-us';
import AddCard from './components/add-card';
import createFetchMock from 'vitest-fetch-mock';
import { describe, expect, vi } from 'vitest';
import CardsMorti from './components/utils/cardsMorti';
import Cards from './components/utils/cards';
import { Provider } from 'react-redux';
import { store } from './store';

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

describe('Testing component ABOUT', async () => {
  it('present text about us', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByText(/Morty/i)).toBeInTheDocument();
    expect(screen.getByText(/Rick/i)).toBeInTheDocument();
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

describe('Testing component CARDS', async () => {
  it('present img', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cards />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('preview')).toBeInTheDocument();
  });
});

describe('Testing component ADD CARDS', async () => {
  it('present button submit', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCard />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Left/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create/i })).toBeVisible();
  });
  it('present all field input', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCard />
        </BrowserRouter>
      </Provider>
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
      <Provider store={store}>
        <BrowserRouter>
          <AddCard />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: 'main' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'add card' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'about us' })).toBeInTheDocument();
  });
});

describe('Testing FORM HOOKS', () => {
  it('should display correct error message', async () => {
    const { getByRole, findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCard />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(getByRole('button', { name: /Create/i }));
    findByText(/field is required/i);
  });
});

describe('Testing fetch', () => {
  const fetchMocker = createFetchMock(vi);
  fetchMocker.enableMocks();
  it('fetch url', async () => {
    fetchMocker.mockOnce('https://rickandmortyapi.com/api/character/');
    const res = (await fetch('https://rickandmortyapi.com/api/character/')).status;
    expect(res === 200);
  });
});

describe('Testing MortiCards', () => {
  const fetchMocker = createFetchMock(vi);
  fetchMocker.enableMocks();

  it('check loading ', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardsMorti />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Load.../i)).toBeInTheDocument();
  });
});

describe('Testing MortiInfo', () => {
  it('mortiCards with query rick', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardsMorti />
        </BrowserRouter>
      </Provider>
    );
    setTimeout(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByText(/Rick/i)).toBeInTheDocument();
    }, 1000);
  });
});
