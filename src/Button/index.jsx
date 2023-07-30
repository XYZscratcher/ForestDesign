import classNames from 'classnames';
import React from 'react';

const Button = (props) => {
  const { type, children, ...other } = props;
  return (
    <button className={classNames(type)} type="button" {...other}>
      {children}
    </button>
  );
};

export default Button;
