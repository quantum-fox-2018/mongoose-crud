const routes = require('express').Router();

routes.get('/', function(req, res){
  res.status(200).send({
    message: "halaman Index"
  })
})

module.exports = routes;
