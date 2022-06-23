// const fetch = require('node-fetch');

const playerController = {};

playerController.getPlayer = (req, res, next) => {
  const { teamNum, playerName } = req.params;
  const headers = {
    'X-RapidAPI-Key': '6b8886579fmshf55b5525311c212p1b549cjsna4dc171c6c52',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
  };
  const url = `https://api-nba-v1.p.rapidapi.com/players?season=2021&team=${teamNum}&search=${playerName}`;

  // fetch(url, {
  //   method: 'GET',
  //   headers: headers,
  // })
  //   .then((data) => data.json())
  //   .then((player) => (res.locals.player = player))
  //   .then(() => next())
  //   .catch((err) =>
  //     next({
  //       log: 'Express error caught in playersController.getPlayer middleware',
  //       message: { err: 'An error has occurred' },
  //     })
  //   );
};

// module.exports = playerController;
/*
const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/players',
      params: {
        team: this.props.teamNum,
        season: '2021',
        search: this.props.playerName,
      },
      headers: {
        'X-RapidAPI-Key': '6b8886579fmshf55b5525311c212p1b549cjsna4dc171c6c52',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => this.setState({ players: response.data.response }))
      .catch((error) => console.error(error));
*/
