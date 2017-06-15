'use strict';

var path = require('path');
var _ = require('lodash');

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

    // Mail Sender config
  mailSender: {
    smtpUser: process.env.SMTP_USER || 'mailjet_api_key',
    smtpPass: process.env.SMTP_PASS || 'mailjet_secret_key',
    smtpHost: process.env.SMTP_HOST || 'in.mailjet.com',
    smtpPort: process.env.SMTP_PORT || '465',
    mailFrom: process.env.MAIL_FROM || 'contact@mdph.beta.gouv.fr',
  },

  // Server port
  port: process.env.PORT || 9007,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: process.env.SESSION_SECRET || 'mdph-secret'
  },

  // List of user roles
  userRoles: ['user', 'adminMdph', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});