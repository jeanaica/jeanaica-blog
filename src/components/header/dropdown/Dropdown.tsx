import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';

import styles from './Dropdown.module.scss';

type Props = {
  forwardRef: RefObject<HTMLUListElement>;
};

const Dropdown: React.FC<Props> = ({ forwardRef }) => {
  return (
    <ul className={styles['nav-dropdown']} ref={forwardRef}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {/* <li>
      <Link to="/contact">Contact</Link>
    </li> */}
    </ul>
  );
};

export default Dropdown;
