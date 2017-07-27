const exec = require('child_process').exec;
const logger = require('./log4jsUtils')('commandUtils');
const FunctionUtils = require('./functionUtils');
const ObjectUtils = require('./objectUtils');

const sshResult = (remoteIP, isSuccessful, err) => {
  return {
    remoteIP,
    isSuccessful,
    err
  };
};

const ssh2WriteFilePromiseWithoutReject = (user, IP, destDir, filename, contentStr, timeout) => {
  return new Promise((reso, reje) => {
    let errObj = FunctionUtils.checkArguments(IP, destDir, filename, contentStr);
    if(!ObjectUtils.isEmptyObj(errObj)){
      logger.error(JSON.stringify(errObj, undefined, 2));
      return reso(sshResult(IP, false, errObj));
    }

    const command = `ssh -o ConnectTimeout=${timeout || 10} ${user}@${IP} 'test -d ${destDir} || mkdir -p ${destDir}; echo "${contentStr}" > ${destDir}/${filename}'`;
    exec(command, (err, stdout, stderr) => {
      if(err || stderr) {
        errObj.message = stderr;
        errObj = Object.assign(errObj, err);
        logger.error(`Command ssh2WriteFile has an error. ${JSON.stringify(errObj, undefined, 2)}`);
        return reso(sshResult(IP, false, errObj));
      }
      reso(sshResult(IP, true, undefined));
    });
  });
};

const sshCatFilePromise = (user, ip, filePath) => {
  return new Promise((reso, reje) => {
    let errObj = FunctionUtils.checkArguments(user, ip, filePath);
    if(!ObjectUtils.isEmptyObj(errObj))
      return reje(errObj);
    const command = `ssh ${user}@${ip} 'cat ${filePath}'`;
    exec(command, (err, stdout, stderr) => {
      if(err || stderr){
        errObj.message = stderr;
        errObj = Object.assign(errObj, err);
        logger.error(`Command sshCat has an error. ${JSON.stringify(errObj, undefined, 2)}`);
        return reje(errObj);
      }
      reso(stdout);
    });
  });
};

module.exports = {
  ssh2WriteFilePromiseWithoutReject,
  sshCatFilePromise
};
