import pawprintsThumb from '../assets/images/thumbs/projects/pawprints-thumb.jpeg';
import lssTreeThumb from '../assets/images/thumbs/projects/lss_tree_thumb.jpeg';

import pawprintsWebFull from '../assets/images/fulls/projects/pawprints-web.jpeg';
import lssTreeFull from '../assets/images/fulls/projects/lss_tree.jpeg';

import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'

import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'

export default [
  {
    id: '1',
    src: pawprintsWebFull,
    thumbnail: pawprintsThumb,
    caption: 'Pawprints',
    description: 'A clue tracking/completion app for Husky Hunt 2018'
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Giraph',
    description: 'A graph visualization tool using Three.js'
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Animator',
    description: 'A keyframe animator for Object Oriented Design'
  },
  {
    id: '4',
    src: lssTreeFull,
    thumbnail: lssTreeThumb,
    caption: 'Level Set Segmentation',
    description: 'Parallel algorithms for object detection using CUDA'
  },
];