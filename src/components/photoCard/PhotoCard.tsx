import React from 'react';
import Box from '../box/Box';
import IPhotoCardProps from '../../interface/IPhotoCardProps';
import { tailwindUtil } from '../../utils/tailwindUtil';

const PhotoCard: React.FC<IPhotoCardProps> = (props) => {
  const {
    src = '',
    onClick,
    height = 'h-32',
    width = 'w-24',
  } = props;

  return (
    <Box 
      className={tailwindUtil(`
        absolute 
        border-2 
        rounded-3xl 
        overflow-hidden 
        cursor-pointer
      `, 
      typeof height == 'string' ? height : `h-${height}`,
      typeof width == 'string' ? width : `w-${width}`
    )}
    >
      <a onClick={onClick}>
        <img 
          src={src} 
          alt="Sample Image" 
          className="w-full h-full object-fit grayscale hover:grayscale-0"  
        />
      </a>
    </Box>
  )
}

export default PhotoCard;
