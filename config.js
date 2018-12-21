
const config = {
  common: './events/common.json',
  eventTypes: {
    'domestic-transfer': './events/domestic-transfer.json',
    'international-transfer': './events/international-transfer.json',
    'tax-transfer': './events/tax-transfer.json',
    'own-transfer': './events/own-transfer.json',
    'pre-login': './events/pre-login',
    'login': './events/login.json',
    'logout': './events/logout.json',
    'authorization': './events/authorization.json',
    'send-sms-otp': './events/send-sms-otp.json',
    'activation-internet': './events/activation-internet.json',
    'card-activation': './events/card-activation.json',
    'card-blocking': './events/card-blocking.json',
    'card-unblocking': './events/card-unblocking.json',
    'internet-blockade': './events/internet-blockade.json',
  },
};

module.exports = config;
