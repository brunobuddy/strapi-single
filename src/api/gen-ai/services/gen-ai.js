'use strict';

/**
 * gen-ai service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gen-ai.gen-ai');
