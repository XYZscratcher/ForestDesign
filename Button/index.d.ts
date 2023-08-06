import React, { ButtonHTMLAttributes } from 'react';
import './style.less';
interface ButtonProps {
    type?: 'primary' | 'secondary' | 'danger';
    htmlType?: 'button' | 'submit' | 'reset';
    round?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    href?: string;
}
declare const Button: React.FC<ButtonProps & ButtonHTMLAttributes<any>>;
export default Button;
