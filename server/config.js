module.exports = {
  AUTH0_DOMAIN: 'deals.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || `mongodb://${encodeURIComponent('tylerlmaier@gmail.com')}:${encodeURIComponent('TYguy^@437')}@ds251598.mlab.com:51598/deals`
};
