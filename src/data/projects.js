import pawprintsThumb from '../assets/images/thumbs/projects/pawprints-thumb.png';
import lssTreeThumb from '../assets/images/thumbs/projects/lss-tree-thumb.jpeg';
import animatorThumb from '../assets/images/thumbs/projects/toh-thumb.png';
import hailThumb from '../assets/images/thumbs/projects/tensors.png';

export default [
  {
    id: 0,
    thumbnail: hailThumb,
    caption: 'Hail',
    description: 'Designing compiler infrastructure for tensor algebra in hail',
    page: 'hail'
  },
  {
    id: 1,
    thumbnail: pawprintsThumb,
    caption: 'Pawprints',
    description: 'A clue tracking/completion app for Husky Hunt 2018',
    page: 'pawprints'
  },
  {
    id: 2,
    thumbnail: animatorThumb,
    caption: 'Animator',
    description: 'A keyframe animator for Object Oriented Design',
    page: 'animator'
  },
  {
    id: 3,
    thumbnail: lssTreeThumb,
    caption: 'Level Set Segmentation',
    description: 'Parallel algorithms for object detection using CUDA',
    page: 'lss'
  },
];