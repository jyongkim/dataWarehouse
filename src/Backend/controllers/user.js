const User = require('../models/user')
const db = require('../data/models')

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
    // (req.body.constructor == Object && Object.keys(req.body) == 0) ?
    //     res.status(400).send({
    //         message: 'Todos los campos deben ser completados.',
    //         code: 'Error: 400.'
    //     }) : User.update(req.params.id, req.body, (err, user) => {
    //         err ? res.send(err) : res.json({
    //             message: 'El usuario se actualizó con éxito.',
    //             data: user
    //         })
    //     })
    db.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,


    }, { where: req.params.id }).then(u => res.send(u))
}

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, user) => {
        err ? res.send(err) : res.send({
            message: 'El usuario se eliminó con éxito.',
            data: user
        })
    })
}