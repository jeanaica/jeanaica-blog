import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Image from 'components/image/Image';
import Anchor from 'components/anchor/Anchor';

import styles from './Card.module.scss';

type Props = {
  right?: boolean;
  highlight?: boolean;
  className?: string;
  children: ReactNode;
};

const Card: FC<Props> = ({ right, highlight, className, children }) => {
  return (
    <div
      className={classnames(styles.container, className, {
        [styles.right]: right,
        [styles.both]: right && highlight,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
