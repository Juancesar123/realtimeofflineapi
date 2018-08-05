// Initializes the `berita` service on path `/berita`
const createService = require('feathers-mongoose');
const createModel = require('../../models/berita.model');
const hooks = require('./berita.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'berita',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/berita', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('berita');

  service.hooks(hooks);
};
