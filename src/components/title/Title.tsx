import React, { FC, ReactElement, HTMLAttributes } from 'react';
import classnames from 'classnames';

import styles from './Title.module.scss';

type Props = {
  header: ReactElement | string;
  subText?: ReactElement | string;
  className?: string;
  size?: 'normal' | 'small';
  children?: ReactElement | string;
} & HTMLAttributes<HTMLDivElement>;

const Title: FC<Props> = ({
  header,
  className,
  children,
  size = 'normal',
  subText,
  ...rest
}: Props) => (
  <div
    className={classnames(className, styles.container, {
      [styles.normal]: size === 'normal',
      [styles.small]: size === 'small',
    })}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <div className={styles.content}>
      <h5 className={styles.title}>{header}</h5>
      <hr className={styles.divider} />
      {subText ? <p className={styles.subText}>{subText}</p> : children}
    </div>
  </div>
);

export default Title;
