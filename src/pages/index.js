import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import ProjectGallery from "../components/ProjectGallery";

import PROJECTS_DATA from '../data/projects';

export default class HomeIndex extends React.Component {
  render() {
    const siteTitle = "Daniel Goldstein";
    const siteDescription = "A little about me";

    return (
      <Layout>
        <a name="about-me"/>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">

          <section id="one">
            <header className="major">
              <h2>Daniel Goldstein</h2>
            </header>

            <h2>Me in a Nutshell</h2>
            <p>
              I&apos;m currently a third-year student at Northeastern University studying computer science
              and mathematics, with a minor in physics. I&apos;m about to start a 6-month co-op position at
              the Broad Institute of MIT and Harvard as a software engineering co-op on the Hail team.
              I love learning about computer science, math, and the intersection of the two
              in science and education. If I haven&apos;t talked your ear off about something
              I&apos;ve learned in class, you probably haven&apos;t known me long enough
              (or maybe just the right amount).
            </p>
            <p>
              At school, I spend most of my "free" time working as a TA for Fundamentals of Computer Science 1 and
              am a member of Students for the Exploration and Development of Space.
              When I&apos;m not at a computer, I&apos;m often giving tours to prospective students.
            </p>
            <p>
              I like to procrastinate with productivity. Check out my projects below and let me know what you think!
            </p>
          </section>

          <section id="two">
            <a name="projects" />
            <h2>Recent Projects</h2>

            <ProjectGallery projects={PROJECTS_DATA.map(({ id, src, thumbnail, caption, description, page }) => ({
              src,
              thumbnail,
              caption,
              description,
              page
            }))} />
          </section>

          <section id="three">
            <a name="reach-out" />
            <h2>Reach Out</h2>
            <p>If you have any questions about stuff on this site, feel free to reach out!</p>
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                <a href="mailto:danielgold95@gmail.com">danielgold95@gmail.com</a>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    );
  }
}
