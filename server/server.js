const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

/*
FIXME: 
  figure out how / why to handle api calls from frontend here
  add some sort of database to hold api data, especially for when user can add a player
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});

module.exports = app;
