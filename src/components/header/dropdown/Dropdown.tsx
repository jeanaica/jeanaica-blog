import React, { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';

import styles from './Dropdown.module.scss';

type Props = {
  forwardRef: RefObject<HTMLUListElement>;
  onClick(): void;
};

const Dropdown: FC<Props> = ({ forwardRef, onClick }) => (
  <ul
    className={styles['nav-dropdown']}
    ref={forwardRef}>
    <li>
      <Link
        to='/about'
        onClick={onClick}>
        About
      </Link>
    </li>
    <li>
      <Link
        to='/portfolio'
        onClick={onClick}>
        Portfolio
      </Link>
    </li>
  </ul>
);

export default Dropdown;
