import './experience.css';
import ExperienceItem from './exp-item';
import React from 'react';
import Types from 'prop-types';
import timeMan from '../../svg/time-man.svg';
import { withPrefix } from 'gatsby-link';

export default function Experience(props) {
  return (
    <div className="grid grid--gutters grid--full">
      <div className="man-with-time">
        <img src={timeMan} alt="" />
      </div>
      <div className="grid-cell">
        <h1 className="banner banner--center">My Experience</h1>
        <h3 className="subtext banner--center">Ghosts of Engineering Past and Present</h3>
        {
          props.jobs.map(job => (
            <ExperienceItem
              description={job.node.html}
              image={withPrefix(job.node.frontmatter.image)}
              key={job.node.frontmatter.title}
              subTitle={job.node.frontmatter.subTitle}
              title={job.node.frontmatter.title}
              url={job.node.frontmatter.url}
            />
          ))
        }
      </div>
    </div>
  );
};

Experience.propTypes = {
  jobs: Types.array.isRequired,
};

Experience.defaultProps = {};
