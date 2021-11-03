const db = require('../data/models')

exports.read = (req, res) => {
    Region.read((err, region) => {
        err ? res.send(err) : res.send(region)
    })
}

exports.getTree = (req, res) => {
    //res.send('hello');
    db.Region.findAll(({
        include: [{association: 'countries', include : [{association: 'cities'}]}]
        })).then(results=> res.send(results));
}
