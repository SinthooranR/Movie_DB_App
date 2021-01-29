class HttpError extends Error {
    constructor(msg, errCode) {
      super(msg); //adds message property in the error handle
      this.code = errCode; //adds an error code property
    }
  }
  
  module.exports = HttpError;
  