let dbConn = ''

let User = function(user) {
    this.id_role = user.id_role
    this.user_name = user.user_name
    this.name = user.name
    this.password = user.password
    this.email = user.email
}

User.create = (newUser, result) => {
    dbConn.query('INSERT INTO Users SET = ?', newUser, (err, res) => {
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
    dbConn.query('DELETE FROM Users WHERE id_user = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}