import React, { FC } from 'react';
import classnames from 'classnames';

import Image from 'components/image/Image';
import Link from 'components/link/Link';

import styles from './Card.module.scss';

type Props = {
  title: string;
  summary: string;
  route: string;
  img: string;
  right?: boolean;
  highlight?: boolean;
};

const Card: FC<Props> = ({
  title,
  summary,
  route = '/',
  img,
  right,
  highlight,
}: Props) => (
  <div
    className={classnames(styles.container, {
      [styles.right]: right,
      [styles.both]: right && highlight,
    })}
  >
    <div
      className={classnames(styles.image, {
        [styles.highlight]: right && highlight,
      })}
    >
      <Image size={highlight ? 'tall' : 'square'} src={img} />
      <div
        className={classnames(styles.border, {
          [styles.square]: !highlight,
          [styles.right]: right,
        })}
      />
    </div>
    <div
      className={classnames(styles.content, {
        [styles.right]: right,
        [styles.highlight]: highlight,
      })}
    >
      <div className={styles.title}>
        <h6 className={styles.header}>{title}</h6>
      </div>
      <div
        className={classnames(styles.summary, {
          [styles.right]: right,
          [styles.highlight]: highlight,
          [styles.both]: right && highlight,
        })}
      >
        <div className={styles.text}>
          <p className="subtitle">{summary}</p>
          <Link href={route} className={styles.expand}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
