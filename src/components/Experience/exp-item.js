import React from 'react';
import Types from 'prop-types';

export default function ExperienceItem(props) {
  return (
    <article className="media">
      <img className="media-image" src={props.image} alt="" />
      <div className="media-desc">
        <h3>{props.title}</h3>
        <h4 className="subtext">{props.subTitle}</h4>
        <h5 className="subtext">{props.url}</h5>
        {
          typeof props.description === 'string' ?
            <p dangerouslySetInnerHTML={{ __html: props.description }} /> :
            props.description
        }
      </div>
    </article>
  );
};

ExperienceItem.propTypes = {
  image: Types.string.isRequired,
  subTitle: Types.string.isRequired,
  title: Types.string.isRequired,
  description: Types.string.isRequired,
};
