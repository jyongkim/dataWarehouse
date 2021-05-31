var authController = require('../api/controllers/auth.controller');
exports.signin = function(req,res){
      //const {username, password} = req.body;
      authController.signin(req,res);
   };
exports.signup = function(req,res){
      authController.signup(req,res);
   };