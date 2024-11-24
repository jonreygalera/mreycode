import React from 'react';
import PhotoCard from '../components/photoCard/PhotoCard';
import PhotoCardGroup from '../components/photoCard/PhotoCardGroup';
import Box from '../components/box/Box';
import ProjectCardContainer from '../features/projectCardContainer/ProjectCardContainer';

interface Props {

}

const SAMPLE_DATA = [
  {
    key: 'my-project-1',
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
    title: 'My Project'
  }, {
    key: 'my-project-2',
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    title: 'My Project'
  }, {
    key: 'my-project-3',
    src: "https://i0.wp.com/picjumbo.com/wp-content/uploads/man-looking-into-the-distance-on-top-of-the-mountain-free-image.jpg?w=600&quality=80",
    title: 'My Project'
  }
]

const IdeasPage: React.FC<Props> = (props) => {
  return (
    <Box>
      <ProjectCardContainer/>
    </Box>
  );
}

export default IdeasPage;
