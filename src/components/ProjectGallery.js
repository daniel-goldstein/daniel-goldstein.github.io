import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class ProjectGallery extends React.Component {
  constructor() {
    super();
  }

  renderGallery () {
    const { projects } = this.props;

    const gallery = projects.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <Link
            className="image fit thumb"
            to={`/projects/${obj.page}/#description`}
          >
            <img src={obj.thumbnail} />
          </Link>

          <h3>{obj.caption}</h3>
          <p>{obj.description}</p>
        </article>
      );
    });

    return (
      <div className="row">
        {gallery}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderGallery()}
      </div>
    );
  }
}

ProjectGallery.displayname = "Project Gallery";
ProjectGallery.propTypes = {
  projects: PropTypes.array
};