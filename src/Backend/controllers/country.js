const db = require('../data/models')
const Country = require('../models/country')

exports.read = (req, res) => {
    Country.read(req.params.id, (err, country) => {
        err ? res.send(err) : res.send(country)
    })
}

exports.create = (req, res) => {
    console.log(req.body)
    db.Country.create(req.body).then((result) => console.log(result))
}

exports.edit = (req, res) => {
    console.log(req.body)
    db.Country.update(
        { country: req.body.country },
        { where: { id_country: req.body.id_country } }
    )
        .success(result =>
            res.send(result)
        )
        .error(err =>
            res.send(err)
        )
}

exports.delete = (req, res) => {
    console.log(req.params.id)
    db.City.destroy({
        where: {
            id_country: req.params.id
        }
    })
    db.Country.destroy({
        where: {
            id_country: req.params.id
        }
    })
}

