import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/start';
import AboutUs from './components/about-us';
import NotFound from './components/not-found';
import Header from './components/utils/header';

function App() {
  return (
    // <div className="App">
    //   <div></div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    // </div>
    <div>
      <div>
        <Header />
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
