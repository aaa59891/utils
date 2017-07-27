const mongoose = require('mongoose');

var connections = {};

mongoose.Promise = global.Promise;

module.exports = function(mongoUri){
  return {
    getDatabaseConnection: function(name){
      if(connections[mongoUri] && connections[mongoUri][name]){
        return connections[mongoUri][name];
      }else{
        if(!connections[mongoUri]){
          connections[mongoUri] = {};
        }
        connections[mongoUri][name] = mongoose.createConnection(mongoUri + '/' + name);
        return connections[mongoUri][name];
      }
    }
  };
};