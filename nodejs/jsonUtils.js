const ObjectUtils = require('./objectUtils');

module.exports = {
  stringifyToCommandLine(jsonObj){
    if(ObjectUtils.isEmptyObj(jsonObj))
      return '';
    return JSON.stringify(jsonObj, undefined, 2).replace(/"/g, '\\"');
  }
};