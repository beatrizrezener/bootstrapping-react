import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.scss';

export default class App extends React.Component {
  render() {
    return <ReactCSSTransitionGroup transitionName='app' transitionAppear={true} transitionAppearTimeout={500}><Jumbotron className="-fluid custom" 
    containerFluid={true} >
      <h1>React.js Interfaces</h1>
      <p>with Bootstrap and SASS.</p>
      <p>
        <Button className="-primary" href="http://linkedin.com/in/beatrizrezener" target="_blank" label="My Linkedin"/>
        <Button className="-danger -sm" label="My Profile" />
      </p>
      <Button className="-primary -lg -block" >My Page</Button>
  </Jumbotron></ReactCSSTransitionGroup>;
  }
}
