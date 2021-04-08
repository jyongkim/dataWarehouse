let dbConn = require('../dataBase/dbConn')

let Pref = function(pref) {
    this.id_channel = pref.id_channel
    this.account = pref.account
    this.preference = pref.preference
}

Pref.create = (id, newPref, result) => {
    dbConn.query('INSERT INTO Contact_preferences SET ?, id_contact = ?', [newPref, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Pref.read = (id, result) => {
    dbConn.query('SELECT * FROM Contact_preferences WHERE id_contact = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Pref.update = (id, user, result) => {
    dbConn.query('UPDATE Contact_preferences SET ? WHERE id_contact = ?', [user, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Pref.delete = (id, result) => {
    dbConn.query('DELETE FROM Contact_preferences WHERE id_contact = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

module.exports = Pref;