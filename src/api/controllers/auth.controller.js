var jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");
var bcrypt = require("bcryptjs");
const User = require('../../models/user')
const USER_ROLE = 3;
exports.signup = (req, res) => {
  const user =  {
    id_role : USER_ROLE,
    user_name : req.body.username,
    name : req.body.name,
    password : bcrypt.hashSync(req.body.password, 10),
    email : req.body.email
  };
  User.create(user);
  res.send({ message: "User was registered successfully!" });
//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 8)
//   })
//     .then(user => {
//       if (req.body.roles) {
//         Role.findAll({
//           where: {
//             name: {
//               [Op.or]: req.body.roles
//             }
//           }
//         }).then(roles => {
//           user.setRoles(roles).then(() => {
//             res.send({ message: "User was registered successfully!" });
//           });
//         });
//       } else {
//         // user role = 1
//         user.setRoles([1]).then(() => {
//           res.send({ message: "User was registered successfully!" });
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
};

exports.signin = (req, res) => {
  // User.findOne({
  //   where: {
  //     username: req.body.username
  //   }
  // })
  //   .then(user => {
  //     if (!user) {
  //       return res.status(404).send({ message: "User Not found." });
  //     }
      console.log('username', req.body.username);
      User.findByUserName(req.body.username, (err, user) => {
        

        if(err) {
          console.log("error:",err);
          res.status(404).send({ message: "User Not found." });
        }
<<<<<<< HEAD
      console.log('password',req.body.password);
      console.log('hash',user[0].password);
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user[0].password
      );
      console.log('passwordvalid',passwordIsValid);
=======

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

>>>>>>> 9ccb602de8751f403ade3c79bd7e415406d6d35a
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

    //   var token = jwt.sign({ id: user.id }, config.secret, {
    //     expiresIn: 86400 // 24 hours
    //   });
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
    //   user.getRoles().then(roles => {
    //     for (let i = 0; i < roles.length; i++) {
    //       authorities.push("ROLE_" + roles[i].name.toUpperCase());
    //     }
        // res.status(200).send({
        //   id: user.id,
        //   username: user.username,
        //   email: user.email,
        //   roles: authorities,
        //   accessToken: token
        // });
        res.status(200).send({
          id: user.id,
          username:user.username,
          email:user.email,
          roles: [],
          accessToken: token
        });
      });
    //   });
    // })
    // .catch(err => {
    //   res.status(500).send({ message: err.message });
    // });
};