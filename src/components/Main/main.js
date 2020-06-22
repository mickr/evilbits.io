import './main.css';
import Header from '../Header'
import React from 'react'
import developer from '../../svg/developer.svg';

const IndexPage = () => (
  <div className="greenBg">
    <div className="main-content">
      <Header />
      <div className="intro">
        <h1 className="banner"><span role="img">👋 </span>I'm Mick</h1>
        <h4 className="subtext">I'm a software engineer, entrepreneur, and technologist in the SF
          Bay Area.</h4>
        <img src={developer} alt="developer" />
      </div>
    </div>
  </div>
);

export default IndexPage