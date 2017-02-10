// src/components/About/index.js
import React, { Component } from 'react';

export default class Foo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.params.name}</h1>
        <h1>{this.props.params.id}</h1>
        I am Foo!
      </div>
    );
  }
}

