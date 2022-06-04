import React, { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Anchor.module.scss';

type Props = {
  children: ReactNode | string;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor: FC<Props> = ({ className, children, ...rest }: Props) => (
  <a
    target='_blank'
    {...rest}
    className={classnames(className, styles.link)}
    rel='noreferrer noopener'>
    {children}
  </a>
);

export default Anchor;
