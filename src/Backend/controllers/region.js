const db = require('../data/models')
const Region = require('../models/region')

exports.read = (req, res) => {
    Region.read((err, region) => {
        err ? res.send(err) : res.send(region)
    })
}

exports.getTree = (req, res) => {
    //res.send('hello');
    db.Region.findAll(({
        include: [{ association: 'countries', include: [{ association: 'cities' }] }]
    })).then(results => {
        const tree = results.map(r => ({ name: r.region, children: r.countries.map(c => ({ name: c.country, children: c.cities.map(ct => ({ name: ct.city })) })) }))
        res.send(tree)
    });
}
