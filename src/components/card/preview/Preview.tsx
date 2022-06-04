import React, { FC } from 'react';
import classnames from 'classnames';

import Image from 'components/image/Image';

import styles from './Preview.module.scss';

type Props = {
  className?: string;
  img?: string;
  right?: boolean;
  highlight?: boolean;
  href?: string;
};

const Preview: FC<Props> = ({
  className,
  img = '/default-image.png',
  right,
  highlight,
  href,
}) => {
  const handleImageClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div
      className={classnames(styles.image, className, {
        [styles.highlight]: right && highlight,
        [styles.button]: href,
      })}
      role='button'
      onClick={handleImageClick}
      aria-hidden='true'>
      <Image
        size={highlight ? 'tall' : 'square'}
        src={img}
      />

      <div
        className={classnames(styles.border, {
          [styles.square]: !highlight,
          [styles.right]: right,
        })}
      />
    </div>
  );
};

export default Preview;
