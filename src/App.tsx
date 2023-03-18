import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/start';
import AboutUs from './components/about-us';
import NotFound from './components/not-found';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
