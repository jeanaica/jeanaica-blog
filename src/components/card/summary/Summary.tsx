import React, { FC } from 'react';
import classNames from 'classnames';

import Anchor from 'components/anchor/Anchor';

import styles from './Summary.module.scss';

type Props = {
  text: string;
  right?: boolean;
  highlight?: boolean;
  linkText?: string;
  link?: string;
};

const Summary: FC<Props> = ({
  text,
  right,
  highlight,
  link,
  linkText = 'Read more',
}) => (
  <div
    className={classNames(styles.summary, {
      [styles.right]: right,
      [styles.highlight]: highlight,
      [styles.both]: right && highlight,
    })}
  >
    <div className={styles.text}>
      <p className="subtitle">{text}</p>
      <Anchor href={link} className={styles.expand}>
        {linkText}
      </Anchor>
    </div>
  </div>
);

export default Summary;
