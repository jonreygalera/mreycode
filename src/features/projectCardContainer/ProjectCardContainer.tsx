import React from 'react';
import Box from '../../components/box/Box';
import PhotoCardGroup from '../../components/photoCard/PhotoCardGroup';
import PhotoCard from '../../components/photoCard/PhotoCard';
import Typography from '../../components/typography/Typography';
import Button from '../../components/button/Button';
import Chip from '../../components/chip/Chip';
import ChipGroup from '../../components/chip/ChipGroup';

interface Props {

}


const ProjectCardContainer: React.FC<Props> = (props) => {
  return (
    <Box className="
      flex
      max-w-xl
      mt-24
      ml-10
      w-[576px]
      h-[170px]
      relative
      bg-primary-300
      rounded-3xl
      shadow
      py-2
      pr-5
    ">
      <PhotoCardGroup
        className='
        absolute
        -top-10
        -left-10
        '
      >
        {
          [...Array(3).keys()]?.map((data, idx) => (
            <PhotoCard 
              key={`project-photo${idx}`} 
              src={'https://i0.wp.com/picjumbo.com/wp-content/uploads/man-looking-into-the-distance-on-top-of-the-mountain-free-image.jpg?w=600&quality=80'}
            />
          ))
        }
      </PhotoCardGroup>
      <Box
        className="
          ml-48
          flex 
          flex-col 
          w-full
          gap-5
        "
      >
        <Box className="flex">
          <Typography variant='h2'>My Project</Typography>
        </Box>
        <Box className="flex gap-1">
          <ChipGroup>
            <Chip/>
            <Chip/>
            <Chip/>
            <Chip/>
          </ChipGroup>
        </Box>
        <Box className="flex justify-end">
          <Button
            className="border-primary-950 border-2 font-bold rounded-lg py-1 w-64"
          >
            View
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCardContainer;
