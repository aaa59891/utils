const mkdirp = require('mkdirp');
const fs = require('fs');
const Promise = require('bluebird');
module.exports = {
  mkdirsPromise(dirPath){
    return new Promise((resolve, reject) => {
      if(fs.existsSync(dirPath)){
        resolve();
      }else{
        mkdirp(dirPath, (err) => {
          if(err) return reject(err);
          resolve();
        });
      }
    });
  }
};