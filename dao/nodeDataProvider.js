var influxClient = require('./influxClient')
var NodeViewModel = require('../models/nodeViewModel')
var MeasurementViewModel = require('../models/measurementViewModel')

module.exports.getTemperatureForEveryNode = function(callback) {

  influxClient.getTemperatureForEveryNode(function(influxError, influxResult){

    var returnArray = []

    //if everything is ok, we need to map the influx objects to much simpler viewModels
    if (influxError==null) {

      //it returns an array of array
      if (influxResult.length == 1) {

        var innerArray = influxResult[0]
        for (var i = 0; i < innerArray.length; i++) {
          var currentElement = innerArray[i];

          var vm = new NodeViewModel(currentElement.deviceId)
          var meas = new MeasurementViewModel(currentElement.time, currentElement.value)

          vm.measurements.push(meas)
          returnArray.push(vm)
        }

        //sort the array based on the common name of the nodes
        returnArray.sort(function (first, second) {
          return first.commonName.localeCompare(second.commonName)
        })

      }
    }

    console.log("Mapped result: "+JSON.stringify(returnArray))
    callback(returnArray)
  })

}