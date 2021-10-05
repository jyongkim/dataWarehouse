const Country = require('../models/country')

exports.read = (req, res) => {
    Country.read(req.params.id, (err, country) => {
        err ? res.send(err) : res.send(country)
    })
}
