// Initializes the `chatting` service on path `/chatting`
const createService = require('feathers-mongoose');
const createModel = require('../../models/chatting.model');
const hooks = require('./chatting.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'chatting',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chatting', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chatting');

  service.hooks(hooks);
};
