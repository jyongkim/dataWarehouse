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
    })
}

User.read = (result) => {
    dbConn.query('SELECT * FROM Users', (err, res) => {
        err ? result(err, null) : result(null, res)
    })
}

User.update = () => {
    
}

User.delete = () => {
    
}