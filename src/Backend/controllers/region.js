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
        const tree = results.map(r => (
            {
                id_region: r.id_region, name: r.region,
                children: r.countries.map(c => ({ name: c.country, id_parent: r.id_region, id_country: c.id_country, children: c.cities.map(ct => ({ id_grandparent: r.id_region, id_parent: c.id_country, name: ct.city, id_city: ct.id_city })) }))
            }))
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
    console.log(req.params.id)
    db.Region.findAll(({
        include: [{ association: 'countries', include: [{ association: 'cities' }] }],
        where: {
            id_region: req.params.id
        }
    })).then(results => {
        // results.countries.forEach(country => {
        //     db.City.destroy({
        //         where: {
        //             id_country: country.id_country
        //         }
        //     })
        //     db.Country.destroy({
        //         where: {
        //             id_region: req.params.id
        //         }
        //     })
        // }
        // )
        db.Region.destroy({
            where: {
                id_region: req.params.id
            }
        })
    });

}
