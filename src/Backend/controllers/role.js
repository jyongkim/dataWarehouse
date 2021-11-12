const Role = require('../models/role')
const db = require('../data/models')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Role.create(req.body, (err, role) => {
            err ? res.send(err) : res.json({
                message: 'El rol se registró con éxito.',
                data: role
            })
        })
}

exports.read = (req, res) => {
    db.Role.findAll(({
    })).then(results => {
        res.send(results)
    });
}

exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Role.update(req.params.id, req.body, (err, role) => {
            err ? res.send(err) : res.json({
                message: 'El rol se actualizó con éxito.',
                data: role
            })
        })
}

exports.delete = (req, res) => {
    Role.delete(req.params.id, (err, role) => {
        err ? res.send(err) : res.send({
            message: 'El rol se eliminó con éxito.',
            data: role
        })
    })
}