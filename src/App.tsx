import React, { FunctionComponent } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import About from 'pages/about/About';
import Layout from 'components/layout/Layout';
import Portfolio from 'pages/portfolio/Portfolio';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/about" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
