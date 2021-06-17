let dbConn = require('../dataBase/dbConn')
const sql = require('mysql');
let User = function(user) {
    
}

User.create = (newUser, result) => {
        console.log('newUser:', newUser);
        let sql = "INSERT INTO `users` SET `id_role` = ?,  `first_name` = ?,`last_name` = ?,  `user_name` = ?,  `password` = ?,  `email` = ?";
        dbConn.query(sql, [ 1, newUser.first_name, newUser.last_name, newUser.username, newUser.password, newUser.email ],  function(err, rows) {
            console.log(err);
        });

}

// User.read = (result) => {
//     dbConn.query(`SELECT
//     u.id_user AS ID,
//     role AS Rol,
//     user_name AS Usuario,
//     name AS Nombre,
//     COUNT(c.id_user) AS Compañías,
//     email AS "E-mail"
//     FROM Users AS u
//     JOIN Roles AS r ON u.id_role = r.id_role
//     JOIN Companies AS c ON c.id_user = u.id_user
//     GROUP BY c.id_user`, (err, res) => {
//         err ? result(err, null) : result(null, res)
// })}

User.read = (result) => {
    console.log('paso por aqui 2');
    dbConn.query(`SELECT
    u.id_user AS Id,
    u.last_name AS LastName,
    u.first_name  AS FirstName,
    u.user_name AS UserName,
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
    u.id_user AS ID,
    role AS Rol,
    user_name AS Usuario,
    name AS Nombre,
    COUNT(c.id_user) AS Compañías,
    email AS "E-mail"
    FROM Users AS u
    JOIN Roles AS r ON u.id_role = r.id_role
    JOIN Companies AS c ON c.id_user = u.id_user
    WHERE u.id_user = ?
    GROUP BY c.id_user`, id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}


// User.findByUserName = (name, result) => {
//     dbConn.query(`SELECT
//     u.id_user AS ID,
//     role AS Rol,
//     user_name AS Usuario,
//     name AS Nombre,
//     password as Password,
//     COUNT(c.id_user) AS Compañías,
//     email AS "E-mail"
//     FROM Users AS u
//     JOIN Roles AS r ON u.id_role = r.id_role
//     JOIN Companies AS c ON c.id_user = u.id_user
//     WHERE u.user_name = ?
//     GROUP BY c.id_user`, name, (err, res) => {
//         err ? result(err, null) : result(null, res)
// })}



User.findByUserName = (name, result) => {
    dbConn.query(`SELECT
    id_user,
    id_role,
    user_name,
    name,
    password,
    email
    FROM users 
    WHERE user_name = ?
    `, [name], (err, res) => {
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