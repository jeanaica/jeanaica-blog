import React, { FC } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Image from 'components/image/Image';
import Anchor from 'components/anchor/Anchor';

import styles from './Card.module.scss';

type Props = {
  title: string;
  summary: string;
  href?: string;
  route?: string;
  img?: string;
  right?: boolean;
  highlight?: boolean;
  date?: string;
  linkText?: string;
  link?: string;
  className?: string;
};

const Card: FC<Props> = ({
  title,
  summary,
  href,
  route,
  img = '/default-image.png',
  right,
  highlight,
  date,
  linkText = 'Read more',
  link,
  className,
}: Props) => {
  return (
    <div
      className={classnames(styles.container, className, {
        [styles.right]: right,
        [styles.both]: right && highlight,
      })}
    >
      <Anchor href={link}>
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
      </Anchor>

      <div
        className={classnames(styles.content, {
          [styles.right]: right,
          [styles.highlight]: highlight,
        })}
      >
        <hr className={styles.hr} />
        <div className={styles.title}>
          {route && !href && (
            <Link className={styles.header} to={route}>
              {title}
            </Link>
          )}

          {href && !route && (
            <Anchor className={styles.header} href={href}>
              {title}
            </Anchor>
          )}
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
            <Anchor href={link || route} className={styles.expand}>
              {linkText}
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
