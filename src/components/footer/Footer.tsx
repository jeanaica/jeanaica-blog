import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import Link from 'components/link/Link';

import styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      Copyright © 2020 Jeanaica Suplido. All Rights Reserved.
    </div>
    <div className={styles.social}>
      <Link href="https://www.github.com/jeanaica" className={styles.link}>
        <FontAwesomeIcon icon={faGithubAlt} />
      </Link>
      <Link href="https://gitlab.com/jeanaica" className={styles.link}>
        <FontAwesomeIcon icon={faGitlab} />
      </Link>
      <Link
        href="https://www.upwork.com/freelancers/~0181872ae4cfdf70f0"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faAt} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jeanaicasuplido/"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
    </div>
  </footer>
);

export default Footer;
