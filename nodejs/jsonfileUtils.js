const jsonfileW = require('./jsonfileWrapper');
const mkdirpW = require('./mkdirpWrapper');

module.exports = {
  writeFilePromise(destDir, fileName, data){
    return mkdirpW.mkdirsPromise(destDir)
        .then(() => jsonfileW.writePromise(`${destDir}/${fileName}`, data));
  },

};