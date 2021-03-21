const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/colleges',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/college',
    createProxyMiddleware({
      target: 'http://localhost:7000',
      changeOrigin: true,
    })
  );
};
