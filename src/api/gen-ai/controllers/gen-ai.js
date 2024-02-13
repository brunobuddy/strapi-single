'use strict';

/**
 * gen-ai controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::gen-ai.gen-ai');
