import React from 'react';

import Layout from '../../components/layout';
import ProjectLinks from "../../components/ProjectLinks";

import dashboard_img from '../../assets/images/fulls/projects/pawprints/pawprints_dashboard.jpeg';
import mobile_img from '../../assets/images/fulls/projects/pawprints/pawprints_mobile.jpeg';

export default () => {
  return (
    <Layout>
      <div id="main">
        <a name="description"/>
        <header className="major">
          <h1>Pawprints</h1>
          <ProjectLinks websiteUrl="https://pawprints-hh.firebaseapp.com"
                        githubUrl="https://github.com/daniel-goldstein/pawprints-web"
          />
        </header>
        <p>
          My favorite tradition at Northeastern is Husky Hunt, an annual scavenger
          hunt where 50 teams of 12 students each, equipped with bikes and a passion
          for puzzle-solving, attempt to rack up as many points as possible in 24 hours. The
          hunt centers around solving clues that correspond to locations in the greater
          Boston area. Teams must then "complete" those clues by submitting
          selfies of themselves at those locations.
        </p>
        <p>
          The Hunt is a challenge in logistics. It is made to overwhelm, and the team that
          can best handle the craze wins. Last year, I learned how difficult it was to
          coordinate the solving and completion of hundreds of clues efficiently (especially
          on 0 hours of sleep), and committed to devise an easier system.
        </p>
        <p>
          Pawprints is a synchronized map where clue solvers at HQ can easily upload solved
          clue locations. Bike teams on the ground can then see these locations in real time,
          snap a picture, and upload the image where it is properly named and stored for
          submission. The mobile app also uploads Hunters&apos; locations so that teammates
          at HQ can quickly alert the closest Hunters to off-campus challenges. It also shows
          the completed and uncompleted clues in blue and red, respectively.
          Below are snapshots of the web app and mobile app used during the 2018
          competition.
        </p>
        <div className='project-image-box'>
          <img src={dashboard_img} width='70%'/>
          <img src={mobile_img} width='25%'/>
        </div>
        <p>
          The webapp is built in React, using the Google Maps API, and backed by Google Firebase for
          persisting clue data, storing selfies, and hosting the site itself. Firebase also
          connects to the mobile app, which is written in React Native to support Hunters using
          both Android and iOS.
        </p>
      </div>
    </Layout>
  );
}