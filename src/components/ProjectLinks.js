import React from 'react';

const renderLink = (url, iconClass, spanName) => {
  return (
    <li>
      <a href={url}
         target="_blank" rel="noopener noreferrer"
         className={`icon ${iconClass}`}>
        <span className="label">{spanName}</span>
      </a>
    </li>
  );
};

export default class ProjectLinks extends React.Component {
  render() {
    const { websiteUrl, githubUrl } = this.props;

    return (
      <ul className="icons">
        {websiteUrl && renderLink(websiteUrl, "fa-globe", "Website")}
        {githubUrl && renderLink(githubUrl, "fa-github", "Github")}
      </ul>
    );
  }
}