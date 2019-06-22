import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return <div className="jumbotron jumbotron-fluid text-sm-center" style={{ backgroundImage: 'url(assets/dog.jpg)', color: 'white'}} >
    <div className="container">
      <h1>React.js Interfaces</h1>
      <p>with Bootstrap and SASS.</p>
      <p><Button /></p>
    </div>
  </div>;
  }
}