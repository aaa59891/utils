const ObjectUtils = require('./objectUtils');

function createHeader(arr){
  return arr.join(',') + '\n';
}

module.exports = {
  stringifyToCommandLine(jsonObj){
    if(ObjectUtils.isEmptyObj(jsonObj))
      return '';
    return JSON.stringify(jsonObj, undefined, 2).replace(/"/g, '\\"');
  },

  jsonToCsv(headerArr, dataArr){
    return dataArr.reduce((pre, cur) => {
      const tempStr = headerArr.reduce((preH, curH) => {
          return preH.concat((cur[curH] || '') + ',')
        }, '');
      return pre.concat(tempStr.replace(/,$/, '\n'));
    }, createHeader(headerArr));
  }
};