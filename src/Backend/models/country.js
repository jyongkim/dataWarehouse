let dbConn = require('../dataBase/dbConn')

let Country = function(country) {
    this.ID = country.ID
    this.Country = country.Country
}

Country.read = ( result) => {
    dbConn.query(`SELECT
        c.id_country as ID,
        c.Country as Country
        FROM Countries AS c
       `, null, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

module.exports = Country;