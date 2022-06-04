import React, { FC } from 'react';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import Anchor from 'components/anchor/Anchor';

import Nav from './nav/Nav';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <nav className={styles.header}>
      <div className={classnames('logo', styles.name)}>jeanaica</div>
      <div className={styles.navigation}>
        <Nav />
      </div>
      <div className={styles.socials}>
        <Anchor
          href='https://www.github.com/jeanaica'
          className={styles.link}>
          <FontAwesomeIcon icon={faGithubAlt} />
        </Anchor>
        <Anchor
          href='https://www.linkedin.com/in/jeanaicasuplido/'
          className={styles.link}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Anchor>
      </div>
    </nav>
  );
};

export default Header;
