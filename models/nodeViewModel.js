require('date-utils');
var config = require('../config')

var NodeViewModel = function(address) {
  this.moduleAddress = address
  this.commonName = this.mapAddressToCommonName(address)
  this.measurements = []
}

NodeViewModel.prototype.lastMeasuredValue = function() {
  if (this.measurements.length > 0) {
    return this.measurements[0].value
  } else {
    return '--'
  }
}

NodeViewModel.prototype.lastMeasuredTimestamp = function() {
  if (this.measurements.length > 0) {
    return this.measurements[0].timestamp
  } else {
    return ''
  }
}

NodeViewModel.prototype.isStalling = function() {

  var stallingDate = new Date().removeSeconds(config.node.stallTimeout)
  var measurementDate = new Date(this.lastMeasuredTimestamp())

  return measurementDate.isBefore(stallingDate)
}

NodeViewModel.prototype.mapAddressToCommonName = function (address) {

  var commonName = config.node.mappingTable[address]

  if (commonName) {
    return commonName
  } else {
    return address
  }

}

module.exports = NodeViewModel
