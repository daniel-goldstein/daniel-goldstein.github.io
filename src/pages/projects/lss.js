import React from 'react';

import Layout from '../../components/layout';
import NewTabLink from '../../components/NewTabLink';

import risePosterPdf from '../../assets/images/fulls/projects/lss/2017-RISE-Poster.pdf';

const PAPER_LINK = "https://ieeexplore.ieee.org/document/7833307";
const DP_LINK = "https://devblogs.nvidia.com/cuda-dynamic-parallelism-api-principles/";

export default class LssPage extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <a name="description"/>
          <header><h1>Level Set Segmentation</h1></header>
          <p>
            In the 2016-2017 school year, I got the opportunity to work in the
            Northeastern University Computer Architecture Research lab, working on
            a parallel computing project under Julian Gutierrez and Dr. David Kaeli.
          </p>
          <p>
            The goal of the project was to develop algorithms for object detection in images
            using CUDA, NVIDIA's GPU programming framework for C/C++. The approach uses
            a flood-fill method as opposed to more computationally-expensive solving of
            partial differential equations to find object borders. You can read more about
            the details of the project in the paper <NewTabLink link={PAPER_LINK} text="here" />!
          </p>
          <p>
            I focused on analyzing whether <NewTabLink link={DP_LINK} text="dynamic parallelism" />,
            firing threads from within threads on the GPU, was faster or slower than offloading some
            work on the top level to the CPU and communicating more between the CPU and GPU. My research
            found that dynamic parallelism proved more efficient for images of multiple, simple objects,
            while the combined CPU/GPU implementation was faster for images of a single object with
            an intricate border.
          </p>
          <p>
            I reported on these findings at Northeastern RISE 2017, an annual undergraduate research
            exposition. You can see the poster I presented <NewTabLink link={risePosterPdf} text={"here"} />.
          </p>
        </div>
      </Layout>
    );
  }
};