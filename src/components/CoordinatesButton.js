import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return <button onClick={this.handleClick}>Coordinates</button>
  }
}


