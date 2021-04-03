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
    dbConn.query('SELECT * FROM Companies WHERE id_user = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Company.find = (id, company, result) => {
    dbConn.query('SELECT * FROM Companies WHERE id_user = ? AND company LIKE ?', [id, '%' + company + '%'], (err, res) => {
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