import React, { useState } from 'react';
import Box from '../box/Box';
import ICarouselProps from '../../interface/ICarouselProps';

const Carousel: React.FC<ICarouselProps> = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  

  return ( 
    <Box
      className="relative w-full max-w-3xl mx-auto"
    >
      <Box className="overflow-hidden relative">
        {
          children
        }
      </Box>
    </Box>

  );
}

export default Carousel;
