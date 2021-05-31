const Company = require('../models/company')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Company.create(req.params.id, req.body, (err, company) => {
            err ? res.send(err) : res.json({
                message: '¡La empresa se registró con éxito!',
                data: company
})})}

exports.read = (req, res) => {
    Company.read(req.params.id, (err, company) => {
        err ? res.send(err) : res.send(company)
})}

exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Company.update(req.params.id, req.body, (err, company) => {
            err ? res.send(err) : res.json({
                message: 'La empresa se actualizó con éxito.',
                data: company
})})}

exports.delete = (req, res) => {
    Company.delete(req.params.id, (err, company) => {
        err ? res.send(err) : res.send({
            message: 'La empresa se eliminó con éxito.',
            data: company
        })
})}