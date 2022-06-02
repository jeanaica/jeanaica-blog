import React, { FC } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Image from 'components/image/Image';
import Anchor from 'components/anchor/Anchor';

import styles from './Card.module.scss';

type Props = {
  title: string;
  summary: string;
  route?: string;
  img?: string;
  right?: boolean;
  highlight?: boolean;
  date?: string;
};

const Card: FC<Props> = ({
  title,
  summary,
  route = '/',
  img = '/default-image.png',
  right,
  highlight,
  date,
}: Props) => {
  return (
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
        <hr className={styles.hr} />
        <div className={styles.title}>
          <Link className={styles.header} to={route}>
            {title}
          </Link>
        </div>
        <div className={styles.date}>
          <span>{date}</span>
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
            <Anchor href={route} className={styles.expand}>
              Read more
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

/* <div
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
    <h1 className={styles.header}>{title}</h1>
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
      <Anchor href={route} className={styles.expand}>
        Read more
      </Anchor>
    </div>
  </div>
</div>
</div> */
