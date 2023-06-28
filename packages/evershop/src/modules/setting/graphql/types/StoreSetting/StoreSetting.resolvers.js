const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');

module.exports = {
  Setting: {
    storeName: (setting) => {
      const storeName = setting.find((s) => s.name === 'storeName');
      if (storeName) {
        return storeName.value;
      }
      return 'An Amazing EverShop Store';
    },
    storeDescription: (setting) => {
      const storeDescription = setting.find(
        (s) => s.name === 'storeDescription',
      );
      if (storeDescription) {
        return storeDescription.value;
      }
      return 'An Amazing EverShop Store';
    },
    storeLanguage: () => getConfig('shop.language', 'en'),
    storeCurrency: () => getConfig('shop.currency', 'USD'),
    storeTimeZone: (setting) => {
      const storeTimeZone = setting.find((s) => s.name === 'storeTimeZone');
      if (storeTimeZone) {
        return storeTimeZone.value;
      }
      return 'America/New_York';
    },
    storePhoneNumber: (setting) => {
      const storePhoneNumber = setting.find(
        (s) => s.name === 'storePhoneNumber',
      );
      if (storePhoneNumber) {
        return storePhoneNumber.value;
      }
      return null;
    },
    storeEmail: (setting) => {
      const storeEmail = setting.find((s) => s.name === 'storeEmail');
      if (storeEmail) {
        return storeEmail.value;
      }
      return null;
    },
    storeCountry: (setting) => {
      const storeCountry = setting.find((s) => s.name === 'storeCountry');
      if (storeCountry) {
        return storeCountry.value;
      }
      return 'US';
    },
    storeAddress: (setting) => {
      const storeAddress = setting.find((s) => s.name === 'storeAddress');
      if (storeAddress) {
        return storeAddress.value;
      }
      return null;
    },
    storeCity: (setting) => {
      const storeCity = setting.find((s) => s.name === 'storeCity');
      if (storeCity) {
        return storeCity.value;
      }
      return null;
    },
    storeProvince: (setting) => {
      const storeProvince = setting.find((s) => s.name === 'storeProvince');
      if (storeProvince) {
        return storeProvince.value;
      }
      return null;
    },
    storePostalCode: (setting) => {
      const storePostalCode = setting.find((s) => s.name === 'storePostalCode');
      if (storePostalCode) {
        return storePostalCode.value;
      }
      return null;
    },
  },
};
