import React, { RefObject, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import useWindowDimensions from 'hooks/useWindowDimensions/useWindowDimensions';
import useDetectOutsideClick from 'hooks/useDetectOutsideClick/useDetectOutsideClick';

import styles from './Nav.module.scss';
import Dropdown from '../dropdown/Dropdown';

type Props = {
  onClick?(): void;
  // showSideBar?: boolean;
  headerRef?: RefObject<HTMLElement>;
};

const Nav: React.FC<Props> = ({ onClick, headerRef }) => {
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
      })}
    >
      {showSideBar ? (
        <FontAwesomeIcon
          icon={faBars}
          className={styles['nav-button']}
          onClick={onMenuClick}
        />
      ) : (
        <ul className={styles['nav-menu']}>
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
      )}
      {showSideBar && showMenu ? <Dropdown forwardRef={dropDownRef} /> : null}
    </nav>
  );
};

export default Nav;
