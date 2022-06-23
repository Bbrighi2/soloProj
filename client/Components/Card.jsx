import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        1: 'Atlanta Hawks',
        2: 'Boston Celtics',
        4: 'Brooklyn Nets',
        5: 'Charlotte Hornets',
        6: 'Chicago Bulls',
        7: 'Cleveland Cavaliers',
        8: 'Dallas Mavericks',
        9: 'Denver Nuggets',
        10: 'Detroit Pistons',
        11: 'Golden State Warriors',
        14: 'Houston Rockets',
        15: 'Indiana Pacers',
        16: 'Los Angeles Clippers',
        17: 'Los Angeles Lakers',
        19: 'Memphis Grizzlies',
        20: 'Miami Heat',
        21: 'Milwaukee Bucks',
        22: 'Minnesota Timberwolves',
        23: 'New Orleans Pelicans',
        24: 'New York Knicks',
        25: 'Oklahoma City Thunder',
        26: 'Orlando Magic',
        27: 'Philadelphia 76ers',
        28: 'Phoenix Suns',
        29: 'Portland Trail Blazers',
        30: 'Sacramento Kings',
        31: 'San Antonio Spurs',
        38: 'Toronto Raptors',
        40: 'Utah Jazz',
        41: 'Washington Wizards',
      },
    };
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
            <li>{this.props.year} years</li>
            <li>{this.props.height}</li>
            <li>{this.props.weight}</li>
          </ul>
        </div>
        <div id="player-details">
          <strong>{this.props.college}</strong>
          <p>Team: {this.state.team[this.props.teamId]}</p>
          <p>Stats</p>
        </div>
      </div>
    );
  }
}

export default Card;
