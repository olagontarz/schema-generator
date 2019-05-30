
const config = {
  common: './events/common.json',
  eventTypes: {

    'domestic-transfer': './events/domestic-transfer.json',
    'add-template-domestic-transfer': './events/add-template-domestic-transfer.json',
    'edit-template-domestic-transfer': './events/edit-template-domestic-transfer.json',

    'mobile-top-up': './events/mobile-top-up.json',

    'international-transfer': './events/international-transfer.json',

    'tax-transfer': './events/tax-transfer.json',
    'add-template-tax-transfer': './events/add-template-tax-transfer.json',
    'edit-template-tax-transfer': './events/edit-template-tax-transfer.json',

    'own-transfer': './events/own-transfer.json',
    'add-template-own-transfer': './events/add-template-own-transfer.json',
    'edit-template-own-transfer': './events/edit-template-own-transfer.json',

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
    'card-temporary-blocking': './events/card-temporary-blocking.json',
    'card-pin-change': './events/card-pin-change.json',

    'card-auto-repay-activation': './events/card-auto-repay-activation.json',
    'card-auto-repay-deactivation': './events/card-auto-repay-deactivation.json',
    'card-auto-repay-change': './events/card-auto-repay-change.json',

    'contactless-payments-activation': './events/contactless-payments-activation.json',
    'contactless-payments-deactivation': './events/contactless-payments-deactivation.json',

    'edit-billing-cycle': './events/edit-billing-cycle.json',

    'card-limits-change': './events/card-limits-change.json',

    'alias-change': './events/alias-change.json',
    'password-change': './events/password-change.json',
    '2FA-status-change': './events/2FA-status-change.json',
    'antiphishing-image-change': './events/antiphishing-image-change.json',
    'limits-change': './events/limits-change.json',

    'td-break': './events/td-break.json',
    'td-renewal-change': './events/td-renewal-change.json',
    'td-linked-account-change': './events/td-linked-account-change.json',
    'td-interest-account-change': './events/td-interest-account-change.json',
    'td-capitalization-change': './events/td-capitalization-change.json',

    'login-ivr': './events/login-ivr.json',
    'create-idm-account': './events/create-idm-account.json',
    'activation-channel': './events/activation-channel.json',
    'channel-blockade': './events/channel-blockade.json',
    'ivr-pin-reset': './events/ivr-pin-reset.json',

    'login-sidoma': './events/login-sidoma.json',

  },
};

module.exports = config;
