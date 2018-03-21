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
                javascript frameworks. I primarily use ES6 but fluent with ES5 as well. I choose to use Javascript due to it's versatility of being able
                to run just about anywhere.
                I am versed in many libraries such as <a href="https://jquery.org">JQuery</a>, <a href="https://d3js.org/">D3</a>, <a
                href="https://facebook.github.io/immutable-js/">Immutable</a>. I also versed with Webpack, Gulp, NPM and various
                 other tools in the Javascript toolchain. I am also an experienced Node JS developer.
                I have built and worked on various CLI tools and building API's with Express and Hapi JS.
              </p>
            </article>
            <article className="grid-cell">
              <img className="stack-image" src={react} alt="" />
              <h3>Frameworks</h3>
              <p>
                When developing large scale applications, it can be a great idea to use a framework.
                I am an experienced <a target="_blank" href="https://reactjs.org">React</a> developer, building small to large
                scale applications. I also have used many other frameworks such as <a target="_blank" href="https://meteor.com">Meteor</a>, <a target="_blank" href="https://vuejs.org">Vue JS</a>,
                and <a target="_blank" href="https://angular.io">Angular JS</a>. I think frameworks are great, but they're not always
                a good choice. When sizing up a project, make sure to do due diligence when selecting a framework, you may find
                you don't even need one!
              </p>
            </article>
            <article className="grid-cell">
              <img className="stack-image" src={css} alt="" />
              <h3>Styles</h3>
              <p>
                Applications are fun to build, but making them beautiful is just as important.
                I ❤️ building beautiful things and I primarily use CSS to accomplish that.
                When starting a project I also look at what I am trying to accomplish with styles and find tools to fit that goal.
                I have used CSS, CSS Modules, SCSS (Sass), CSSinJS, and many style frameworks as well. I try to follow
                <a href="http://getbem.com/">BEM</a> conventions when working with non scoped
                CSS.
              </p>
            </article>
            <article className="grid-cell">
              <img className="stack-image" src={mobile} alt="" />
              <h3>Mobile</h3>
              <p>
                React Native is my choice for mobile development. It is a testament to the versatility of Javascript.
                I have built a few applications with React Native, ranging from an app to track sales ranks on Amazon to
                multiple sophisticated location based applications built on Google Maps. I am familiar with iTunes connect and
                test flight to allow beta testing.
              </p>
            </article>
          </div>
        </div>
    );
  }
}

export default MyStack;
