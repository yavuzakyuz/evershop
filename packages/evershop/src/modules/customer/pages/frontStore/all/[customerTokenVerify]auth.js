const { get } = require('@evershop/evershop/src/lib/util/get');
const {
  getContextValue,
  setContextValue,
} = require('../../../../graphql/services/contextHelper');

module.exports = (request, response, delegate, next) => {
  // Get the token Payload
  const tokenPayLoad = getContextValue(request, 'customerTokenPayload');
  if (get(tokenPayLoad, 'customer.uuid')) {
    setContextValue(request, 'customerId', tokenPayLoad.customer?.uuid || null);
  }
  next();
};
