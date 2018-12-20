import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li><a href="https://github.com/daniel-goldstein" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">Github</span></a></li>
            <li><a href="https://www.linkedin.com/in/daniel--goldstein/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="mailto:danielgold95@gmail.com" className="icon fa-envelope-o"><span className="label">Mail</span></a></li>
          </ul>
          <br />
          <ul className="copyright">
            <li>Powered by <a href="https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-strata" target="_blank" rel="noopener noreferrer" >Gatsby Starter Strata</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
