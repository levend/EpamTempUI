var express = require('express');
var router = express.Router();
var nodeDataProvider = require('../dao/nodeDataProvider')
/* GET all nodes*/
router.get('/', function(req, res, next) {

  nodeDataProvider.getTemperatureForEveryNode(function(){

  });

  res.send('respond with a resource');
});

module.exports = router;
