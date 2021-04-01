const Contact = require('../models/contact')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Contact.create(req.params.id, req.body, (err, contact) => {
            err ? res.send(err) : res.json({
                message: '¡El contacto se registró con éxito!',
                data: contact
})})}

exports.read = (req, res) => {
    Contact.read(req.params.id, (err, contact) => {
        err ? res.send(err) : res.send(contact)
})}

exports.find = (req, res) => {
    Contact.find(req.params.id, req.body, (err, contact) => {
        err ? res.send(err) : res.send(contact)
})}

exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Contact.update(req.params.id, req.body, (err, contact) => {
            err ? res.send(err) : res.json({
                message: '¡El contacto se actualizó con éxito!',
                data: contact
})})}

exports.delete = (req, res) => {
    Contact.delete(req.params.id, (err, contact) => {
        err ? res.send(err) : res.send({
            message: 'El contacto se eliminó con éxito.',
            data: contact
        })
})}