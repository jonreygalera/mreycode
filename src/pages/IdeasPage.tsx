import React from 'react';
import PhotoCard from '../components/photoCard/PhotoCard';
import PhotoCardGroup from '../components/photoCard/PhotoCardGroup';
import Box from '../components/box/Box';
import ProjectCardContainer from '../features/projectCardContainer/ProjectCardContainer';

interface Props {

}

const IdeasPage: React.FC<Props> = (props) => {
  return (
    <Box>
      <ProjectCardContainer/>
    </Box>
  );
}

export default IdeasPage;
