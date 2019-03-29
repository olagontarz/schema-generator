
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
    'internet-blockade': './events/internet-blockade.json',
    'card-activation': './events/card-activation.json',
    'card-blocking': './events/card-blocking.json',
    'card-unblocking': './events/card-unblocking.json',
    'card-auto-repay-activation': './events/card-auto-repay-activation.json',
    'card-auto-repay-deactivation': './events/card-auto-repay-deactivation.json',
    'card-auto-repay-change': './events/card-auto-repay-change.json',
    'contactless-payments-activation': './events/contactless-payments-activation.json',
    'contactless-payments-deactivation': './events/contactless-payments-deactivation.json',
    'card-limits-change': './events/card-limits-change.json',
    'alias-change': './events/alias-change.json',
    'password-change': './events/password-change.json',
    'login-method-change': './events/login-method-change.json',
    'antyphishing-image-change': './events/antyphishing-image-change.json',
    'limits-change': './events/limits-change.json',
  }
};

module.exports = config;
