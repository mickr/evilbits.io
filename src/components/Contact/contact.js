import React from 'react';
import { faLinkedin, faGithub, faTelegram, faTwitter } from '@fortawesome/fontawesome-free-brands';
import FontAwesome from '@fortawesome/react-fontawesome';
import './contact.css';

export default function Connect(props) {

  return (
    <div>
      <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/evilbits/">
        <FontAwesome className="contact-icon" size={'2x'} icon={faLinkedin} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/mickr">
        <FontAwesome className="contact-icon" size={'2x'} icon={faGithub} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/evilbits">
        <FontAwesome className="contact-icon" size={'2x'} icon={faTwitter} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://t.me/evilbits">
        <FontAwesome className="contact-icon" size={'2x'} icon={faTelegram} />
      </a>
    </div>
  );
};
