import React, { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

import styles from './Image.module.scss';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  size?: 'xl' | 'large' | 'medium' | 'square' | 'tall';
} & HTMLAttributes<HTMLDivElement>;

const Image: FC<Props> = ({
  src,
  className,
  alt = '',
  size,
  ...rest
}: Props) => (
  <div
    className={classnames(
      styles.container,
      {
        [styles.xl]: size === 'xl',
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
        [styles.tall]: size === 'tall',
        [styles.square]: size === 'square',
      },
      className
    )}
    {...rest}>
    <img
      src={src}
      alt={alt}
      className={styles.image}
    />
  </div>
);

export default Image;
