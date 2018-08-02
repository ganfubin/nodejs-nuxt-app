const { Nuxt, Builder } = require('nuxt');

const app = require('express')();
const isProd = (process.env.NODE_ENV === 'production');
const port = process.env.PORT || 3000;

// We instantiate nuxt.js with the options
const config = require('../nuxt.config.js');
config.dev = !isProd;
const nuxt = new Nuxt(config);

const router = require('./routers/router.js') ;
const api = require('./routers/apiRouter.js') ;

app.use('/api', api);
app.use(router);

// Render every route with Nuxt.js
app.use(nuxt.render);

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error);
      process.exit(1)
    })
}
else {
  listen()
}

function listen() {
  // Listen the server
  app.listen(port, '0.0.0.0');
  console.log('Server listening on `localhost:' + port + '`.')
}
