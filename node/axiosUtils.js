function errorHandler(error, data){
  if (error.response) {
    data.status = error.response.status;
    data.message = error.response.data;
  } else if (error.request) {
    data.message =  error.message;
  } else {
    data.message =  error.message;
  }
  return data;
}

module.exports = {
  errorHandler
};