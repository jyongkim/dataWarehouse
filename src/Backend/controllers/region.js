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
        const tree = results.map(r => ({ id_region: r.id_region, name: r.region, children: r.countries.map(c => ({ name: c.country, children: c.cities.map(ct => ({ name: ct.city })) })) }))
        res.send(tree)
    });
}

exports.create = (req, res) => {
    console.log(req.body)
    db.Region.create(req.body).then((result) => console.log(result))
}

exports.edit = (req, res) => {
    console.log(req.body)
    db.Region.update(
        { region: req.body.region },
        { where: { id_region: req.body.id_region } }
    )
        .success(result =>
            res.send(result)
        )
        .error(err =>
            res.send(err)
        )
}
exports.delete = (req, res) => {
    console.log(req.body)
    //  db.Region
}
