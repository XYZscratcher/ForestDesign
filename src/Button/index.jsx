import styled from '@emotion/styled';
import React from 'react';

import colors from '../utils/colors';

const Btn = styled.button`
  display: inline-block;
  vertical-align: middle;
  height: 38px;
  line-height: 38px;
  border: 1px solid transparent;
  padding: 0 18px;
  background-color: ${(props) => props.bgcolor};
  color: #fff;
  white-space: nowrap;
  text-align: center;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
`;
const Button = (props) => {
  const { type, children, round, ...other } = props;
  return (
    <Btn bgcolor={colors[type]} type="button" round={round} {...other}>
      {children}
    </Btn>
  );
};

export default Button;
