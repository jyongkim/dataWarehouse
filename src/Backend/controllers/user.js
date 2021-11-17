const User = require('../models/user')
const db = require('../data/models')
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : User.create(req.body, (err, user) => {
            err ? res.send(err) : res.json({
                message: 'El usuario se registró con éxito.',
                data: user
            })
        })
}

exports.read = (req, res) => {
    db.User.findAll(({
        include: [{ association: 'role' }]
    })).then(results => {
        res.send(results)
    })
}

exports.find = (req, res) => {
    db.User.findById(req.params.id, ({
        include: [{ association: 'role' }]
    })).then(results => {
        res.send(results)
    })
}

exports.update = (req, res) => {
    console.log(req.body.id_role)
    const passwordHash = bcrypt.hashSync(req.body.password, 10)
    db.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        password: passwordHash,
        email: req.body.email,
        id_role: req.body.id_role
    }, { where: { id_user: req.params.id } }).then(u => res.send(u))
}

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, user) => {
        err ? res.send(err) : res.send({
            message: 'El usuario se eliminó con éxito.',
            data: user
        })
    })
}