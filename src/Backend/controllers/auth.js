var jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
var bcrypt = require("bcryptjs");
const User = require('../models/user')
const USER_ROLE = 3;
exports.signin = (req, res) => {

       User.findByUserName(req.body.username, (err, user) => {
       console.log(user)
       if(err || user.length == 0) {
         console.log("error:",err);
         return res.status(404).send({ message: "Usuario no encontrado." })
       }

       var passwordIsValid = bcrypt.compareSync(
         req.body.password,
         user[0].Password
       )

       if (!passwordIsValid) {
         return res.status(401).send({
           accessToken: null,
           message: "Contraseña inválida."
         })
       }
 
       var token = jwt.sign({ id: user.id }, config.secret, {
         expiresIn: 86400 // 24 hours
       })
       var authorities = [];
         return res.status(200).send({
           id: user[0].Id,
           username: user[0].Username,
           email: user[0].Email,
           roles: [],
           accessToken: token
         })
       })
 }
exports.signup = (req, res) => {
  
   const passwordHash = bcrypt.hashSync(req.body.password, 10)
   const user =  {
     id_role : USER_ROLE,
     last_name : req.body.last_name,
     first_name : req.body.first_name,
     user_name : req.body.user_name,
     password : passwordHash,
     email : req.body.email
   };
   User.create(user);
   res.send({ message: "El usuario ser registró correctamente!" })
 
 }