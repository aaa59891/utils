const jsonfile = require('jsonfile');
const Promise = require('bluebird');
module.exports = {
  writePromise(fileFullPath, data){
    return new Promise((resolve, reject) => {
      jsonfile.writeFile(fileFullPath, data, {spaces: 2}, (err) => {
        if(err) return reject(err);
        resolve();
      });
    });
  }
};