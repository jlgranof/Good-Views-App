const router = require('express').Router();

const routes = ['users', 'movies', 'session', 'dvdShelves', 'reviews'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
