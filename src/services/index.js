const users = require('./users/users.service.js');
const chatting = require('./chatting/chatting.service.js');
const berita = require('./berita/berita.service.js');
const product = require('./product/product.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(chatting);
  app.configure(berita);
  app.configure(product);
};
