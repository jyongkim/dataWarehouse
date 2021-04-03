const Preference = require('../models/contact_pref')

exports.create = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Preference.create(req.params.id, req.body, (err, pref) => {
            err ? res.send(err) : res.json({
                message: '¡La preferencia se agregó con éxito!',
                data: pref
})})}

exports.read = (req, res) => {
    Preference.read(req.params.id, (err, pref => {
        err ? res.send(err) : res.send(pref
})}

exports.find = (req, res) => {
    Preference.find(req.params.id, req.body, (err, pref => {
        err ? res.send(err) : res.send(pref
})}

exports.update = (req, res) => {
    (req.body.constructor == Object && Object.keys(req.body) == 0) ?
        res.status(400).send({
            message: 'Todos los campos deben ser completados.',
            code: 'Error: 400.'
        }) : Preference.update(req.params.id, req.body, (err, pref => {
            err ? res.send(err) : res.json({
                message: '¡La preferencia se actualizó con éxito!',
                data: contact
})})}

exports.delete = (req, res) => {
    Preference.delete(req.params.id, (err, pref => {
        err ? res.send(err) : res.send({
            message: 'La preferencia se eliminó con éxito.',
            data: contact
        })
})}