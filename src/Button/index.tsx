import React from 'react';

//import styled from '@emotion/styled';
import cx from 'classnames';

//import colors from '../util/colors';
import './style.less';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'danger';
  htmlType?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  round?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'secondary',
    children,
    htmlType = 'button',
    href,
    ...other
  } = props;

  if (typeof href !== 'undefined') {
    return (
      <a href={href} className={cx('btn', 'btn-' + type)} {...other}>
        {children}
      </a>
    );
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={cx('btn', { ['btn-' + type]: true })}
      type={htmlType}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
