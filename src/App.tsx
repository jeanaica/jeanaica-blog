import React, { FunctionComponent } from 'react';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import About from 'pages/about/About';

import styles from './App.module.scss';

const App: FunctionComponent = () => (
  <div className={styles.App}>
    <Header />
    <div className={styles.content}>
      <About />
    </div>
    <Footer />
  </div>
);

export default App;
