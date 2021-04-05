let dbConn = require('../dataBase/dbConn')

let User = function(user) {
    this.id_role = user.id_role
    this.user_name = user.user_name
    this.name = user.name
    this.password = user.password
    this.email = user.email
}

User.create = (newUser, result) => {
    dbConn.query('INSERT INTO Users SET ?', newUser, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

User.read = (result) => {
    dbConn.query('SELECT * FROM Users', (err, res) => {
        err ? result(err, null) : result(null, res)
})}

User.find = (id, result) => {
    dbConn.query('SELECT * FROM Users WHERE id_user = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

User.update = (id, user, result) => {
    dbConn.query('UPDATE Users SET ? WHERE id_user = ?', [user, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

User.delete = (id, result) => {
    // Elimina las preferencias consultando contactos y consultando compañías.
    dbConn.query(`DELETE cp FROM contact_preferences AS cp
    JOIN contacts AS con ON con.id_contact = cp.id_contact
    JOIN companies AS com ON com.id_company = con.id_company
    WHERE id_user = ?`, id)
    // Elimina los contactos consultando las compañías.
    dbConn.query(`DELETE con FROM contacts AS con
    JOIN companies AS com ON con.id_company = com.id_company
    WHERE id_user = ?`, id)
    // Elimina las compañías utilizando como referente al id_user.
    dbConn.query('DELETE FROM Companies WHERE id_user = ?', id)
    // Una vez eliminado todo, elimina el usuario y realiza el callback.
    dbConn.query('DELETE FROM Users WHERE id_user = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

module.exports = User;