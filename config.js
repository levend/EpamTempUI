/**
 * Created by balazsgollner on 13/01/16.
 */
var config = {}
config.influx = {}
config.influx.host = "ephubudx0001.epam.nimbus-online.net"
config.influx.username = "homeauto"
config.influx.password = "ha__666ha"
config.influx.database = "home_automation"

config.node = {}
config.node.mappingTable = {}
config.node.mappingTable["0013A20040E98A95"] = "Node 06"
config.node.mappingTable["0013A20040E7CBAB"] = "Node 08"
config.node.mappingTable["0013A20040E7CB87"] = "Node 01"
config.node.mappingTable["0013A200407BCF62"] = "Node 10"
config.node.mappingTable["0013A20040E7CBAA"] = "Node 05"
config.node.mappingTable["0013A20040E7CB84"] = "Node 03"
config.node.mappingTable["0013A200407BCF49"] = "Node 09"
config.node.mappingTable["0013A20040E7CBA9"] = "Node 07"
config.node.mappingTable["0013A20040E7CBAD"] = "Node 02"
config.node.mappingTable["0013A200407BCF43"] = "Node 04"

config.node.stallTimeout = 90

module.exports = config