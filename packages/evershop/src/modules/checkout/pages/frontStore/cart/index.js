const {
  setContextValue,
} = require('../../../../graphql/services/contextHelper');

// eslint-disable-next-line no-unused-vars
module.exports = (request, response) => {
  setContextValue(request, 'pageInfo', {
    title: 'Shopping cart',
    description: 'Shopping cart',
  });
};
