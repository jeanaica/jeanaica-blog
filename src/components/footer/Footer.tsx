import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import Anchor from 'components/anchor/Anchor';

import styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      Copyright © 2020 Jeanaica Suplido. All Rights Reserved.
    </div>
    <div className={styles.social}>
      <Anchor href="https://www.github.com/jeanaica" className={styles.link}>
        <FontAwesomeIcon icon={faGithubAlt} />
      </Anchor>
      {/* <Anchor href="https://gitlab.com/jeanaica" className={styles.link}>
        <FontAwesomeIcon icon={faGitlab} />
      </Anchor> */}
      {/* <Anchor
        href="https://www.upwork.com/freelancers/~0181872ae4cfdf70f0"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faAt} />
      </Anchor> */}
      <Anchor
        href="https://www.linkedin.com/in/jeanaicasuplido/"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Anchor>
    </div>
  </footer>
);

export default Footer;
