import React from 'react';
import IButtonProps from '../../interface/IButtonProps';
import { tailwindUtil } from '../../utils/tailwindUtil';

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    ...others
  } = props;

  return (
    <button 
      type="button"
      className={tailwindUtil(className)}
      {...others}
    >
      {children}
    </button>
  );
}

export default Button;
