import React, { FC } from 'react';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Anchor from 'components/anchor/Anchor';

import styles from './Footer.module.scss';

const year = new Date().getFullYear();

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      Copyright © {year} Jeanaica Suplido. All Rights Reserved.
    </div>
    <div className={styles.social}>
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
  </footer>
);

export default Footer;
