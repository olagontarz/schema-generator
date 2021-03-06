
const config = {
  common: './events/common.json',
  eventTypes: {

    // logs.xlsx

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
    'opt-out-change': './events/opt-out-change.json',
    'alias-change': './events/alias-change.json',
    'password-change': './events/password-change.json',
    'password-reset': './events/password-reset.json',
    '2FA-status-change': './events/2FA-status-change.json',

    'antiphishing-image-change': './events/antiphishing-image-change.json',
    'login-image-change': './events/login-image-change.json',

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

    'idm-channel-reset': './events/idm-channel-reset.json',
    'idm-channel-close': './events/idm-channel-close.json',

    'login-sidoma': './events/login-sidoma.json',

    // logs2.xlsx

    'epayments-transfer': './events/epayments-transfer.json',

    'add-standing-order-domestic': './events/add-standing-order-domestic.json',
    'edit-standing-order-domestic': './events/edit-standing-order-domestic.json',
    'cancel-standing-order-domestic': './events/cancel-standing-order-domestic.json',

    'add-standing-order-own': './events/add-standing-order-own.json',
    'edit-standing-order-own': './events/edit-standing-order-own.json',
    'cancel-standing-order-own': './events/cancel-standing-order-own.json',

    'funds-acquisition': './events/funds-acquisition.json',
    'funds-redemption': './events/funds-redemption.json',
    'funds-conversion': './events/funds-conversion.json',

    'login-method-change': './events/login-method-change.json',
    'authorization-method-change': './events/authorization-method-change.json',


    'mifid-questionnarie-approval': './events/mifid-questionnaire-approval.json',
    'mifid-questionnarie-denial': './events/mifid-questionnaire-denial.json',
    'mifid-result-approval': './events/mifid-result-approval.json',
    'mifid-result-reject': './events/mifid-result-reject.json',

    'contact-token-generate-chat': './events/contact-token-generate-chat.json',
    'contact-token-generate-video': './events/contact-token-generate-video.json',

    'contact-get-conversations': './events/contact-get-conversations.json',
    'contact-get-blog-posts': './events/contact-get-blog-posts.json',
    'contact-get-legal-documents-attachment': './events/contact-get-legal-documents-attachment.json',
    'contact-get-legal-documents': './events/contact-get-legal-documents.json',

  },
};

module.exports = config;
