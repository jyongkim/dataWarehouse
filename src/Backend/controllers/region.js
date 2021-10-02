const Region = require('../models/region')

exports.read = (req, res) => {
    Region.read((err, region) => {
        err ? res.send(err) : res.send(region)
    })
}
