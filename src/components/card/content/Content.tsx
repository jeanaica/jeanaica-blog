import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Content.module.scss';

type Props = {
  className?: string;
  right?: boolean;
  highlight?: boolean;
  date?: string;
  children: ReactNode;
};

const Content: FC<Props> = ({
  className,
  right,
  highlight,
  date,
  children,
}) => (
  <div
    className={classnames(styles.content, className, {
      [styles.right]: right,
      [styles.highlight]: highlight,
    })}>
    {children}
    <hr className={styles.hr} />
    <div className={styles.date}>
      <span>{date}</span>
    </div>
  </div>
);

export default Content;
