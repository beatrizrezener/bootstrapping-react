import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './style.css';

export default class App extends React.Component {
  render() {
    return <Jumbotron className="-fluid text-sm-center custom" 
    containerFluid={true} >
      <h1>React.js Interfaces</h1>
      <p>with Bootstrap and SASS.</p>
      <p>
        <Button className="-primary" href="http://linkedin.com/in/beatrizrezener" target="_blank"/>
        <Button className="-danger -sm"/>
      </p>
      <Button className="-primary -lg -block" disabled />
  </Jumbotron>;
  }
}
