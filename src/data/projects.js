import pawprintsThumb from '../assets/images/thumbs/projects/pawprints-thumb.jpeg';
import lssTreeThumb from '../assets/images/thumbs/projects/lss_tree_thumb.jpeg';

import pawprintsWebFull from '../assets/images/fulls/projects/pawprints-web.jpeg';
import lssTreeFull from '../assets/images/fulls/projects/lss_tree.jpeg';

export default [
  {
    id: '1',
    src: pawprintsWebFull,
    thumbnail: pawprintsThumb,
    caption: 'Pawprints',
    description: 'A clue tracking/completion app for Husky Hunt 2018',
    page: 'pawprints'
  },
  {
    id: '2',
    src: lssTreeFull,
    thumbnail: lssTreeThumb,
    caption: 'Level Set Segmentation',
    description: 'Parallel algorithms for object detection using CUDA',
    page: 'lss'
  },
];