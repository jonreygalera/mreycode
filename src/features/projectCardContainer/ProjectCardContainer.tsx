import React from 'react';
import Box from '../../components/box/Box';
import PhotoCardGroup from '../../components/photoCard/PhotoCardGroup';
import PhotoCard from '../../components/photoCard/PhotoCard';
import Typography from '../../components/typography/Typography';

interface Props {

}

const ProjectCardContainer: React.FC<Props> = (props) => {
  return (
    <Box className="
      mt-10
      ml-10
      border-2 
      border-red-50
      flex
      w-[500px]
    ">
      <Box
        className='
        border-yellow-50
            flex
      '
      >
        <Box>
          <PhotoCardGroup
              className='border-2
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
        </Box>


            <Box
              className="flex flex-col"
            >
              <Box>
                <Typography variant='h2'>My Project</Typography>
              </Box>
              <Box>
                <Typography variant='h2'>My Project</Typography>
              </Box>
            </Box>
      </Box>
    </Box>
  );
}

export default ProjectCardContainer;
