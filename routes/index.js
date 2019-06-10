const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/home', { title: 'Autoatendimento' });
});

module.exports = router;
