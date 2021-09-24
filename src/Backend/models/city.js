let dbConn = require('../dataBase/dbConn')

let City = function(city) {
    this.ID = city.ID
    this.City = city.City
    this.CoutnryID = city.CountryID
}

City.read = (idCountry, result) => {
    dbConn.query(`SELECT
        c.id_city as ID,
        c.city as City,
        c.id_country AS CountryID
        FROM Cities AS c
        WHERE id_country = ?`, idCountry, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

module.exports = City;