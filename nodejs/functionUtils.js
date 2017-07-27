/**
 * usage: 
 *  put the arguments which you want to check in the paramters
 *  ex: 
 *    function myFunc(name, age, nocheck){
 *      let errObj = checkArguments(name, age);
 *    }
 *    errObj will return the error message or empty object
 */
function checkArguments(){
  for(var k in arguments){
    if(!arguments[k]){
      const errObj = {message: 'Illegal arguments. '};
      return Object.assign(errObj, arguments);
    }
  }
  return {};
}

module.exports = {
  checkArguments
};