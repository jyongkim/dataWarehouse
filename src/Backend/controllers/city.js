const City = require('../models/city')

exports.read = (req, res) => {
    City.read(req.params.id, (err, city) => {
        err ? res.send(err) : res.send(city)
    })
}
