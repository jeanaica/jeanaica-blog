import React, { FC } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Anchor from 'components/anchor/Anchor';

import styles from './Header.module.scss';

type Props = {
  title: string;
  href?: string;
  route?: string;
  className?: string;
};

const Header: FC<Props> = ({ route = '/', href, title, className }) => (
  <div className={classnames(styles.title, className)}>
    {!href ? (
      <Link className={styles.header} to={route}>
        {title}
      </Link>
    ) : (
      <Anchor className={styles.header} href={href}>
        {title}
      </Anchor>
    )}
  </div>
);

export default Header;
