import React, { FC } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import Link from 'components/link/Link';

import styles from './Header.module.scss';

const Header: FC = () => (
  <nav className={styles.header}>
    <div className={classnames('logo', styles.name)}>jeanaica</div>
    <div className={styles.navigation} />
    <div className={styles.socials}>
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
  </nav>
);

export default Header;
