import React, { Component } from 'react';
import css from '../../images/css.png';
import js from '../../images/javascript.png';
import mobile from '../../images/icon-phone.png';
import react from '../../images/react.png';

class MyStack extends Component {
  render() {
    return (
        <div>
          <div className="section-title">
            <h1 className="banner banner--center">My Stack</h1>
            <h3 className="subtext banner--center">Tools and Frameworks</h3>
          </div>
          <div className="grid grid--full large-grid--fit grid--gutters">
            <article className="grid-cell">
              <img className="stack-image" src={js} alt="" />
              <h3>Javascript</h3>
              <p>
                I've worked with Javascript in many capacities, from Node back ends to custom built
                javascript frameworks. I primarily use ES6 but fluent with ES5 as well.
              </p>
            </article>
            <article className="grid-cell">
              <img className="stack-image" src={react} alt="" />
              <h3>Frameworks</h3>
              <p>
                When developing large scale applications, it can be a great idea to use a framework.
                I am an experienced <a target="_blank" href="https://reactjs.org">React</a> developer, building small to large
                scale applications.
              </p>
            </article>
            <article className="grid-cell">
              <img className="stack-image" src={css} alt="" />
              <h3>Styles</h3>
              <p>
                Applications are fun to build, but making them beautiful is just as important.
                I ❤️ building beautiful things and I primarily use CSS to accomplish that.
              </p>
            </article>
            <article className="grid-cell">
              <img className="stack-image" src={mobile} alt="" />
              <h3>Mobile</h3>
              <p>
                React Native is my choice for mobile development. It is a testament to the versatility of Javascript.
              </p>
            </article>
          </div>
        </div>
    );
  }
}

export default MyStack;
