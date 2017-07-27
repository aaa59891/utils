const log4js = require('log4js');

/**
 * need to set the log4js config first!!!
 */
const config = require('../config');

log4js.configure(config.log4js);

module.exports = function(categoryName){
  return log4js.getLogger(categoryName);
};

