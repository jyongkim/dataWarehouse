let dbConn = '';

let Preference = function(pref) {
    this.id_channel = pref.id_channel
    this.account = pref.account
    this.preference = pref.preference
}

Preference.create = (newPref, result) => {
    dbConn.query('INSERT INTO Contact_preferences SET = ?', newPref, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Preference.read = (id, result) => {
    dbConn.query('SELECT * FROM Contact_preferences WHERE id_contact = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Preference.update = (id, user, result) => {
    dbConn.query('UPDATE Contact_preferences SET ? WHERE id_contact = ?', [user, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Preference.delete = (id, result) => {
    dbConn.query('DELETE FROM Contact_preferences WHERE id_contact = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}