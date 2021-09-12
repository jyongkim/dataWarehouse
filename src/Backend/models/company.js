let dbConn = require('../dataBase/dbConn')

let Company = function(company) {
    this.company = company.company
    this.id_city = company.id_city
    this.address = company.address
    this.phone = company.phone
    this.email  = company.email
}

Company.create = (id, newCompany, result) => {
    console.log('xxxxx')
    dbConn.query('INSERT INTO Companies SET id_user = ?, ?', [id, newCompany], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Company.read = (id, result) => {
    dbConn.query(`SELECT
        c.id_company AS ID,
        company AS Name,
        address AS  Address,
        CONCAT(city, ", ", country) AS Country
        FROM Companies AS c
        LEFT JOIN Contacts AS cnts ON cnts.id_company = c.id_company
        LEFT JOIN Cities AS cty ON cty.id_city = c.id_city
        LEFT JOIN Countries AS ctry ON ctry.id_country = cty.id_country
        WHERE id_user = ?`, id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Company.find = (id, result) => {
    dbConn.query('SELECT * FROM Companies WHERE id_company = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Company.update = (id, company, result) => {
    dbConn.query('UPDATE Companies SET ? WHERE id_company = ?', [company, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Company.delete = (id, result) => {
    dbConn.query('DELETE FROM Companies WHERE id_company = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

module.exports = Company;