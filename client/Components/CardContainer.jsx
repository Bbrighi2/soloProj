import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import Card from './Card';

/*
TODO:  
    add support for teams/stats and figure out how to make multiple api requests
    implement REDUX  to handle state!!!
*/

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/players',
      params: { team: '28', season: '2021' },
      headers: {
        'X-RapidAPI-Key': '6b8886579fmshf55b5525311c212p1b549cjsna4dc171c6c52',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => this.setState({ players: response.data.response }))
      .catch((error) => console.error(error));
  }
  render() {
    console.log(this.state.players);
    const playerCard = [];
    for (let i = 0; i < this.state.players.length; i++) {
      const player = this.state.players[i];
      const nba = player.nba;
      const number = player.leagues;
      const name = `${player.firstname}  ${player.lastname}`;
      const height = `${
        player.height.feets !== null ? player.height.feets : ''
      }${player.height.inches !== null ? "'" : ''} ${
        player.height.inches !== null ? player.height.inches : ''
      } `;
      const weight = `${player.weight.pounds}lbs.`;
      const school = player.college;
      let playerNum;
      let position;
      let active;
      for (let nums in number) {
        let standard = number.standard;
        // console.log(standard);
        standard !== undefined && standard.jersey !== null
          ? (playerNum = ` #${standard.jersey}`)
          : null;

        standard !== undefined ? (position = standard.pos) : null;

        standard !== undefined ? (active = standard.active) : null;
      }
      if (active === true) {
        playerCard.push(
          <Card
            key={uuid()}
            playerName={name}
            number={playerNum}
            year={player.nba.pro}
            height={height !== "'" ? height : null}
            weight={weight}
            college={school}
          />
        );
      }
    }
    return <div>{playerCard}</div>;
  }
}
export default CardContainer;
