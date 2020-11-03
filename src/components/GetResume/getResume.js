import FontAwesome from '@fortawesome/react-fontawesome';
import React from 'react';
import rocketMan from '../../svg/rocket-man.svg';
import { faFilePdf } from '@fortawesome/fontawesome-free-regular/index';

export default function GetResume(props) {
  return (
    <div className="grid grid--full large-grid--fit grid--gutters">
      <div className="grid-cell">
        <img src={rocketMan} alt="Rocket Man" />
      </div>
      <div className="grid-cell">
        <h1 className="banner">Let's change the world</h1>
        <p>
          I have a desire to make the world around me a better place. I want to leave it better than I found it. When approaching projects, I like to ask myself what the benefits are and how this can help others. It doesn't always have to be big picture universe changing ideas that can change the world. Sometimes, it is enough to change one person's world to make a dent in their universe.
        </p>
        <p>
          Some of the characteristics that help me focus on that goal are listed below.
        </p>
        <ul>
          <li>I am a solid self starter that hates to waste time.</li>
          <li>Hard worker, I always get the job done.</li>
          <li>Life long learner, if I'm not learning I'm not having fun.</li>
          <li>I am self-taught, but love working as part of a high performing team.</li>
          <li>I enjoy the role of mentor as much as I enjoy being a mentee</li>
        </ul>
        <div className="grid large-grid--1of2">
          <div className="grid-cell">
            <a target="_blank" rel="noreferrer" download href="https://drive.google.com/uc?export=download&id=1zqgaEUBWKZWeYz7RORYN40J5YAVw9cMG"
               className="button button--primary">
              <FontAwesome style={{ marginRight: 10 }} icon={faFilePdf} size="lg" /> Get my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

GetResume.propTypes = {};

GetResume.defaultProps = {};
