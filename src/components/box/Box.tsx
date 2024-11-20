import React from 'react';
import { tailwindUtil } from '../../utils/tailwindUtil';
import { className } from '../../types/TClassName';

interface Props {
  children?: React.ReactNode,
  className?: className
}

const Box: React.FC<Props> = ({children, className, ...others}) => {
  return (
    children ? (
      <div 
      {...others}
      className={tailwindUtil(className)}
    >
      { children }
    </div>
    ) : <div {...others}
    className={tailwindUtil(className)}/>
  );
}

export default Box;
