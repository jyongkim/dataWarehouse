let dbConn = require('../dataBase/dbConn')

let Region = function (region) {
    this.ID = region.ID
    this.Region = region.Region
}

Region.read = (result) => {
    dbConn.query(`SELECT
        c.id_region as ID,
        c.Region as Region
        FROM Regions AS c
       `, null, (err, res) => {
        err ? result(err, null) : result(null, res)
    })
}

module.exports = Region;