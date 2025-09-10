const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',  // Point to local backend server
      changeOrigin: true,
      pathRewrite: {'^/api': '/api'},  // Preserve /api prefix
      secure: false
    })
  );
};
