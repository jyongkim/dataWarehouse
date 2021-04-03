const User = require('../models/user')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : User.create(req.body, (err, user) => {
            err ? res.send(err) : res.json({
                message: '¡El usuario se registró con éxito!',
                data: user
})})}

exports.read = (req, res) => {
    User.read((err, user) => {
        err ? res.send(err) : res.send(user)
})}

exports.find = (req, res) => {
    User.find(req.params.id, (err, user) => {
        err ? res.send(err) : res.send(user)
})}

exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : User.update(req.params.id, req.body, (err, user) => {
            err ? res.send(err) : res.json({
                message: '¡El usuario se actualizó con éxito!',
                data: user
})})}

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, user) => {
        err ? res.send(err) : res.send({
            message: 'El usuario se eliminó con éxito.',
            data: user
})})}