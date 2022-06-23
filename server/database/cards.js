const fs = require('fs');

let writeLocation = `${__dirname}/players.json`;
let cardList = JSON.parse(fs.readFileSync(writeLocation));

const db = {};

db.sync = (cards) => {
  if (!Array.isArray(cards)) {
    return new Error(
      `Cards must be an array of objects, received ${typeof cards}`
    );
  }
  db.write(cards);
  db.reset();
  return cardList;
};

db.find = () => {
  db.reset();
  return cardList;
};

db.write = (data) => {
  fs.writeFileSync(writeLocation, JSON.stringify(data, null, 2));
};

db.reset = () => {
  cardList = JSON.parse(fs.readFileSync(writeLocation));
};

module.exports = db;
