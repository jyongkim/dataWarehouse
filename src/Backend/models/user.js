let dbConn = require('../dataBase/dbConn')
const sql = require('mysql');
let User = function(user) {
    
}

User.create = (newUser, result) => {
        console.log('newUser:', newUser);
        let sql = "INSERT INTO `users` SET `id_role` = ?,  `first_name` = ?,`last_name` = ?,  `user_name` = ?,  `password` = ?,  `email` = ?";
        dbConn.query(sql, [ 1, newUser.first_name, newUser.last_name, newUser.user_name, newUser.password, newUser.email ],  function(err, rows) {
            console.log(err);
        });

}

User.read = (result) => {
    dbConn.query(`SELECT
    u.id_user AS Id,
    u.last_name AS LastName,
    u.first_name  AS FirstName,
    u.user_name AS Username,
    u.email AS Email,
    r.role AS Role
    FROM users u 
    INNER JOIN roles r
    ON u.id_role = r.id_role`, (err, res) => {
        console.log(err);
        err ? result(err, null) : result(null, res);
})}

User.find = (id, result) => {
    dbConn.query(`SELECT
    u.id_user AS Id,
    role AS Rol,
    user_name AS Username,
    name AS FirstName,
    COUNT(c.id_user) AS Compañías,
    email AS Email
    FROM Users AS u
    JOIN Roles AS r ON u.id_role = r.id_role
    JOIN Companies AS c ON c.id_user = u.id_user
    WHERE u.id_user = ?
    GROUP BY c.id_user`, id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}


User.findByUserName = (name, result) => {
    dbConn.query(`SELECT
    id_user AS Id,
    id_role AS Rol,
    user_name AS Username,
    first_name AS FirstName,
    password AS Password,
    email AS Email
    FROM users 
    WHERE user_name = ?
    `, [name], (err, res) => {
        err ? result(err, null) : result(null, res)
})}







User.update = (id, user, result) => {
    console.log('id:',id)
    console.log('user:', user)
    dbConn.query('UPDATE users SET first_name=?, last_name=?, email= ? WHERE id_user = ?', [user.first_name, user.last_name, user.email, id], (err, res) => {
        console.log('error:',err)
        console.log('res:', res)
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