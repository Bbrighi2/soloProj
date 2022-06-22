import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="cards">
        <h3>
          {this.props.playerName}
          {this.props.number !== null && this.props.number !== undefined
            ? this.props.number
            : ''}
        </h3>
        <div id="player-profile">
          <ul>
            <li>{this.props.year}</li>
            <li>{this.props.height}</li>
            <li>{this.props.weight}</li>
          </ul>
        </div>
        <div id="player-details">
          <strong>{this.props.college}</strong>
          <p>Team</p>
          <p>Stats</p>
        </div>
      </div>
    );
  }
}

export default Card;
