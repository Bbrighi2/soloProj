const path = require('path');
const express = require('express');
const { resolve } = require('path');
// const db = require('./database/cards');

const app = express();
const PORT = 3000;

const playerRoute = require('./routes/player.js');
/*
FIXME: 
  figure out how / why to handle api calls from frontend here
  add some sort of database to hold api data, especially for when user can add a player
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'client')));

// app.use('/player', playerRoute);

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error caught in unknown middleware',
    status: 400,
    message: { err: 'An error has occurred' },
  };
  const newErr = Object.assign(defaultErr, err);
  console.log(newErr.log);

  res.status(newErr.status).send(JSON.stringify(newErr.message));
});

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});

module.exports = app;
