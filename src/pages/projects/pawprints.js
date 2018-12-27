import React from 'react';

import Layout from '../../components/layout';

export default class PawprintsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <a name="description"/>
          <header className="major">
            <h1>Pawprints</h1>
            {/*<ul className="icons">*/}
              {/*<li>*/}
                {/*<a href="https://github.com/daniel-goldstein"*/}
                   {/*target="_blank" rel="noopener noreferrer"*/}
                   {/*className="icon fa-w">*/}
                  {/*<span className="label">Github</span>*/}
                {/*</a>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<a href="https://github.com/daniel-goldstein/pawprints-web"*/}
                   {/*target="_blank" rel="noopener noreferrer"*/}
                   {/*className="icon fa-code">*/}
                  {/*<span className="label">Github</span>*/}
                {/*</a>*/}
              {/*</li>*/}
            {/*</ul>*/}
          </header>
          <p>
            My favorite tradition at Northeastern University is Husky Hunt: an annual scavenger
            hunt where 50 teams of 12 students each, equipped with only bikes and a fervor
            for puzzle-solving, attempt to rack up as many points as possible in 24 hours. The
            hunt consists primarily of solving hundreds of clues that correspond to locations
            in the greater Boston area. Teams must then "complete" those clues submitting
            selfies of themselves at those locations.
          </p>
          <p>
            The Hunt is a challenge in logistics. It is made to overwhelm, and the team that
            can best handle the craze wins. Last year, I learned how difficult it was to
            coordinate the solving and completion of hundreds of clues efficiently (especially
            on 0 hours of sleep), and committed to devise an easier system.
          </p>
          <p>
            The idea was a synchronized map where clue solvers at HQ could easily upload solved
            clue locations. Bike teams on the ground could then see these locations in real time,
            snap a picture, and upload the image where it would be properly named and stored for
            submission.
          </p>
        </div>
      </Layout>
    );
  }
}