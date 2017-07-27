const moment = require('moment');

module.exports = {
  /** use moment's formatter rule */
  prependNow(filename, format){
    format = format || 'YYYYMMDD-HHmm';
    const nowString = moment().format('YYYYMMDD-HHmm');
    return filename? `${nowString}_${filename}`: nowString;
  }
};