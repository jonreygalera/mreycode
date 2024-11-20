import React from 'react';
import Box from '../box/Box';

interface Props {

}

const PhotoCard: React.FC<Props> = (props) => {
  return (
    <Box 
      className="relative h-64 w-64 border-2 rounded-3xl overflow-hidden"
    >
      <img 
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/man-looking-into-the-distance-on-top-of-the-mountain-free-image.jpg?w=600&quality=80" 
        alt="Sample Image" 
        className="w-full h-full object-fit grayscale hover:grayscale-0" 
      />
    </Box>
  )
}

export default PhotoCard;
