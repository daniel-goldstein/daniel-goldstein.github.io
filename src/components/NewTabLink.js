import React from 'react';

export default ({link, text}) => {
  return (<a href={link} target="_blank" rel="noopener noreferrer">{text}</a>);
}