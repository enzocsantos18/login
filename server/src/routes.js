const {Router} = require('express');
const UserController = require("./app/controllers/UserController")
const SessionController = require("./app/controllers/SessionController")

const routes = new Router();

routes.get('/users', (req, res) => {
  return res.json({ok: true});
});
routes.post('/sessions',  SessionController.store);
routes.post('/users',  UserController.store);



module.exports =  routes;
