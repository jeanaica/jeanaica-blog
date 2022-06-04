import React, {
  ButtonHTMLAttributes,
  FC,
  MouseEvent,
  ReactElement,
} from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

type Props = {
  children?: ReactElement | string;
  onClick?: MouseEvent<HTMLButtonElement>;
  className?: string;
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({
  type = 'button',
  children,
  className,
  onClick,
  label,
  ...rest
}: Props) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={classnames(className, styles.button)}
    onClick={onClick}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}>
    {!label ? children : label}
  </button>
);

export default Button;
