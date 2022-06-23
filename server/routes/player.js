const express = require('express');
const playerController = require('../controllers/playerController');
const router = express.Router();

router.get(
  '/season=2021&:team&:search',
  playerController.getPlayer,
  (req, res) => {
    return res.status(200).send(res.locals.player);
  }
);

module.exports = router;
