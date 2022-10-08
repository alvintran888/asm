var express = require('express');
const { routes } = require('../app');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render("index")
})

router.get("/linknaocungxong", (req, res) => {
  res.render('tengicungduoc')
})

router.get('/quocte', (req, res) => {
  var text = "<h1 style='color: purple; font-style: italic'> Toi muon tat ca... !!!</h1>"
})

router.get('/api', (req, res) => {
  var data = 
  {
"name": "Alvin Tran",
"age": 21,
"address": "Royal City",
"gender": "Male"
  }
  res.json(data)
})


module.exports = router;