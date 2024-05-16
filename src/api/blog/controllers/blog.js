'use strict';

/**
 * blog controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog'), ({ strapi }) => ({
    // wrap a core action, leaving core logic in place
    async find(ctx) {
        // some custom logic here
        ctx.query = { ...ctx.query, local: 'en' }

        // calling the default core action with super
        const { data, meta } = await super.find(ctx);

        // some more custom logic
        meta.date = Date.now()

        return { data, meta };
    },
});



