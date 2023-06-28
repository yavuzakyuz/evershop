const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');

module.exports = {
  Setting: {
    stripePaymentStatus: (setting) => {
      const stripeConfig = getConfig('system.stripe', {});
      if (stripeConfig.status) {
        return stripeConfig.status;
      }
      const stripePaymentStatus = setting.find(
        (s) => s.name === 'stripePaymentStatus',
      );
      if (stripePaymentStatus) {
        return parseInt(stripePaymentStatus.value, 10);
      }
      return 0;
    },
    stripeDislayName: (setting) => {
      const stripeDislayName = setting.find(
        (s) => s.name === 'stripeDislayName',
      );
      if (stripeDislayName) {
        return stripeDislayName.value;
      }
      return 'Credit Card';
    },
    stripePublishableKey: (setting) => {
      const stripeConfig = getConfig('system.stripe', {});
      if (stripeConfig.publishableKey) {
        return stripeConfig.publishableKey;
      }
      const stripePublishableKey = setting.find(
        (s) => s.name === 'stripePublishableKey',
      );
      if (stripePublishableKey) {
        return stripePublishableKey.value;
      }
      return null;
    },
    stripeSecretKey: (setting, _, { userTokenPayload }) => {
      const stripeConfig = getConfig('system.stripe', {});
      if (stripeConfig.secretKey) {
        return '*******************************';
      }
      if (userTokenPayload && userTokenPayload?.user?.uuid) {
        const stripeSecretKey = setting.find(
          (s) => s.name === 'stripeSecretKey',
        );
        if (stripeSecretKey) {
          return stripeSecretKey.value;
        }
        return null;
      }
      return null;
    },
    stripeEndpointSecret: (setting, _, { userTokenPayload }) => {
      const stripeConfig = getConfig('system.stripe', {});
      if (stripeConfig.endpointSecret) {
        return '*******************************';
      }
      if (userTokenPayload && userTokenPayload?.user?.uuid) {
        const stripeEndpointSecret = setting.find(
          (s) => s.name === 'stripeEndpointSecret',
        );
        if (stripeEndpointSecret) {
          return stripeEndpointSecret.value;
        }
        return null;
      }
      return null;
    },
  },
};
