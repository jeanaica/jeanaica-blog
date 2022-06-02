import React, { FC, useRef, useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import Anchor from 'components/anchor/Anchor';

import styles from './Header.module.scss';
import Nav from './nav/Nav';

const Header: FC = () => {
  return (
    <nav className={styles.header}>
      <div className={classnames('logo', styles.name)}>jeanaica</div>
      <div className={styles.navigation}>
        <Nav />
      </div>
      <div className={styles.socials}>
        <Anchor href="https://www.github.com/jeanaica" className={styles.link}>
          <FontAwesomeIcon icon={faGithubAlt} />
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/in/jeanaicasuplido/"
          className={styles.link}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Anchor>
      </div>
    </nav>
  );
};

export default Header;
