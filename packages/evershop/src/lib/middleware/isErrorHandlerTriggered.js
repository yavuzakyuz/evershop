module.exports = (response) => {
  if (!response.locals) {
    return false;
  }
  return response.locals.errorHandlerTriggered === true;
};
