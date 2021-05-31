let dbConn = require('../dataBase/dbConn')

let Company = function(company) {
    this.company = company.company
    this.id_city = company.id_city
    this.address = company.address
}

Company.create = (id, newCompany, result) => {
    dbConn.query('INSERT INTO Companies SET id_user = ?, ?', [id, newCompany], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Company.read = (id, result) => {
    dbConn.query(`SELECT
        c.id_company AS ID,
        company AS Compañía,
        COUNT (cnts.id_company) AS Count,
        CONCAT(city, ", ", country) AS "Ciudad / País"
        FROM Companies AS c
        JOIN Contacts AS cnts ON cnts.id_company = c.id_company
        JOIN Cities AS cty ON cty.id_city = c.id_city
        JOIN Countries AS ctry ON ctry.id_country = cty.id_country
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