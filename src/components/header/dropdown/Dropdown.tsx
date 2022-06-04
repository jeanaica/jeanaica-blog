import React, { Dispatch, RefObject, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Dropdown.module.scss';

type Props = {
  forwardRef: RefObject<HTMLUListElement>;
  onClick(): void;
};

const Dropdown: React.FC<Props> = ({ forwardRef, onClick }) => (
  <ul className={styles['nav-dropdown']} ref={forwardRef}>
    <li>
      <Link to="/about" onClick={onClick}>
        About
      </Link>
    </li>
    {/* <li>
        <Link to="/blog">Blog</Link>
      </li> */}
    <li>
      <Link to="/portfolio" onClick={onClick}>
        Portfolio
      </Link>
    </li>
    {/* <li>
      <Link to="/contact">Contact</Link>
    </li> */}
  </ul>
);

export default Dropdown;
