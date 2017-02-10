// src/components/About/index.js
import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    console.log(this.props.location.query.name)
    return (
      <div>
        <h1>{this.props.location.query.name}</h1>
        <h1>{this.props.location.query.id}</h1>
        I am Foo!
      </div>
    );
  }
}