var jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");
var bcrypt = require("bcryptjs");
const User = require('../../models/user')
const USER_ROLE = 3;
exports.signup = (req, res) => {

  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const user = {
    id_role: USER_ROLE,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    user_name: req.body.username,
    password: passwordHash,
    email: req.body.email
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

    if (err) {
      res.status(404).send({ message: "User Not found." });
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user[0].password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

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
      username: user.username,
      email: user.email,
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