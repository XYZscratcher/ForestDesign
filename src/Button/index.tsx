import React, { ButtonHTMLAttributes } from 'react';

//import styled from '@emotion/styled';
import cx from 'classnames';
//import {z}from 'zod'

//import colors from '../util/colors';
import './style.less';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'danger';
  htmlType?: 'button' | 'submit' | 'reset';
  //children?: React.ReactNode;
  round?: string;
  href?: string;
}
/*const ButtonProps=z.object({
  type:z.enum(["primary","secondary","danger"]).optional(),
  htmlType: z.enum(['button' , 'submit' , 'reset']).optional(),
  href:z.string().optional()
}).merge()*/ //TODO:zod
//type bp = z.infer<typeof ButtonProps>
const Button: React.FC<ButtonProps & ButtonHTMLAttributes<any>> = (props) => {
  const {
    type = 'secondary',
    children,
    htmlType = 'button',
    href,
    //round = "full",
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
    <button
      className={cx('btn', 'btn-' + type)}
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
