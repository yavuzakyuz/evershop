module.exports = {
  Setting: {
    codPaymentStatus: (setting) => {
      const codPaymentStatus = setting.find(
        (s) => s.name === 'codPaymentStatus',
      );
      if (codPaymentStatus) {
        return parseInt(codPaymentStatus.value, 10);
      }
      return 0;
    },
    codDislayName: (setting) => {
      const codDislayName = setting.find((s) => s.name === 'codDislayName');
      if (codDislayName) {
        return codDislayName.value;
      }
      return 'Cash On Delivery';
    },
  },
};
