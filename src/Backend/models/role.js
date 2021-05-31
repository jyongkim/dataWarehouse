let dbConn = require('../dataBase/dbConn')

let Role = function(role) {
    this.role = role.role
}

Role.create = (role, result) => {
    dbConn.query('INSERT INTO Roles SET ?', role, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Role.read = (result) => {
    dbConn.query('SELECT * FROM Roles', (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Role.update = (id, role, result) => {
    dbConn.query('UPDATE Roles SET ? WHERE id_role = ?', [role, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Role.delete = (id, result) => {
    dbConn.query('DELETE FROM Roles WHERE id_role = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

module.exports = Role;