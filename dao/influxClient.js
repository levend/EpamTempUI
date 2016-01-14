/**
 * Created by balazsgollner on 13/01/16.
 */
var influx = require('influx')
var config = require('../config.js')

var client = influx({
  host : config.influx.host,
  username : config.influx.username,
  password : config.influx.password,
  database : config.influx.database
})

module.exports.getTemperatureForEveryNode = function(callback) {

  var query = "SELECT value FROM temperature WHERE sensor='MCP9701A' AND deviceNetwork='xbee' GROUP BY * ORDER BY time DESC LIMIT 1";

  client.query(query, function(err, results) {
    console.log('Influx Result:'+JSON.stringify(results) + ' Error:'+err)
    callback(err, results)
  })

}