import React, { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

import styles from './SectionTitle.module.scss';

type Props = {
  text: string;
  highlight?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const SectionTitle: FC<Props> = ({
  text,
  highlight,
  className,
  ...rest
}: Props) => (
  <div
    className={classnames(className, styles.section)}
    {...rest}>
    <h5 className={styles.title}>{text}</h5>
    <div className={styles.accent}>
      <h5 className={styles.highlight}>{highlight}</h5>
    </div>
  </div>
);

export default SectionTitle;
