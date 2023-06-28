module.exports = {
  Setting: {
    defaultProductTaxClassId: (setting) => {
      const defaultProductTaxClassId = setting.find(
        (s) => s.name === 'defaultProductTaxClassId',
      );
      if (defaultProductTaxClassId && defaultProductTaxClassId.value) {
        return defaultProductTaxClassId.value;
      }
      return null;
    },
    defaultShippingTaxClassId: (setting) => {
      const defaultShippingTaxClassId = setting.find(
        (s) => s.name === 'defaultShippingTaxClassId',
      );
      if (defaultShippingTaxClassId && defaultShippingTaxClassId.value) {
        return defaultShippingTaxClassId.value;
      }
      return null;
    },
    baseCalculationAddress: (setting) => {
      const baseCalculationAddress = setting.find(
        (s) => s.name === 'baseCalculationAddress',
      );
      if (baseCalculationAddress && baseCalculationAddress.value) {
        return baseCalculationAddress.value;
      }
      return null;
    },
  },
};
