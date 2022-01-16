import React, { FC, ReactElement, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';

import styles from './Link.module.scss';

type Props = {
  children: ReactElement | string;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FC<Props> = ({ className, children, ...rest }: Props) => (
  <a
    // eslint-disable-next-line react/jsx-no-target-blank
    target="_blank"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    className={classnames(className, styles.link)}
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

export default Link;
