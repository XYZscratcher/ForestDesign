var _excluded = ["type", "children", "htmlType", "href", "round"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

//import styled from '@emotion/styled';
import cx from 'classnames';
//import {z}from 'zod'

//import colors from '../util/colors';
import "./style.less";
/*const ButtonProps=z.object({
  type:z.enum(["primary","secondary","danger"]).optional(),
  htmlType: z.enum(['button' , 'submit' , 'reset']).optional(),
  href:z.string().optional()
}).merge()*/ //TODO:zod
//type bp = z.infer<typeof ButtonProps>
var Button = function Button(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'secondary' : _props$type,
    children = props.children,
    _props$htmlType = props.htmlType,
    htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
    href = props.href,
    _props$round = props.round,
    round = _props$round === void 0 ? "md" : _props$round,
    other = _objectWithoutProperties(props, _excluded);
  var className = cx('btn', 'btn-' + type);
  if (typeof href !== 'undefined') {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: className
    }, other), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className
    // eslint-disable-next-line react/button-has-type
    ,
    type: htmlType
  }, other), children);
};
export default Button;