import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import useDetectOutsideClick from 'hooks/useDetectOutsideClick/useDetectOutsideClick';
import useWindowDimensions from 'hooks/useWindowDimensions/useWindowDimensions';

import Dropdown from '../dropdown/Dropdown';

import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const dropDownRef = useRef<HTMLUListElement>(null);

  const isClickedOutside = useDetectOutsideClick(dropDownRef);

  const { width } = useWindowDimensions();

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (isClickedOutside) {
      setShowMenu(false);
    }
  }, [isClickedOutside]);

  useEffect(() => {
    if (width < 768) {
      setShowSideBar(true);
    } else if (width >= 768 && width < 1024) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }

    setShowMenu(false);
  }, [width]);

  return (
    <nav
      className={classnames(styles.nav, {
        [styles.desktop]: !showSideBar,
      })}>
      {showSideBar ? (
        <FontAwesomeIcon
          icon={faBars}
          className={styles['nav-button']}
          onClick={onMenuClick}
        />
      ) : (
        <ul className={styles['nav-menu']}>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      )}
      {showSideBar && showMenu ? (
        <Dropdown
          forwardRef={dropDownRef}
          onClick={() => setShowMenu(false)}
        />
      ) : null}
    </nav>
  );
};

export default Nav;
