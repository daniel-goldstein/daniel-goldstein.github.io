import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpeg'

import { Link } from 'gatsby';

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <Link to={"#"} className="image avatar"><img src={avatar} alt="" /></Link>
          <h1><Link to={"#"}><strong>Hi, I&apos;m Daniel!</strong></Link></h1>
          <br />
          <h1><Link to={"#about-me"}>About Me</Link></h1>
          <h1><Link to={"#projects"}>Projects</Link></h1>
          <h1><Link to={"#reach-out"}>Reach Out</Link></h1>
        </div>
        <Footer />
      </header>
    );
  }
}
