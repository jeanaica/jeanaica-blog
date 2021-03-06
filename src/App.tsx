import React, { FunctionComponent } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from 'pages/about/About';
import Portfolio from 'pages/portfolio/Portfolio';

import Layout from 'components/layout/Layout';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/portfolio'
          element={<Portfolio />}
        />
        <Route
          path='*'
          element={<Navigate to='/about' />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
