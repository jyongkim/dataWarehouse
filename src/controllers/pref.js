const Pref = require('../models/pref')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Pref.create(req.params.id, req.body, (err, pref) => {
            err ? res.send(err) : res.json({
                message: '¡La preferencia se agregó con éxito!',
                data: pref
})})}

exports.read = (req, res) => {
    Pref.read(req.params.id, (err, pref) => {
        err ? res.send(err) : res.send(pref)
})}

exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Pref.update(req.params.id, req.body, (err, pref) => {
            err ? res.send(err) : res.json({
                message: '¡La preferencia se actualizó con éxito!',
                data: pref
})})}

exports.delete = (req, res) => {
    Pref.delete(req.params.id, (err, pref) => {
        err ? res.send(err) : res.send({
            message: 'La preferencia se eliminó con éxito.',
            data: pref
        })
})}