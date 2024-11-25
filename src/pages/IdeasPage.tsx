import React from 'react';
import PhotoCard from '../components/photoCard/PhotoCard';
import PhotoCardGroup from '../components/photoCard/PhotoCardGroup';
import Box from '../components/box/Box';
import ProjectCardContainer from '../features/projectCardContainer/ProjectCardContainer';
import Carousel from '../components/carousel/Carousel';

interface Props {

}
const IMAGE_SETS = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/man-looking-into-the-distance-on-top-of-the-mountain-free-image.jpg?w=600&quality=80",
];
const SAMPLE_DATA = [
  {
    key: 'my-project-1',
    imageSets: IMAGE_SETS,
    title: 'My Project'
  }, {
    key: 'my-project-2',
    imageSets: IMAGE_SETS,
    title: 'My Project'
  }, {
    key: 'my-project-3',
    imageSets: IMAGE_SETS,
    title: 'My Project'
  }
]


const IdeasPage: React.FC<Props> = (props) => {

  return (
    <Carousel>
      {
        SAMPLE_DATA.map((data) => (
          <ProjectCardContainer
            key={data.key}
            title={data.title}
            imageSets={data.imageSets}
          />
        ))
      }
    </Carousel>
  );
}

export default IdeasPage;
