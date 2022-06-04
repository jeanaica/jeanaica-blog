import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
