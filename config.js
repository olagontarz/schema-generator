
const config = {
  common: './events/common.json',
  eventTypes: {

    'domestic-transfer': './events/domestic-transfer.json',
    'domestic-transfer-add-template': './events/domestic-transfer-add-template.json',
    'domestic-transfer-edit-template': './events/domestic-transfer-edit-template.json',

    'international-transfer': './events/international-transfer.json',

    'tax-transfer': './events/tax-transfer.json',
    'tax-transfer-add-template': './events/tax-transfer-add-template.json',
    'tax-transfer-edit-template': './events/tax-transfer-edit-template.json',

    'own-transfer': './events/own-transfer.json',
    'own-transfer-add-template': './events/own-transfer-add-template.json',
    'own-transfer-edit-template': './events/own-transfer-edit-template.json',

    'mobile-top-up': './events/mobile-top-up.json',

    'pre-login': './events/pre-login',
    'login': './events/login.json',
    'logout': './events/logout.json',

    'authorization': './events/authorization.json',
    'sms-otp': './events/sms-otp.json',

    'internet-activation': './events/internet-activation.json',
    'internet-blocking': './events/internet-blocking.json',

    'card-activation': './events/card-activation.json',
    'card-blocking': './events/card-blocking.json',
    'card-unblocking': './events/card-unblocking.json',
    'card-temporary-blocking': './events/card-temporary-blocking.json',
    'card-PIN-change': './events/card-pin-change.json',
    'card-limits-change': './events/card-limits-change.json',

    'card-auto-repay-activation': './events/card-auto-repay-activation.json',
    'card-auto-repay-deactivation': './events/card-auto-repay-deactivation.json',
    'card-auto-repay-change': './events/card-auto-repay-change.json',

    'contactless-payments-activation': './events/contactless-payments-activation.json',
    'contactless-payments-deactivation': './events/contactless-payments-deactivation.json',

    'edit-billing-cycle': './events/edit-billing-cycle.json',

    'limits-change': './events/limits-change.json',
    'alias-change': './events/alias-change.json',
    'password-change': './events/password-change.json',
    'password-reset': './events/password-reset.json',
    '2FA-status-change': './events/2FA-status-change.json',
    'antiphishing-image-change': './events/antiphishing-image-change.json',

    'td-break': './events/td-break.json',
    'td-renewal-change': './events/td-renewal-change.json',
    'td-linked-account-change': './events/td-linked-account-change.json',
    'td-interest-account-change': './events/td-interest-account-change.json',
    'td-capitalization-change': './events/td-capitalization-change.json',

    'ivr-login': './events/ivr-login.json',
    'ivr-pin-reset': './events/ivr-pin-reset.json',

    'idm-account-creation': './events/idm-account-creation.json',
    'idm-channel-activation': './events/idm-channel-activation.json',
    'idm-channel-blocking': './events/idm-channel-blocking.json',
    'idm-channel-unblocking': './events/idm-channel-unblocking.json',

    'login-sidoma': './events/login-sidoma.json',

  },
};

module.exports = config;
