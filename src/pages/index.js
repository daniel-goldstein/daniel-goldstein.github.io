import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import ProjectGallery from "../components/ProjectGallery";

import PROJECTS_DATA from '../data/projects';

import resume from '../assets/images/fulls/resume.pdf';
import NewTabLink from "../components/NewTabLink";

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
              <h2>Me in a Nutshell</h2>
            </header>

            <p>
              I&apos;m a fourth-year student at Northeastern University studying computer science
              and mathematics. I love learning about computer science, math, and the intersection of the two
              in science and education. If I haven&apos;t talked your ear off about something
              I&apos;ve learned in class, you probably haven&apos;t known me long enough
              (or maybe just the right amount).
            </p>
            <p>
              I recently finished my second co-op at
              the Broad Institute of MIT and Harvard as a software engineering co-op on the <NewTabLink link={"https://hail.is/"} text={"Hail"}/> team.
              My work focused on developing a distributed linear algebra compiler to enable
              the application of machine learning on large-scale genomic datasets. In the Spring of 2020,
              I will be completing my third co-op experience as a student researcher at
              the <NewTabLink link={"https://www.bdi.ox.ac.uk"} text={"Oxford Big Data Institute"} />, and in
              the summer I'll be working as a SWE intern at <NewTabLink link={"https://slack.com"} text={"Slack"} />.
            </p>
            <p>
              At school, I spend most of my "free" time working as a TA for Fundamentals of Computer Science 1 and
              serving as a member of the Student Leadership Council for Husky Ambassadors, Northeastern's student tour
              guide organization. I am also a member of Students for the Exploration and Development of Space (SEDS).
              Last year, I was the Digital Core Analysis Lead in an awesome team of undergraduates competing in NASA&apos;s RASC-AL
              Moon to Mars Ice & Prospecting Challenge.
            </p>
            <p>
              You can learn more about my work and research on my <NewTabLink link={resume} text={"resume"} />.
              Check out a few of my projects below and let me know what you think!
            </p>
          </section>

          <section id="two">
            <a name="projects" />
            <h2>Recent Projects</h2>

            <ProjectGallery projects={PROJECTS_DATA.map(({ id, thumbnail, caption, description, page }) => ({
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
