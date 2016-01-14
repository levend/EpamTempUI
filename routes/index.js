var express = require('express');
var router = express.Router();
var dataProvider = require('../dao/nodeDataProvider')

/* GET home page. */
router.get('/', function(req, res, next) {

  dataProvider.getTemperatureForEveryNode(function(nodes){
    res.render('index', { nodes: nodes });
  })

});

module.exports = router;
