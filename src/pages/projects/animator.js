import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';

import big_bang_svg from '../../assets/images/fulls/projects/animator/big-bang.svg';
import buildings_svg from '../../assets/images/fulls/projects/animator/buildings.svg';
import animator_ui from '../../assets/images/fulls/projects/animator/ui.png';

export default () => {
  return (
    <Layout>
      <div id="main">
        <a name="description"/>
        <header className="major">
          <h1>Animator</h1>
        </header>
        <p>
          This project is a keyframe animator written for my Object Oriented Design class in Java
          using the Java Swing UI library. This was a half-semester-long partner project to create
          a program that renders animations like the ones below. The animator posed difficult
          challenges in model design and algorithmic efficiency, evident in the thousands of
          shapes in the big-bang animation on the left.
        </p>
        <div className='project-image-box'>
          <img src={big_bang_svg} width='40%'/>
          <img src={buildings_svg} width='40%'/>
        </div>
        <br />
        <p>
          The project focused on developing a model-view-controller (MVC) architecture for rendering
          files describing animations of simple shapes. The animator provides the user with the
          following features at runtime.
        </p>
        <ul>
          <li>Play/pause the animation</li>
          <li>Move forward/backward in time</li>
          <li>Adjust the animation speed</li>
          <li>Play the animation on a loop</li>
          <li>Toggle the visibility of shapes</li>
          <li>Change the background color</li>
          <li>Export the animation with its current configurations as an SVG</li>
        </ul>
        <p>
          The above SVGs were constructed using the animator! Below is a snapshot of the user
          interface.
        </p>
        <div className='align-center'>
          <img src={animator_ui} width='80%'/>
        </div>
        <p>
          If you would like to see the animator code, please <Link to={"/#"}>reach out</Link>!
          The source is kept private due to course policy.
        </p>
      </div>
    </Layout>
  );
}