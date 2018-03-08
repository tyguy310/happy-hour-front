module.exports = {
  AUTH0_DOMAIN: 'gethappy.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://tyler:tyguy@ds251598.mlab.com:51598/deals',
  NAMESPACE: 'http://myapp.com/roles'
};
