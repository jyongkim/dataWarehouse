const db = require('../data/models')
const City = require('../models/city')

exports.read = (req, res) => {
    City.read(req.params.id, (err, city) => {
        err ? res.send(err) : res.send(city)
    })
}

exports.create = (req, res) => {
    console.log(req.body)
    db.City.create(req.body).then((result) => console.log(result))
}

exports.edit = (req, res) => {
    console.log(req.body)
    db.City.update(
        { city: req.body.city },
        { where: { id_city: req.body.id_city } }
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
            id_city: req.params.id
        }
    })
}
